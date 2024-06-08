import React, { useState } from 'react';
import logo from './assets/images/1.png';
import { useNavigate } from 'react-router-dom';
import './components/styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    if (username === 'BLUE' && password === 'BLUE123') {
      navigate('/app');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="infobox">
          <h2>Seja bem vindo ao</h2>
          <img src={logo} alt="Logo" />
        </div>
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;