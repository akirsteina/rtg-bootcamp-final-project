
import Breadcrumbs from '../Components/Breadcrumbs';
import '../Assets/Css/style.css';
import ChatMessagesList from '../Components/Forum/ChatMessagesList';
import NewMessageForm from '../Components/Forum/NewMessageForm';
import { useState } from 'react';

function Forum() {
    const [counter, setCounter] = useState(0);

    const reloadMessagesList = () => {
        setCounter(counter + 1);
    }

    const breadcrumbPaths = [
        { link: '/', label: 'Home' },
        { label: 'Forum' }
    ];

    return (
        <main>
            <div className="container">
                <div className="row pt-5 mt-5">
                    <div className="col-12 breadcrumbs">
                        <Breadcrumbs paths={breadcrumbPaths} />
                    </div>
                </div>
                <div className="row mt-2">
                    <h3 className="special-title main-header pb-3 fs-2">Happy plants forum</h3>
                    <div className="col-12 chat-window rounded">
                        <ChatMessagesList reloadMessagesList={reloadMessagesList} counter={counter}/>
                    </div>
                </div>
            </div>

            <div className="container-fluid content-wrapper">
                <div className="row py-5">
                    <div className="col-12 col-md-8 offset-md-2">
                        <NewMessageForm reloadMessagesList={reloadMessagesList}/>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Forum;