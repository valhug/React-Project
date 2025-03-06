/* import React, { useState} from 'react'
/* 
interface Validate {
    username: string | number;
    email: string
}
 *
function ValidationForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorUserName, setErrorUserName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    
    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

    function validate(e:any) {
        e.preventDefault();

        if(username.length > 8) {
            setErrorUserName("");
            setUserColor("green");
        } else {
            setErrorUserName("Username must be 8 characters long");
            setUserColor("red");
        }

        if(email.includes("@gmail.com")) {
            setErrorEmail("");
            setEmailColor("green");
        } else if (email.includes("@yahoo.com")) {
            setErrorEmail("");
            setEmailColor("green");
        } else if (email.includes("@hotmail.com")) {
            setErrorEmail("");
            setEmailColor("green");
        } else{
            setErrorEmail("Email should either be @gmail.com, @yahoo.com or @hotmail.com");
            setEmailColor("red");
        }

        if(password.length > 8) {
            setErrorPassword("");
            setPasswordColor("green");
        } else {
            setErrorPassword("Password must be 8 characters long");
            setPasswordColor("red");
        }

        if(password !== "" && password === confirmPassword) {
            setErrorConfirmPassword("");
            setConfirmPasswordColor("green");
        } else {
            setErrorConfirmPassword("Password does not match");
            setConfirmPasswordColor("red");
        }
    }
  return (
    <div className='card'>
        <div className='card-image'></div>

        <form>
            <input 
                type="text"
                placeholder='Name'
                style={{borderColor: userColor}}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
             />
            <input 
                type="email"
                placeholder='Email'
                style={{borderColor: emailColor}}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
             />
            <input 
                type="password"
                placeholder='Password'
                style={{borderColor: passwordColor}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
             />
            <input 
                type="password"
                placeholder='Confirm Password'
                style={{borderColor: confirmPasswordColor}}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
             />
            
            <p className='error'>{errorConfirmPassword}</p>
            <button className='submit-btn' onClick={validate}>
                Submit
            </button>
        </form>
      
    </div>
  )
}

export default ValidationForm
   */

import React, { useState } from 'react';
import './index.css';

interface ValidationState {
    errorUserName: string;
    errorEmail: string;
    errorPassword: string;
    errorConfirmPassword: string;
    userColor: string;
    emailColor: string;
    passwordColor: string;
    confirmPasswordColor: string;
}

function ValidationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [validationState, setValidationState] = useState<ValidationState>({
        errorUserName: '',
        errorEmail: '',
        errorPassword: '',
        errorConfirmPassword: '',
        userColor: '',
        emailColor: '',
        passwordColor: '',
        confirmPasswordColor: '',
    });

    function validate(e: React.FormEvent) {
        e.preventDefault();

        let newValidationState = { ...validationState };

        if (username.length > 8) {
            newValidationState.errorUserName = '';
            newValidationState.userColor = 'green';
        } else {
            newValidationState.errorUserName = 'Username must be 8 characters long';
            newValidationState.userColor = 'red';
        }

        if (email.includes('@gmail.com') || email.includes('@yahoo.com') || email.includes('@hotmail.com')) {
            newValidationState.errorEmail = '';
            newValidationState.emailColor = 'green';
        } else {
            newValidationState.errorEmail = 'Email should either be @gmail.com, @yahoo.com or @hotmail.com';
            newValidationState.emailColor = 'red';
        }

        if (password.length > 8) {
            newValidationState.errorPassword = '';
            newValidationState.passwordColor = 'green';
        } else {
            newValidationState.errorPassword = 'Password must be 8 characters long';
            newValidationState.passwordColor = 'red';
        }

        if (password !== '' && password === confirmPassword) {
            newValidationState.errorConfirmPassword = '';
            newValidationState.confirmPasswordColor = 'green';
        } else {
            newValidationState.errorConfirmPassword = 'Password does not match';
            newValidationState.confirmPasswordColor = 'red';
        }

        setValidationState(newValidationState);
    }

    return (
        <div className='card'>
            <div className='card-image'></div>

            <form>
                <input
                    type='text'
                    placeholder='Name'
                    style={{ borderColor: validationState.userColor }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <p className='error'>{validationState.errorUserName}</p>
                <input
                    type='email'
                    placeholder='Email'
                    style={{ borderColor: validationState.emailColor }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className='error'>{validationState.errorEmail}</p>
                <input
                    type='password'
                    placeholder='Password'
                    style={{ borderColor: validationState.passwordColor }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className='error'>{validationState.errorPassword}</p>
                <input
                    type='password'
                    placeholder='Confirm Password'
                    style={{ borderColor: validationState.confirmPasswordColor }}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <p className='error'>{validationState.errorConfirmPassword}</p>
                <button className='submit-btn' onClick={validate}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ValidationForm;