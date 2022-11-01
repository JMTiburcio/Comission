import { useRef } from 'react';

import { useNavigate } from 'react-router';
import { axiosInstance } from '../../config';
import './styles.css';

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
      e.preventDefault();
      if (passwordAgain.current.value !== password.current.value) {
          password.current.setCustomValidity("Passwords don't match!");
      } else {
          const user = {
              username: username.current.value,
              email: email.current.value,
              password: password.current.value
          };
          try {
            await axiosInstance.post('/auth/register', user);
            navigate('/login');
          } catch (err) {
            console.log(err);
          }
      }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Comission</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Comission.
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox">
            <input
              ref={username}
              className="registerInput"
              placeholder="Username"
              required
            />
            <input
              ref={email}
              className="registerInput"
              placeholder="Email"
              required
              type="email"
            />
            <input
              ref={password}
              className="registerInput"
              minLength="6"
              placeholder="Password"
              required
              type="password"
            />
            <input
              ref={passwordAgain}
              className="registerInput"
              placeholder="Password Again"
              required
              type="password"
            />
            <button className="registerButton" onClick={handleClick} type="submit">Sign Up</button>
            <button className="registerRegisterButton" onClick={() => navigate('/login')} type="button">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
