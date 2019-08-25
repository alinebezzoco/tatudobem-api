import http from 'http'
import { env, mongo, port, ip, apiRoot } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'

const app = express(apiRoot, api)
const server = http.createServer(app)

mongoose.connect(mongo.uri)
mongoose.Promise = Promise

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log(
      `
                                                                  
      888                 888                  888              888                                                   d8b 
      888                 888                  888              888                                                   Y8P 
      888                 888                  888              888                                                       
      888888  8888b.      888888 888  888  .d88888  .d88b.      88888b.   .d88b.  88888b.d88b.       8888b.  88888b.  888 
      888        "88b     888    888  888 d88" 888 d88""88b     888 "88b d8P  Y8b 888 "888 "88b         "88b 888 "88b 888 
      888    .d888888     888    888  888 888  888 888  888     888  888 88888888 888  888  888     .d888888 888  888 888 
      Y88b.  888  888     Y88b.  Y88b 888 Y88b 888 Y88..88P     888 d88P Y8b.     888  888  888     888  888 888 d88P 888 
      "Y888 "Y888888      "Y888  "Y88888  "Y88888   "Y88P"      88888P"   "Y8888  888  888  888     "Y888888 88888P"  888 
                                                                                                             888          
                                                                                                             888          
                                                                                                             888                                                                                                                                                                                                                                      
        2019 - Aline Bezzoco 
        Feito com amor e Node JS ❤
        Server running at http://localhost:${port}                                                                                                                               
      `,
    );
  })
})

export default app
