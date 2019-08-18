import React, { useState, useEffect } from "react";
import "./login.css";

const Login = props => {
  const credentials = { username: "", password: "" };

  const [formData, setFormData] = useState(credentials);
  const [isValidLogin, setValidLogin] = useState(false);

  useEffect(() => {
    if (isValidLogin) {
    }
  }, [isValidLogin]);

  const changeHandler = event => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    console.log(formData);
  };

  const submitHandler = event => {
    console.log("login");
    if (formData.username.length > 0 && formData.password.length > 0) {
      setValidLogin(true);
      props.history.push("/list");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="Login">
        <input
          placeholder="Usuário"
          id="username"
          type="text"
          onChange={changeHandler}
          value={formData.username}
        />
        <input
          placeholder="Senha"
          id="password"
          type="password"
          onChange={changeHandler}
          value={formData.password}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
