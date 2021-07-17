
import Breadcrumbs from '../Components/Breadcrumbs';
import '../Assets/Css/forum.css';
import ChatMessagesList from '../Components/ChatMessagesList';

function Forum() {
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
                <div className="row my-5 py-3">
                    <div className="col-12 chat-window rounded">
                        <h3 className="special-title main-header py-3 fs-2">Happy plants forum</h3>
                        <ChatMessagesList/>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Forum;

// https://www.w3schools.com/howto/howto_css_chat.asp