// BASE COMPONENTS
import axios from "axios";
import { useState } from "react";
import Button from "src/components/button/Button.component";
import Input from "src/components/input/Input.component";
import styles from "./sign-up.module.scss";

const SignUp = () => {
    const [inputState, setInputState] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputState({ ...inputState, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("auth/signup", inputState);
    };

  return (
   
      <div className={styles.form}>
        <h1 className={styles.title}>I do not have a account</h1>
        <p className={styles.title1}>Sign up with your email and password</p>
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            label="Display Name"
            onChange={handleInput}
            value={inputState.name}
          />
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
          <Input
            name="ConfirmPassword"
            type="password"
            required
            label="Confirm password"
            value={inputState.ConfirmPassword}
            onChange={handleInput}
          />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
   
  );
};

export default SignUp;