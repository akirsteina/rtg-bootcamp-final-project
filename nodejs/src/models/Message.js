import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const message = mongoose.model('Messages', messageSchema);

export default message;