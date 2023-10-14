import compression from 'compression'
import cors from 'cors'
import express from 'express'
import http from 'http'
import path from 'path'

const { API_URL } = process.env
const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(compression())
app.use(express.json({ limit: '20mb' }))
app.use(express.urlencoded({ limit: '20mb', extended: true }))
app.use('/static', express.static(path.join(__dirname, '/static/')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'))
})

server.listen(3700, () => {
  console.log(`Api listening at ${API_URL}  in process ${process.pid}`)
})

process.on('SIGTERM', () => {
  console.log('server ending', new Date().toISOString())
  server.close(() => process.exit())
})
