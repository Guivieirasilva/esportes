import express from "express";
import cors from 'cors'
import { PrismaClient } from "@prisma/client";

import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hours-string";

const app = express();
const PORT = 3333;
const prisma = new PrismaClient({
  log:['query']
})

app.use(express.json())
app.use(cors())


app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count:{
        select:{
          ads: true
        }
      }
    }
  })
  return res.json(games)
});

app.post("/games/:id/ads", async (req, res) => {

  const gameId: any = req.params.id;
  const body: any = req.body;

  const ad = await prisma.ad.create({
    data:{
      gameId,
      name: body.name,
      weekDays: body.weekDays.join(','),
      discord: body.discord,
      useVoiceChannel: body.useVoiceChannel,
      yearsPlaying: body.yearsPlaying,
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd)

    }
  })

  return res.status(201).json(ad);
});

app.get("/games/:id/ads", async (req, res) => {

   const gameid = req.params.id;

   const ads = await prisma.ad.findMany({
    select:{
      id:true,
      name:true,
      weekDays:true,
      useVoiceChannel:true,
      yearsPlaying:true,
      hourStart:true,
      hourEnd:true,
    },
    where:{
      gameId:gameid
    },
    orderBy: {
      createdAt: "desc"
    }
   })

  return res.json(ads.map(ad => {
    return{
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd)
    }
  }));
});

app.get("/ads/:id/discord", async (req, res) => {

  const adsid = req.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select:{
      discord: true
    },
    where:{
      id: adsid
    }
  })

  return res.json({
    discord: ad.discord
  });
 });

app.listen(PORT);
