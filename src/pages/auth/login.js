import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Button buttonTitle={"Login"} onPress={() => handleLogin()} />
    </div>
  );
};

export default Login;
