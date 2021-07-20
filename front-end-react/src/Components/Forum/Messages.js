
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { format, parseJSON } from 'date-fns';

function Messages({ messages }) {

    if (!messages.loading && messages.length === 0) {
        return <h5> Something went wrong :( </h5>;
    }
    else if (!messages.loading) {

        return ([...messages.items].reverse().map((message, index) => {
            return (
                <li key={index} className="list-group-item">
                    <div className="row">
                        <div className="col d-flex justify-content-between align-items-center">
                            <span className="user-name lead fw-bold mx-3 chat-name">{message.userName}</span>
                            <span className="review-sent badge bg-success fw-lighter">{format(parseJSON(message.createdAt), 'yyyy/MM/dd      H:m')} 
                            </span>
                        </div>
                    </div>
                    <div className="review pt-2">{message.message}</div>
                </li>
            )
        }))
    }
    else {
        return <FontAwesomeIcon icon={faSpinner} spin />
    }
}

export default Messages;