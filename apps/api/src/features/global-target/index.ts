import * as express from 'express'

export const globalTarget = (app: express.Application) => {

  app.get('/api/globalTarget', async (req, res) => {
    try {
      const data = [
        {title: 'Английский язык С1', percent: 70},
        {title: 'Пицца', percent: 40},
        {title: 'Новая машина', percent: 30}
      ]

      res.status(200).json(data)
    } catch (e) {
      res.status(500).json({message: 'App Error'})
    }
  })
}
