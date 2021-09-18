import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
export default function Login() {
    return (
        <div className="login">
            <div className="login__title">
                LOGIN
            </div>
            <div className="login__form">
                <form>
                    <div className="login__form-email">
                        <i className="far fa-envelope login__form-emailIcon"></i>
                        <input type="text" className="form-control" placeholder="nghiahoang@gmail.com" ></input>
                    </div>

                    <div className="login__form-email">
                        <i className="fas fa-lock login__form-passIcon"></i>
                        <input type="password" className="form-control" placeholder='password' ></input>
                    </div>

                    {/* <div className="login__form-email"> */}
                        <button  className="btn btn-info form-control btnLoginRegister" >
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
