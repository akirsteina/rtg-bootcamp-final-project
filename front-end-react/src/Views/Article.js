import '../Assets/Css/style.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleField from '../Components/Article/ArticleField';

function Article() {

    const { articleID } = useParams();
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadArticle = async () => {
        setLoading(true);
        try {
            const url = `http://localhost:8072/articles/${articleID}`;
            const response = await axios.get(url);
            setArticle(response.data);
            setLoading(false);

        } catch (e) {
            alert('Whoops, something went wrong!');
            setArticle();
            setLoading(false);
        }
    }

    useEffect(() => {
        loadArticle();
    }, []);

    return (
        <ArticleField article={article} loading={loading}/>
    )
}

export default Article;