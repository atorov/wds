import { useRef, useState } from 'react';
import './App.css';
import useValidator from './useValidator';

function validateEmail(this: HTMLInputElement) {
    if (!this.value) {
        return 'Error! Email is required (Cannot be blank)!';
    }
    if (!this.value.endsWith('@test.com')) {
        return 'Error! Email must end in "@test.com"!';
    }
    return '';
}

function validatePassword(this: HTMLInputElement) {
    if (!this.value) {
        return 'Error! Password is required (Cannot be blank)!';
    }
    if (this.value.length < 10) {
        return 'Error! Password must be 10 characters or longer"!';
    }
    return '';
}

function App() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const submitBtnRef = useRef<HTMLButtonElement>(null);

    const [submits, setSubmits] = useState(0);
    console.log('🚀 TODO: ~ file: App.tsx:31 ~ App ~ submits:', submits);

    const { error: emailError } = useValidator(
        emailRef,
        ['focus', 'blur', 'input'],
        validateEmail
    );
    const { error: passwordError } = useValidator(
        passwordRef,
        ['focus', 'blur', 'input'],
        validatePassword
    );

    const hasErrors = Boolean(emailError || passwordError);

    // useEffect(() => {
    //     if (submitBtnRef.current) {
    //         submitBtnRef.current.disabled = hasErrors;
    //     }
    // }, [hasErrors]);

    return (
        <form
            className="form"
            onSubmit={async (ev) => {
                ev.preventDefault();
                setSubmits((prev) => prev + 1);
                await null;
                if (!hasErrors) {
                    if (emailRef.current) emailRef.current.value = '';
                    if (passwordRef.current) passwordRef.current.value = '';
                    setSubmits(0);
                }
            }}
        >
            <div className={`form-group ${emailError ? 'error' : ''}`}>
                <label className="label" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    ref={emailRef}
                    autoFocus
                    className="input"
                />
                <div className="msg">{submits ? emailError : null}</div>
            </div>
            <div className={`form-group ${passwordError ? 'error' : ''}`}>
                <label className="label" htmlFor="password">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    ref={passwordRef}
                    className="input"
                />
                <div className="msg">{submits ? passwordError : null}</div>
            </div>
            <button ref={submitBtnRef} className="btn">
                Submit
            </button>
        </form>
    );
}

export default App;
