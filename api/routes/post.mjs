
import express, { text } from 'express'
import { nanoid } from 'nanoid'

let router = express.Router()


// single post >>>>>
// Not recommended 
let posts = [
    {
     id: nanoid(),
     title: "abc",
     text: "Hello world",
    }
 ]
 router.post('/post', (req, res, next) => {
     console.log('this is login', new Date())
 
     if(    !req.body.title 
         || !req.body.text){
 
         res.status(401).send(`required parameters is missing, 
         example request body  {
     title: "abc post title",
     text: "same post text",
         }`)
     }
 
     const newPost = {

         id:  nanoid(),
         title: req.body.title,
         text: req.body.text,
     }
     posts.unshift (newPost) 
     
     res.send('Post created')
     
 })
    //  All posts get >>>>>>
 router.get('/posts', (req, res, next) => {
 
     console.log('this is login', new Date())
     res.send(posts)
     
 })

// single id post  
router.get('/post/:postId', (req, res, next) => {
    console.log('this is get', new Date())

    // for(let i=0; i < posts.length; i++){
    //     if(posts[i].id === req.params.postId){
    //         res.send(posts[i])
    //         return;
    //     }
    // }
    // res.send('post not found with id' + req.params.postId)
    
})
//  PUT edit >>>>>.
router.put('/post/:postId', (req, res, next) => {

    if(!req.params.postId
        || req.body.title
        || req.body.text){
        res.status(403).send(`Example put body, 
        put /api/post/:postId
        {  title: req.body.title,
            text:  req.body.text }`)
    }

    for(let i=0; i < posts.length; i++){
        if(posts[i].id === req.params.postId){

        posts[i] = {
           title: req.body.title,
           text:  req.body.text
        }

          res.send('post updated with id' + req.params.postId)
            return;
        }
    }
   
    res.send('Post created' + new Date())
    
})
router.delete('/post/:postId', (req, res, next) => {

    console.log('this is login', new Date())
    if(!req.params.postId){
        res.status(403).send(`post id must be valid id`)
    }

    for(let i=0; i < posts.length; i++){
        if(posts[i].id === req.params.postId){

          posts.splice(i, 1)
          res.send('post deleted with id' + req.params.postId)
            return;
        }
    }
    res.send('post not found with id' + req.params.postId)
    
})

export default router