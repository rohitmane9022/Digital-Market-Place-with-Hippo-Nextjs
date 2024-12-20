import { z } from "zod";
import { authRouter } from "./auth-router";
import {  publicProcedure, router } from "./trpc";
import { QueryValidator } from "../lib/validator/query-validator";

import getPayloadClient from "../get-payload-clients";


export const appRouter= router({
  auth: authRouter,
  getInfiniteProducts:publicProcedure.input(z.object({
    limit:z.number().min(1).max(100),
    cursor:z.number().nullish(),
    query:QueryValidator
  })).query(async({input})=>{
    const {query,cursor}= input
    const {sort,limit, ...queryOpts}= query

    const payload= await getPayloadClient()

    const {docs}= await payload.find({
      collection:"products",
      where:{
        approvedForSale:{
          equals:"approved",
        }
      },
      sort,
      depth:1,
      limit,
      page,
    })
  })
})

export type AppRouter= typeof appRouter