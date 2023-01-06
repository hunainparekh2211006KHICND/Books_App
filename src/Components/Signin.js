import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import '../css/user.css';

function Signin() {


  const [signupmode, changeSignupMode] = useState('');
  const [buttonText,setButtonText] = useState('Register')
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [contact,setContact] = useState('');

  const handleName=(e)=>{
    setName(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
  }
  const handleContact=(e)=>{
    var contact = parseInt(e.target.value);
    setContact(contact);
  }
  const containerClass = 'container ' + signupmode;
  const ChangeToSignupMode = () => {
    changeSignupMode('sign-up-mode');
  }

  const ChangeToSignInMode = () => {
    changeSignupMode('');
  }

  function submitHandler(event) {
    event.preventDefault();
    setButtonText('Saving...');
    const value = {
      name: name,
      email:email,
      password: password,
      contact:contact,
    };

      fetch('http://localhost:8080/auth/register',{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        body: JSON.stringify( value),
        headers: {
          'Content-Type': 'application/json'
        }})
      .then((response) => response.json())
      .then(()=>{
        setName('');
        setEmail('');
        setPassword('');
        setContact('');
        setButtonText('Register');
      });
  }

  return (
    <>
      <div className={containerClass}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Wisdom Gateway</h2>
              <h4>Sign In</h4>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Email" id="login_email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" id="login_password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />

            </form>
            <form action="#" className="sign-up-form" onSubmit={submitHandler}>
              <h2 className="title">Wisdom Gateway</h2>
              <h4>Sign Up</h4>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Name" value={name} id="name" required onChange={handleName}/>
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" value={email} id="email" required onChange={handleEmail}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" value={password} id="password" required onChange={handlePassword}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="number" placeholder="Contact Number" value={contact} id="contact" required onChange={handleContact}/>
              </div>
              <input type="submit" className="btn" value={buttonText}/>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>

              </p>
              <button className="btn transparent" onClick={ChangeToSignupMode}>
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Sign In to get books download
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={ChangeToSignInMode}>
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  )

}
export default Signin;