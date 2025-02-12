import { useState } from "react";

function EmailForm() {
    // input state values always need to be strings - empty initially
    const [userEmail, setUserEmail] = useState('');
    
    return (
        <div className="EmailForm componentBox">
        <div className="formRow">
            <label>Join our email list:
                <input type="email" value={userEmail} name="userEmail"
                    onChange={(e) => setUserEmail(e.target.value)} />
            </label>
        </div>
        </div>
    )
   }
   
   export default EmailForm