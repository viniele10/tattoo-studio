import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeaderHome from "../../components/Header/HeaderHome";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Form/Input";

import "../../components/Form/Input.css";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("lidia.mellv@email.com");
  const [password, setPassword] = useState("tatuador2");

  const tatuador1 = [
    { email: "felipe.mellv@email.com", password: "tatuador1" },
  ];
  const tatuador2 = [{ email: "lidia.mellv@email.com", password: "tatuador2" }];
  const tatuador3 = [{ email: "zoe.mellv@email.com", password: "tatuador3" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    const account1 = tatuador1.find((user) => user.email === email);
    const account2 = tatuador2.find((user) => user.email === email);
    const account3 = tatuador3.find((user) => user.email === email);
    if (account1 && account1.password === password) {
      navigate("/felipe");
    } else if (account2 && account2.password === password) {
      navigate("/lidia");
    } else if (account3 && account3.password === password) {
      navigate("/zoe");
    }
  };

  return (
    <div className="bg-01">
      <HeaderHome tatuador="/#tatuador" contato="/#contato" />
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form onSubmit={handleSubmit} className="login-form">
              <span className="login-form-title">LOGIN</span>

              <div className="wrap-input">
                <Input
                  type="email"
                  className={email !== "" ? "has-val input" : "input"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="E-mail"></span>
              </div>

              <div className="wrap-input">
                <Input
                  type="password"
                  className={password !== "" ? "has-val input" : "input"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span
                  className="focus-input"
                  data-placeholder="Password"
                ></span>
              </div>

              <div className="container-login-form-btn">
                <button type="submit" className="login-form-btn btn">
                  Entrar
                </button>
              </div>

              <div className="text-center">
                <span className="txt1">
                  <a className="txt2" href="#">
                    Esqueceu a senha?
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer link="/#home" />
    </div>
  );
}

export default Login;
