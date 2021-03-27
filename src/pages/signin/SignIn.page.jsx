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

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submit");
        const result = await axios.post("auth/login", inputState);

        console.log(result);
    };
    return (
        <div className={styles.container}>
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
    );
};

export default SignIn;
