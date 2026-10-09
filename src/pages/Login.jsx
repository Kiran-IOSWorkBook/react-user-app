import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
   if (!email || !password) {
    alert('Please enter email and password');
    return;
  }
    navigate('/home');
  };

  return (
    <div>
      <h1>Login</h1>

      <div>
        <label>Email</label>
        <br />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Password</label>
        <br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;