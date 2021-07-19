import swal from 'sweetalert';
import {useState} from 'react';

function SubscribeField() {

    const [email, setEmail] = useState('');
    const handleInput = (event) => {
        setEmail(event.target.value);
    }

    const popUpWindow = (event) => {
        event.preventDefault();
        swal("Great!", `You have subscribed to our awesome newsleter with an email ${email}`, "success", {
            buttons: ["Oh noez!", "Aww yiss!"],
          });
    }

    return (
        <div className="row">
        <div className="col-8 offset-2 text-center py-3">
            <h3 className="main-header ">Subscribe</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="email-input" className="form-label text-muted">Enter your e-mail address</label>
                    <input type="email" className="form-control" id="email-input" value={email} onChange={handleInput}/>
                    <div id="emailHelp" className="form-text">Get the newest articles, insights into potting, and more!</div>
                    <button className="btn main-page-btn fw-bold my-3" onClick={popUpWindow}>Submit</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SubscribeField;