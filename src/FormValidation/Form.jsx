import React from 'react';
import './Form.css';

function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Regex for email and password
    const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters and contain letters and numbers.');
      return;
    }

    alert('Login successful!');
    // You can redirect or perform other logic here
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Form;
