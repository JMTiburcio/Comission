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

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
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
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={() => navigate('/register')} type="button">
              {isFetching ? <CircularProgress size="25px" style={{ color: 'white' }} /> : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
