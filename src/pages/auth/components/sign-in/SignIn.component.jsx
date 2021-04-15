import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "src/components/button/Button.component";
import Input from "src/components/input/Input.component";
import { setUserData } from "src/redux/auth/auth.actions";
import { useHistory } from "react-router-dom";
import { setGlobalErrorMessage } from "src/redux/common/common.actions";
import styles from "./sign-in.module.scss";

import axios from "axios";

const SignIn = () => {
  const [inputState, setInputState] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const handleInput = (event) => {
    const { value, name } = event.target;
    setInputState({ ...inputState, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
        const result = await axios.post("auth/login", inputState);
        const data = result.data.data;
        dispatch(setUserData(data));
        history.push("/shop");
    } catch (error) {
        dispatch(setGlobalErrorMessage());
    }
  };
  return (
   
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
           <Button type="submit" isLoading={isLoading}>
                Sign In
            </Button>
        </form>
      </div>
      
  
  );
};

export default SignIn;
