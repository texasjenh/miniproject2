import { useState } from 'react';
import { useFormInput } from '../hooks/useForm';

export default function SubscribeForm() {
    const [status, setStatus] = useState('');

    const [nameInputProps, resetName] = useFormInput('');
    const [emailInputProps, resetEmail] = useFormInput('');
 
    function handleSubscribe() {
        resetName(); resetEmail();
        setStatus('Thanks for subscribing!')
    }
 
    return (
        <div className="SubscribeForm componentBox">
            <label>Your First name: <input {...nameInputProps} /></label>
            <label>Your Email: <input {...emailInputProps} /></label>
            <button className="button1" onClick={handleSubscribe}>Subscribe</button>
            <div>{status}</div>
        </div>
    );
}

