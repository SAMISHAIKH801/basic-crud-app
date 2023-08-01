

import express from 'express'

let router = express.Router()

import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comment.mjs'
import feedRouter from './routes/feed.mjs'
import postRouter from './routes/post.mjs'


router.use(authRouter)

router.use((req, res, next) =>{
    let token = "valid"
    if(token === "valid"){
        res.render
        next()
        
    }else{
        
        res.send({message: "invalid tokken"})
    }
    
})

router.use(commentRouter)
router.use(feedRouter)
router.use(postRouter)


router.get('/', (req, res) => {
    console.log('Hello world!', new Date())
    res.send('Hello World!' + new Date())
})

export default router