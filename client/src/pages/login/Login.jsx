import axios from 'axios';
import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './login.css'
export default function Login() {

    const userRef = new useRef();
    const passwordRef = new useRef();

    const {user, dispatch, isFetching} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"})
        try {
            const res = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value
            });

            dispatch({type: "LOGIN_SUCCESS", payload: res.data})

        } catch (error) {   
            dispatch({type: "LOGIN_FAILURE"})
        }

    }
    console.log('dddd',user);
    return (
        <div className="login">
            <div className="login__title">
                LOGIN
            </div>
            <div className="login__form">
                <form onSubmit= {handleSubmit}>
                    <div className="login__form-email">
                        <i className="far fa-envelope login__form-emailIcon"></i>
                        <input type="text" className="form-control" placeholder="username"
                        ref= {userRef}
                        ></input>
                    </div>

                    <div className="login__form-email">
                        <i className="fas fa-lock login__form-passIcon"></i>
                        <input type="password" className="form-control" placeholder='password'
                            ref = {passwordRef}
                        ></input>
                    </div>

                    {/* <div className="login__form-email"> */}
                        <button  className="btn btn-info form-control btnLoginRegister" type='submit' disabled = {isFetching}>
                            Login
                        </button>

                        <Link to='/register'  className="btn btnRegister" >
                            Register
                        </Link>
                    {/* </div> */}
                </form>
            </div>
        </div>
    )
}
