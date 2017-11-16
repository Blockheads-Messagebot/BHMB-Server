// This is essentially a copy from the Browser-Loader package with the backup settings stripped out.

import { MessageBot } from '@bhmb/bot'
import { UIExtensionExports } from '@bhmb/ui'

import html from './settings.html'

const settingDefaults: [string, string | number | boolean][] = [
  // General
  ['messages/announcementDelay', 10],
  ['messages/maxResponses', 3],
  ['console/logJoinIps', true],
  ['console/logUnparsedMessages', true],
  // Advanced
  ['messages/regexTriggers', false],
  ['messages/disableWhitespaceTrimming', false],
  ['splitMessages', false],
  ['splitToken', '<split>'],
  ['extensions/devMode', false],
  ['extensions/repos', 'https://gitcdn.xyz/cdn/Blockheads-Messagebot/Extensions/master/extensions.json'],
]

MessageBot.registerExtension('settings', ex => {
  let settingsRoot = ex.bot.storage
  let ui = ex.bot.getExports('ui') as UIExtensionExports

  let tab = ui.addTab('Settings')
  tab.innerHTML = html

  for (let [key, def] of settingDefaults) {
    let el = tab.querySelector(`[data-target="${key}"]`) as HTMLInputElement

    if (typeof def == 'boolean') {
      el.checked = settingsRoot.get(key, def)
    } else {
      el.value = String(settingsRoot.get(key, def))
    }
  }

  tab.addEventListener('change', () => {
    for (let [key, def] of settingDefaults) {
      let el = tab.querySelector(`[data-target="${key}"]`) as HTMLInputElement

      if (typeof def == 'boolean') {
        settingsRoot.set(key, el.checked)
      } else if (typeof def == 'number') {
        settingsRoot.set(key, +el.value)
      } else {
        settingsRoot.set(key, el.value)
      }
    }
  })

  ex.remove = function () {
    ui.removeTab(tab)
  }
})
