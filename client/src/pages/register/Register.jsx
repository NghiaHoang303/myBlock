import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import axios from 'axios'

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e)=> {
        e.preventDefault();
        setError(false)
        try {
            const res = await axios.post('/auth/register', {
                username, email, password
            })
            res.data && window.location.replace("/login")
        } catch (error) {
            setError(true);
        }
      
    }

    return (
        <div className="register">
           
                <div className="register__title">
                    REGISTER
                </div>
                <div className="register__form">
                    <form onSubmit= {handleSubmit}>

                    <div className="register__form-email">
                            <i class="fas fa-user register__form-emailIcon"></i>
                            <input type="text" className="form-control" placeholder="User name" 
                            onChange = {(e) => setUsername(e.target.value) }
                            ></input>
                        </div>

                        <div className="register__form-email">
                            <i className="far fa-envelope register__form-emailIcon"></i>
                            <input type="text" className="form-control" placeholder="nghiahoang@gmail.com" 
                            onChange = {(e) => setEmail(e.target.value)}
                            ></input>
                        </div>

                        <div className="register__form-email">
                            <i className="fas fa-lock register__form-passIcon"></i>
                            <input type="password" className="form-control" placeholder='password' 
                            onChange = {e => setPassword(e.target.value)}
                            ></input>
                        </div>

                        {/* <div className="register__form-email"> */}
                            <button  className="btn btn-info form-control btnLoginRegister"
                                type='submit'
                            >
                                Register
                            </button>
                        {error &&  <span style = {{color: 'red', marginTop: '120px', display:'block', fontSize: '20px'}}>something wrong</span> }

                            <Link to='/login' className="btn btnRegister" >
                                Login
                            </Link>
                        {/* </div> */}
                    </form>
                </div>
         
        </div>
    )
}
