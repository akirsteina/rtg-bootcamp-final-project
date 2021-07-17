import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();


router.get('/', async(req, res) => {
    try {
        const query = Message.find({});
        const messages = await query.exec();
        res.json(messages);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.post('/', async(req, res) => {
    const newMessageData = {
        userName: req.body.userName,
        message: req.body.message,
    };
    const message = new Message(newMessageData);
    try {
        const messageEntity = await message.save();
        res.json(messageEntity);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});


export default router;