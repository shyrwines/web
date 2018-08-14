const express = require('express')
const fs = require('fs')

const app = express()

app.get('/images/*', (req, res) => {
  res.sendFile(__dirname + req.path)
})

app.get('/wines.json', (req, res) => {
  res.sendFile('/Users/yash/Dropbox/Shyr/cli/wines.json')
})

app.get('/wine-images/*', (req, res) => {
  res.sendFile('/Users/yash/Dropbox/Shyr' + req.path)
})

app.listen(5000, () => console.log('Listening on port 5000'))
