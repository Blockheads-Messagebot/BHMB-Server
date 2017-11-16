import { MessageBot as CustomBot } from './bot'
import { MessageBot } from '@bhmb/bot'
import { WorldInfo } from 'blockheads-api/api'
import { Api, getWorlds } from './api'
import { Storage, load } from './storage'
import '@bhmb/ui'
import '@bhmb/messages'
import '@bhmb/console'
import './settings'

(window as any)['@bhmb/bot'] = { MessageBot }
const worldId: string = (window as any).worldId

MessageBot.dependencies = { Api, getWorlds, fetch }

let info: WorldInfo = {
  name: document.title,
  id: worldId
}

async function main() {
  await load()
  let bot = new CustomBot(new Storage(''), info)
  bot.addExtension('ui')
  bot.addExtension('console')
  ;(document.querySelector('.nav-item') as HTMLElement).click()
  // Fix sending from the console
  const consoleInput = document.querySelector('.chat-control input') as HTMLInputElement
  const consoleButton  = document.querySelector('.chat-control button') as HTMLButtonElement

  consoleButton.addEventListener('mouseup', () => bot.send(consoleInput.value, {}, true))
  consoleInput.addEventListener('keydown', event => {
    if (event.key == 'Enter') bot.send(consoleInput.value, {}, true)
  })

  bot.addExtension('messages')
  bot.addExtension('settings')
}
main()

