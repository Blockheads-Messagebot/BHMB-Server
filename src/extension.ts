// Can't use import * as express or import express = require as they both break typescript
// when used with rollup
import * as core from 'express-serve-static-core'
const express = require('express') as () => core.Express

import * as bodyParser from 'body-parser'
const jsonParser = bodyParser.json()
import { MessageBot } from '@bhmb/bot'
import * as fs from 'fs'

const escapeHtml = (html: string): string => html.replace(/[&<>'"`]/g, ([match]) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
} as {[k: string]: string})[match])

MessageBot.registerExtension('@bhmb/server', async ex => {
  ex.remove = () => {
    throw new Error('Removing the server requires restarting the bot.')
  }

  const worldName: string = (ex.bot.world as any)._api.info.name
  const worldId: string = (ex.bot.world as any)._api.info.id

  const server = express()
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
    `)
  })
  server.get('/bot.js', (_, res) => fs.createReadStream(__dirname + '/bundle.js').pipe(res))

  // To get the current config
  server.get('/storage', (_, res) => {
    const storage: {[key: string]: string} = {}
    ex.bot.storage.keys().forEach(key => storage[key] = JSON.stringify(ex.bot.storage.get(key, {})))
    res.json(storage)
  })

  server.post('/storage', jsonParser, (req, res) => {
    // The keys have leading slashes.
    Object.keys(req.body)
      .forEach(key => ex.bot.storage.set(key.substr(1), JSON.parse(req.body[key])))

      res.json({ status: 'OK' })
  })

  // Api routes
  server.get('/lists', (_req, res) => {
    ex.world.getLists(true).then(lists => res.json(lists))
  })
  server.post('/lists', jsonParser, (req, res) => {
    ex.world.setLists(req.body).then(result => res.json(result))
  })
  server.get('/overview', (_req, res) => {
    ex.world.getOverview(true).then(overview => res.json(overview))
  })
  server.get('/logs', (_req, res) => {
    ex.world.getLogs(true).then(logs => res.json(logs))
  })
  server.post('/send', jsonParser, (req, res) => {
    ex.bot.send(req.body.message)
    res.json({ status: 'OK' })
  })

  let uniqueId = 0
  const messageQueue: { id: number, message: string }[] = []
  const addMessage = (message: string) => {
      messageQueue.push({
      id: uniqueId++,
      message
    })
    while (messageQueue.length > 500) messageQueue.unshift()
  }

  ex.world.onMessage.sub(({player, message}) => {
    addMessage(`${player.name}: ${message}`)
  })
  ex.world.onJoin.sub(player => {
    addMessage(`${worldName} - Player Connected ${player.name} | ${player.ip} | ${'a'.repeat(32)}`)
  })
  ex.world.onLeave.sub(player => {
    addMessage(`${worldName} - Player Disconnected ${player.name}`)
  })
  ex.world.onOther.sub(addMessage)
  server.post('/messages', jsonParser, (req, res) => {
    const lastId: number = req.body.lastId
    const messages = messageQueue
      .filter(({id}) => id >= lastId)
      .map(({message}) => message)

    res.json({nextId: uniqueId + 1, log: messages})
  })
  server.get('/start', (_req, res) => {
    ex.world.start()
    res.json({status: 'OK'})
  })
  server.get('/stop', (_req, res) => {
    ex.world.stop()
    res.json({status: 'OK'})
  })
  server.get('/restart', (_req, res) => {
    ex.world.restart()
    res.json({status: 'OK'})
  })

  server.listen(8008, 'localhost', () => console.log('Started server on http://localhost:8080/'))
})
