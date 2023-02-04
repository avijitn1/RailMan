import React, {useState} from 'react'
import { Button, Form, Input } from "antd";
import PropTypes from "prop-types";
import {ORGANISATION_NAME,EMAIL_REQUIRED,EMAIL_VALID, CONTACT_NO,INVALID_CONATCT,SIGNUP_PASSWORD_REQUIRED, PASSWORD_VALID_INFO, CONFIRM_PASSWORD, PASSWORD_DO_NOT_MATCH, ONLY_WHITESPACE} from '../constants/Messages';
import { EMAIL_VALIDATION, PHONE_VALIDATION, PASSWORD_VALIDATION, WHITESPACE_VALIDATION} from '../constants/Constants';


export default function Signup(props) {
  const { currentPassword } = props;

    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [password, passwordChange] = useState("");
    const [ radio, radioChange ] = useState("user");

    let passwordPattern = "^"+currentPassword+"$";
    passwordPattern = new RegExp(passwordPattern);
  
    const handleSubmit = () => {
      //e.preventDefault();
  
      let regObj = {name, email, password, radio};
      console.log(regObj);

      const url = "http://localhost:3005/" + radio
  
      fetch(url, {
          method:'POST', 
          headers:{'content-type': 'application/json'},
          body:JSON.stringify(regObj)


      }).then((res)=>{
        window.alert('Registration Successful...')
      }).catch((err)=>{
        window.alert('Registration Failed...')
      })
    }
    return (
      <div>
        <section className="signup" id="signup">
              <div className="login__container  bd-grid">
                  <div className="login-form">
                      <Form onSubmit={handleSubmit}>
                          <h1>Signup</h1>
                          <div className="content">
                              
                              <Form.Item
                                  name = "name"
                                  rules={[
                                    { required: true, message: ORGANISATION_NAME },
                                    { pattern: WHITESPACE_VALIDATION, message: ONLY_WHITESPACE },
                                  ]}
                              >
                                <Input placeholder="Name/Organization *" size = "large" value={name} onChange={e=>nameChange(e.target.value)} className = 'input-style'/>
                              </Form.Item>

                              <Form.Item
                                name = "contact"
                                rules={[
                                  { required: true, message: CONTACT_NO },
                                  {
                                    pattern:PHONE_VALIDATION,
                                    min: 10,
                                    message: INVALID_CONATCT
                                  }
                                ]}
                            >
                            <Input placeholder="Contact *" maxLength = {10}  size = "large" value={email} onChange={e=>emailChange(e.target.value)} autoComplete="nope"/>
                              </Form.Item>
                    
                              <Form.Item
                                  name = "email"
                                  rules={[
                                    { required: true, message: EMAIL_REQUIRED },
                                    {
                                      pattern:EMAIL_VALIDATION,
                                      message: EMAIL_VALID
                                    }
                                ]}
                              >
                              <Input  placeholder="Email *" size = "large" value={email} onChange={e=>emailChange(e.target.value)} autoComplete="nope"/>
                              </Form.Item>

                              <Form.Item
                                  name = "password"
                                  rules={[
                                    {
                                      required: true,
                                      message: SIGNUP_PASSWORD_REQUIRED
                                        
                                    },
                                    {
                                      pattern: PASSWORD_VALIDATION,
                                      message: PASSWORD_VALID_INFO
                                    }
                                  ]}
                              >
                                  <Input.Password visibilityToggle = {false} placeholder="Password *" size = "large" value={password} onChange={e=>passwordChange(e.target.value)} autoComplete="new-password"/>
                              </Form.Item>
  
                              <Form.Item
                                  name="confirmPassword"
                                  rules={[{ required: true, message: CONFIRM_PASSWORD},
                                  {pattern: PASSWORD_VALIDATION, message: PASSWORD_DO_NOT_MATCH}
                                  ]}
                                  >
                                  <Input.Password
                                    className = 'input-style'
                                    placeholder="Confirm Password"
                                    visibilityToggle = {false}
                                  />
                              </Form.Item>

                              <div className="input-radio">
                                <input type="radio" className="form-check-Input" id='user' value="user" onChange={e=>radioChange(e.target.value)}  name='radio' checked />
                                <label htmlFor="user">User</label>
                                <input type="radio" className="form-check-Input" id="restaurant" value="restaurant" onChange={e=>radioChange(e.target.value)}  name='radio' />
                                <label htmlFor="restaurant">Restaurant</label>
                            </div>

                          </div>
                          <div className="action">
                            <Button type="primary" htmlType="submit" onClick={() => handleSubmit()}>Submit</Button>
                            <Button>Reset</Button>
                          </div>
                      </Form>
              </div>
              </div>
          </section>
      </div>
    )
}
