
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Messages({messages}) {

    if (!messages.loading && messages.length === 0) {
        return <h5> Something went wrong :( </h5>;
    }
     else if (!messages.loading) {
        return ([...messages.items].reverse().map((message, index) => {
            return (
                <li key={index} className="list-group-item">
                <div class="row">
                    <div class="col">
                        <span class="user-name lead fw-bold mx-3 chat-name">{message.userName}</span>
                        <span class="review-sent fw-lighter">{message.createdAt}</span>
                    </div>
                </div>
                <div class="review pt-2">{message.message}</div>
            </li>
            )
        }))
    } 
    else {
        return <FontAwesomeIcon icon={faSpinner} spin />
    }
}

export default Messages;