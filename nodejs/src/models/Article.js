import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    paragraphs: {
        type: Array,
        default: [],
        required: true,
    },
    mainImage: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const article = mongoose.model('Articles', articleSchema);

export default article;