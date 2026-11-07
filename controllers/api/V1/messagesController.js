import {Db} from 'mongodb'
import Message from '../../../model/api/V1/messageModel.js' 

 // get all messages
 export const  list =   async (req, res, next) => {
    const messages = await Message.find()

    const result = {
        status: 'success',
        message: 'messages retrieved successfully',
        data: messages
    }
    
    res.json(result);
   
}

// create a new message
export const create  =  async (req, res, next) => {

    try{    

    let message = new Message()
    message.text = req.body.text
    message.username = req.body.username
    message.createdAt = new Date()
    await message.save()

    const result = {
        status: 'success',
        message: 'message created successfully',
        data: message
    }

    res.json(result);

    }
    catch(err){
        console.log(err)
    }

}

// update a message
export const update  =   async (req, res, next) => {
    res.send('update messages')
}

// delete a message
export const remove = (req, res, next) => {
    res.send('delete messages')
}



