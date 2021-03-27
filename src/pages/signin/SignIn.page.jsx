import { useState } from "react";
import Button from "src/components/button/Button.component";
import Input from "src/components/input/Input.component";
import styles from "./signin.module.scss";

import axios from "axios";

const SignIn = () => {
  const [inputState, setInputState] = useState({});

  const handleInput = (event) => {
    const { value, name } = event.target;
    setInputState({ ...inputState, [name]: value });
  };

  const [input, setInput] = useState({});

  const handleInput_SignUp = (event) => {
    const { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit");
    const result = await axios.post("auth/login", inputState);

    console.log(result);
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.title}>I already have an account</h1>
        <p className={styles.title1}>Sign in with your email and password</p>
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            required
            label="Email"
            onChange={handleInput}
            value={inputState.email}
          />
          <Input
            name="password"
            type="password"
            required
            label="Password"
            value={inputState.password}
            onChange={handleInput}
          />
          <Button type="submit">Sign In</Button>
        </form>
      </div>
      <div className={styles.form}>
        <h1 className={styles.title}>I do not have a account</h1>
        <p className={styles.title1}>Sign in with your email and password</p>
        <form onSubmit={handleSubmit}>
          <Input
            name="text"
            type="text"
            required
            label="Display Name"
            onChange={handleInput_SignUp}
            value={input.text}
          />
          <Input
            name="email"
            type="email"
            required
            label="Email"
            onChange={handleInput_SignUp}
            value={input.email}
          />
          <Input
            name="password"
            type="password"
            required
            label="Password"
            value={input.password}
            onChange={handleInput_SignUp}
          />
          <Input
            name="password"
            type="password"
            required
            label="Confirm password"
            value={input.password}
            onChange={handleInput_SignUp}
          />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
