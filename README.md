### BHMB-Server

This package provides a webserver interface for configuring the Blockheads Message Bot console version.

### Limitations

1. Running more than one bot at once with this extension is not supported.
1. Installing extensions is not yet supported.

### Security

The bot webpage can only be viewed from the machine that hosts the bot, this can be changed by modifying `extension.ts` but should not be. If changed, this package can be used by anyone with the ability to send your PC a network request to crash the bot.
