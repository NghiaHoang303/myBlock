import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
export default function Register() {
    return (
        <div className="register">
           
                <div className="register__title">
                    REGISTER
                </div>
                <div className="register__form">
                    <form>

                    <div className="register__form-email">
                            <i class="fas fa-user register__form-emailIcon"></i>
                            <input type="text" className="form-control" placeholder="User name" ></input>
                        </div>

                        <div className="register__form-email">
                            <i className="far fa-envelope register__form-emailIcon"></i>
                            <input type="text" className="form-control" placeholder="nghiahoang@gmail.com" ></input>
                        </div>

                        <div className="register__form-email">
                            <i className="fas fa-lock register__form-passIcon"></i>
                            <input type="password" className="form-control" placeholder='password' ></input>
                        </div>

                        {/* <div className="register__form-email"> */}
                            <button  className="btn btn-info form-control btnLoginRegister" >
                                Register
                            </button>

                            <Link to='/login' className="btn btnRegister" >
                                Login
                            </Link>
                        {/* </div> */}
                    </form>
                </div>
         
        </div>
    )
}
