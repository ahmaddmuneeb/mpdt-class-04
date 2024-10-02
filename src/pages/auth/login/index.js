import React, { useState } from "react";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigation = useRoutes();

  // let [searchParams, setSearchParams] = useSearchParams();
  // const params = useNavigate();
  const params = useParams();
  console.log({ "[params]:: ": params });

  const handleLogin = () => {
    // console.log({
    //   email: email,
    //   password: password,
    // });
    if (email === "" || password === "") {
      alert("All input fields are required!");
      return;
    }

    try {
      //   throw new Error("Simulated error for testing the catch block");
      console.log({
        email: email,
        password: password,
      });
    } catch (error) {
      console.log(`Internal Server Error ${error}`);
    }
  };

  return (
    <div>
      <p>
        {params?.name} {params?.age}
      </p>
      {/* logo */}
      <div>
        <img src="/logo192.png" alt="logo" />
      </div>
      {/* page heading */}
      <div>
        <p>Login</p>
      </div>
      {/* form */}
      <div>
        {/* an input */}
        <TextInput
          label={"Email"}
          placeholder={"Enter email address"}
          type="email"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label={"Password"}
          placeholder={"Enter password"}
          type="password"
          value={password}
          setValue={setPassword}
        />
      </div>
      <div>
        <p>
          {/* <a href="/register">Don't have an account? Create one</a> */}
          <Link to={"/register"}>Don't have an account? Create one</Link>
        </p>
      </div>
      <Button buttonTitle={"Login"} onPress={() => handleLogin()} />
    </div>
  );
};

export default Login;
