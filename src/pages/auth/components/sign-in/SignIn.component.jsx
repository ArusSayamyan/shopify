import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// BASE COMPONENTS
import Button from "src/components/button/Button.component";
import Input from "src/components/input/Input.component";
import { userSignInAsync } from "src/redux/auth/auth.actions";
import { useHistory } from "react-router-dom";
import styles from "./sign-in.module.scss";

const SignIn = () => {
    const [inputState, setInputState] = useState({});

    const { errorMessage, isLoading } = useSelector((store) => ({
        errorMessage: store.auth.errorMessage,
        isLoading: store.auth.isLoading,
    }));

    const dispatch = useDispatch();
    const history = useHistory();
    const handleInput = (event) => {
        const { value, name } = event.target;
        setInputState({ ...inputState, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isOK = await dispatch(userSignInAsync(inputState));
        if (isOK) history.push("/shop");
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
          {errorMessage && <div className="u-text--error">{errorMessage}</div>}
           <Button type="submit" isLoading={isLoading}>
                Sign In
            </Button>
        </form>
      </div>
      
  
  );
};

export default SignIn;
