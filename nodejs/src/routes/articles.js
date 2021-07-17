import express from 'express';
import Article from '../models/Article.js';

const router = express.Router();


router.get('/', async(req, res) => {
    try {
        const query = Article.find({});
        const articles = await query.exec();
        res.json(articles);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.get('/:_id', async(req, res) => {
    const { _id } = req.params;

    try {
        const query = Article.findById(_id);
        const article = await query.exec();
        if (!article) {
            res.status(404).json({ notFound: true });
            return;
        }
        res.json(article);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.post('/', async(req, res) => {
    const newArticlekData = {
        title: req.body.title,
        author: req.body.author,
        shortDescription: req.body.shortDescription,
        paragraphs: req.body.paragraphs,
        mainImage: req.body.mainImage,
    };
    const article = new Article(newArticlekData);
    try {
        const articleEntity = await article.save();
        res.json(articleEntity);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});



export default router;