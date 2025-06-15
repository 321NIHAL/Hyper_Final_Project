import './CSS/LoginSingup.css'

const LoginSingup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='YourName' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an acount? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" id='' />
          <p>By continuing I agreed the terms and the use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup