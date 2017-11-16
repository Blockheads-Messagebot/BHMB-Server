'use strict';

var bodyParser = require('body-parser');
var bot = require('@bhmb/bot');
var fs = require('fs');

const express = require('express');
const serverPort = 8008;
const serverAddress = 'localhost';
const jsonParser = bodyParser.json();
const escapeHtml = (html) => html.replace(/[&<>'"`]/g, ([match]) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
}[match]));
bot.MessageBot.registerExtension('@bhmb/server', async (ex) => {
    ex.remove = () => {
        throw new Error('Removing the server requires restarting the bot.');
    };
    const worldName = ex.bot.world._api.info.name;
    const worldId = ex.bot.world._api.info.id;
    const server = express();
    // const storage = ex.bot.storage
    // For serving the page
    server.get('/', (_req, res) => {
        res.send(`
      <!DOCTYPE html>
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(worldName)}</title>
        <script>window.worldId = "${worldId}"</script>
      </head>
      <script defer src="/bot.js"></script>
    `);
    });
    server.get('/bot.js', (_, res) => fs.createReadStream(__dirname + '/bundle.js').pipe(res));
    // To get the current config
    server.get('/storage', (_, res) => {
        const storage = {};
        ex.bot.storage.keys().forEach(key => storage[key] = JSON.stringify(ex.bot.storage.get(key, {})));
        res.json(storage);
    });
    server.post('/storage', jsonParser, (req, res) => {
        // The keys have leading slashes.
        Object.keys(req.body)
            .forEach(key => ex.bot.storage.set(key.substr(1), JSON.parse(req.body[key])));
        res.json({ status: 'OK' });
    });
    // Api routes
    server.get('/lists', (_req, res) => {
        ex.world.getLists(true).then(lists => res.json(lists));
    });
    server.post('/lists', jsonParser, (req, res) => {
        ex.world.setLists(req.body).then(result => res.json(result));
    });
    server.get('/overview', (_req, res) => {
        ex.world.getOverview(true).then(overview => res.json(overview));
    });
    server.get('/logs', (_req, res) => {
        ex.world.getLogs(true).then(logs => res.json(logs));
    });
    server.post('/send', jsonParser, (req, res) => {
        ex.bot.send(req.body.message);
        res.json({ status: 'OK' });
    });
    let uniqueId = 0;
    const messageQueue = [];
    const addMessage = (message) => {
        messageQueue.push({
            id: uniqueId++,
            message
        });
        while (messageQueue.length > 500)
            messageQueue.unshift();
    };
    ex.world.onMessage.sub(({ player, message }) => {
        addMessage(`${player.name}: ${message}`);
    });
    ex.world.onJoin.sub(player => {
        addMessage(`${worldName} - Player Connected ${player.name} | ${player.ip} | ${'a'.repeat(32)}`);
    });
    ex.world.onLeave.sub(player => {
        addMessage(`${worldName} - Player Disconnected ${player.name}`);
    });
    ex.world.onOther.sub(addMessage);
    server.post('/messages', jsonParser, (req, res) => {
        const lastId = req.body.lastId;
        const messages = messageQueue
            .filter(({ id }) => id >= lastId)
            .map(({ message }) => message);
        res.json({ nextId: uniqueId + 1, log: messages });
    });
    server.get('/start', (_req, res) => {
        ex.world.start();
        res.json({ status: 'OK' });
    });
    server.get('/stop', (_req, res) => {
        ex.world.stop();
        res.json({ status: 'OK' });
    });
    server.get('/restart', (_req, res) => {
        ex.world.restart();
        res.json({ status: 'OK' });
    });
    server.listen(serverPort, serverAddress, () => console.log(`Started server on http://${serverAddress}:${serverPort}/`));
});
