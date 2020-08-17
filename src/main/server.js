import express from 'express'
import exFileUpload from 'express-fileupload'
import cors from 'cors'
import path from 'path'

const app = express()

app.set('port', 9803)
  .use(exFileUpload({
    debug: process.env.NODE_ENV === 'development'
  }))
  .use(cors())

app.get('/', (req, res) => res.send(true))
app.post('/upload', (req, res) => {
  const files = req.files

  if (!files || !Object.keys(files).length) return res.send('no files')

  let file = files.file

  file.mv(`${path.join(__dirname, 'files')}/${file.name}`, (err) => {
    if (err) return res.status(500).send(err)

    res.send(true)
  })
})

function init () {
  app.listen(app.get('port'), (err) => {
    if (err) {
      console.error(err)

      throw err
    }

    console.log(`server running on  ${app.get('port')}`)
  })
}

export default init
