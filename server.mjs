import express from 'express'
import path  from 'path';

import apiRouter from '../api/index.mjs'




const __dirname = path.resolve();

const app = express()
app.use(express.json())
app.use('/api', apiRouter)



app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
