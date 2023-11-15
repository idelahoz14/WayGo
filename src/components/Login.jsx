import '../styles/login.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const LogIn = () => {
  return (
    <>
      <div className="wrapper">
        <div className="title-container">
          <h2 className='title-1'>Welcome Back!!</h2>
          <p className='subtitle-1'>Login</p>
        </div>
        <div className='form'>
          <form action="">
            <div className='input-container'>
              <label htmlFor="">E-mail</label>
              <input type="text" name='u-name' required />
            </div>
            <div className='input-container'>
              <label htmlFor="">Password</label>
              <input type="text" name='u-password' required />
            </div>
            <div className='button-container'>
              <input type="submit" />
            </div>
          </form>
        </div>
        <a className='forgot-your-password' href="http://">Olvidaste tu contraseña?</a>
        <div className='span-register'>
          <hr /><span>Or register</span><hr />
        </div>
        <div className='signup-container'>
          <p>No tienes cuenta? <Nav.Link as={Link} to="/registrate"><a>Crea una</a></Nav.Link> </p>
        </div>
      </div>
    </>
  )
}

export default LogIn;