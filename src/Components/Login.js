import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../state/index';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreaters, dispatch)
  const user = useSelector(state => state.user)

  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [radio, radioChange] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:3005/" + radio + "/?email="

    console.log(url)

    fetch(url + email).then((res) => {
        return res.json();
    }).then((resp)=> {
      if (Object.keys(resp).length === 0) {
        window.alert("No such email...");
      } else {
        if (resp[0].password == password) {
            actions.login(resp[0]);
            if (radio === 'user')
              navigate('/UserDashboard');
            else 
              navigate('/RestaurantDashboard', {state: {name: radio}})
        } else {
            window.alert("Wrong password...");
        }
      }
    }).catch((err)=>{
      window.alert('Login failed due to: ' + err.message);
    })
  }

  return (
    <div>
      <section className="login" id="login">
            <div className="login__container  bd-grid">
                <div className="login-form">
            
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className="content">
                            <div className="input-field">
                                <input type="email" placeholder="Email" value={email} onChange={e=>emailChange(e.target.value)} autoComplete="nope"/>
                            </div>
                            <div className="input-field">
                                <input type="password" placeholder="Password" value={password} onChange={e=>passwordChange(e.target.value)} autoComplete="new-password"/>
                            </div>
                            <div className="input-radio">
                                <input type="radio" className="form-check-input" id='user' value="user" onChange={e=>radioChange(e.target.value)} name='radio' checked />
                                <label forHtml="user">User</label>
                                <input type="radio" className="form-check-input" id="restaurant" name='radio' value="restaurant" onChange={e=>radioChange(e.target.value)}/>
                                <label forHtml="restaurant">Restaurant</label>
                            </div>
                            <a href="/" className="link">Forgot Your Password?</a>
                        </div>

                        <div className="action">
                            <button onClick={() => navigate('/Signup')}>Register</button>
                            <button>Sign in</button>
                        </div>

                    </form>
		        </div>
            </div>
        </section>
    </div>
  )
}
