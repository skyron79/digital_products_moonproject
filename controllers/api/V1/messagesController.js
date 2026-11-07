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

// update a message : optional
export const update  =   async (req, res, next) => {
    const messageId = req.params.id
    const updatedMessage = await Message.findByIdAndUpdate(messageId, req.body, { new: true })

    const result = {
        status: 'success',
        message: 'message updated successfully',
        data: updatedMessage
    }

    res.json(result)
}

// delete a message : optional
export const remove = async (req, res, next) => {

    res.send('delete messages')

    const messageId = req.params.id
    const deleteedMesage = await Message.findByIdAndDelete(messageId)

    const result = {
        status: 'success',
        message: 'message deleted successfully',
        data: deleteedMesage
    }

    res.json(result)

}



