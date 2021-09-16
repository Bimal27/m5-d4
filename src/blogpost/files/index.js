import express from 'express'
import multer from "multer"
import { join,dirname} from "path"
import { fileURLToPath } from "url"

import { saveAuthorPicture } from "../../lib/fs-tools.js"



const filesRouter = express.Router()

filesRouter.post('/uploadSingle/:id', multer().single('avatarPic'), (req, resp) =>{
   try {
    saveAuthorPicture("3kgeacktjxtomx.gif", req.file.buffer)
    res.send("OK")
   } catch (error) {
    resp.send(500).send({message: error.message})
   }
})


export default filesRouter