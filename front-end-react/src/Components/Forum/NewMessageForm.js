import Axios from "axios";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function NewMessageForm({ reloadMessagesList }) {

    const [saving, setSaving] = useState(false);
    const [newUserName, setNewUserName] = useState('');
    const [newMessage, setNewMessage] = useState('');

    const updateNewUserName = (event) => {
        setNewUserName(event.target.value);
    }

    const updateNewMessage = (event) => {
        setNewMessage(event.target.value);
    }

    const createNewMessage = async (event) => {
        if (newUserName === '' || newMessage === '') {
            event.preventDefault();
            alert('All fields are required!');
            return;
        };
        setSaving(true);
        const url = 'http://localhost:8072/messages';
        const data = {
            userName: newUserName,
            message: newMessage,
        };

        try {
            await Axios.post(url, data);
            setSaving(false);
            setNewMessage('');
            setNewUserName('');
            reloadMessagesList();
        } catch (e) {
            alert('Something went wrong when talking to the server');
            setSaving(false);
        }
    }

    let nameInput = <input value={newUserName} onChange={updateNewUserName} type="text" className="form-control" id="inputName" />;
    let messageInput = <textarea value={newMessage} onChange={updateNewMessage} type="text" className="form-control" id="inputMessage" />;
    let submitButton = <button onClick={createNewMessage} type="submit" className="btn chat-btn fw-bold">Submit</button>;
    if (saving) {
        nameInput = <input type="text" className="form-control" id="inputName" disabled={true} />;
        messageInput = <textarea type="text" className="form-control" id="inputMessage" disabled={true} />;
        submitButton = <button type="submit" className="btn chat-btn" disabled={true}>Saving...</button>;
    }

    function onChange(value) {
        console.log("Captcha value:", value);
      }
    return (
        <div>
            <div className="row">
                <div className="col mt-3 text-center">
                    <h1 className="main-header special-title">What do you have to say about plants?</h1>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <form>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="inputName" className="form-label lead">Please enter your name:</label>
                                    {nameInput}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="inputMessage" className="form-label lead">Enter your message:</label>
                                    {messageInput}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 offset-6 text-end">
                            <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}/>
                                {submitButton}

                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default NewMessageForm;