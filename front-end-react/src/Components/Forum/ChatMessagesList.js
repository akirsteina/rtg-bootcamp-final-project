import axios from "axios";
import { useEffect, useState } from "react";
import Messages from './Messages';

function ChatMessagesList({ counter }) {

    const [messages, setMessages] = useState({
        loading: true,
        items: [],
    });

    const loadMessages = async () => {
        setMessages({
            loading: true,
            items: [],
        });
        try {
            const url = 'http://localhost:8072/messages';
            const response = await axios.get(url);
            setMessages({
                loading: false,
                items: response.data,
            });
        } catch (e) {
            alert('Whoops, something went wrong!');
            setMessages({
                loading: false,
                items: [],
            });
        }
    }

    useEffect(() => {
        loadMessages();
    }, [counter]);

    console.log(messages.loading);

    return (
        <ul className="list-group mt-2">
            <Messages messages={messages}/>
        </ul>
    )
}

export default ChatMessagesList;