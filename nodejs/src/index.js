import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import articleRoutes from './routes/articles.js';
import cors from 'cors';

dotenv.config();
const server = express();
server.use(cors());
server.use(bodyParser.json());

server.use('/articles', articleRoutes);

mongoose.connect(
    process.env.MONGOOSE_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(`Could not connect to the database:`, err);
            return;
        }
        console.log('Database is up and running');
    });

server.listen(process.env.PORT, () => {
    console.log(`Express is up and running on port ${process.env.PORT}`);
});