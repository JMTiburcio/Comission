import { useRef, useContext } from 'react';
import './styles.css';

import { useNavigate } from 'react-router';

import CircularProgress from '@mui/material/CircularProgress';

import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
      e.preventDefault();
      loginCall({
        email: email.current.value, password: password.current.value },
        dispatch
      );
  };

  const handleGuest = (e) => {
    e.preventDefault();
    loginCall({
      email: 'guest@guest.com', password: '123456' },
      dispatch
    );
};

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Comission</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Comission.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              ref={email}
              className="loginInput"
              placeholder="Email"
              required
              type="email"
            />
            <input
              ref={password}
              className="loginInput"
              minLength={6}
              placeholder="Password"
              required
              type="password"
            />
            <button className="loginButton" disabled={isFetching} onClick={handleClick} type="submit">
              {isFetching ? <CircularProgress size="25px" style={{ color: 'white' }} /> : 'Log In'}
            </button>
            <button className="loginRegisterButton" onClick={() => navigate('/register')} type="button">
              {isFetching ? <CircularProgress size="25px" style={{ color: 'white' }} /> : 'Create Account'}
            </button>
            <div className="loginOptions">
              <span className="loginForgot">Forgot Password?</span>
              <button type='button' disabled={isFetching} className="loginGuest" onClick={handleGuest}>
                Continue as a guest
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
