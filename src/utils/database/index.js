import { ipcMain } from 'electron'

import settings from './settings'

ipcMain.on('getSettings', async (event, query) => {
  let result = await settings.find(query)

  return result
})

export {
  settings
}
