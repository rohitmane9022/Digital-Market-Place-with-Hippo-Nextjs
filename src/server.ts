import express from 'express'
import getPayloadClient from './get-payload-clients'
import { nextApp, nextHandle } from './next-utils'

const app = express()

const PORT= Number(process.env.PORT) || 3000

const start=async()=>{
  const payload=await getPayloadClient({
    initOptions:{
      express:app ,
      onInit:async(cms)=>{
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`)
      },
    },
  })
  app.use((req,res)=>nextHandle(req,res))

  nextApp.prepare().then(()=>{

    payload.logger.info('Next.js started')

    app.listen(PORT, async()=>{
      payload.logger.info(`Next.js App URL: ${process.env.Next_PUBLIC_SERVER_URL}`)
    })
  })
}

start()