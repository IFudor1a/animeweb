import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import '../Styles/AuthPage.scss'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const {store} = useContext(Context);
    const [state, setState] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='Login'>
            <h3>{state ? 'REGISTER' : 'LOGIN'} </h3>
            <input placeholder='Login...'/>
            <input placeholder='Password...'/>
            <button onSubmit={(e) => {
                handleSubmit(e)
            }}>
                {
                    state ? 'CREATE MY ACCOUNT' : 'LOGIN'
                }
            </button>
            <a onClick={() => setState(!state)}>{state ? "Already have an account? Login" : "Don't have an account? Create one"}</a>
        </div>
    );
}
const Login = () => {
    return (
        <div>
            6

        </div>
    )
}

const Register = () => {
    return (
        <div>

        </div>
    )
}
export default observer(LoginForm);