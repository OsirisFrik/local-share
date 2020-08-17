import Database from 'nedb-promises'
import { app } from 'electron'
import path from 'path'

const appPath = app.getPath('appData')

const settings = new Database({
  autoload: true,
  filename: path.join(appPath, 'local-share/settings.db')
})

export default settings
