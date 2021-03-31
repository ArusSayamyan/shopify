import styles from "./auth.module.scss";

import SignIn from "./components/sign-in/SignIn.component";
import SignUp from "./components/sign-up/SignUp.component";

const Auth = () => {
    return (
        <div className={styles.container}>
            <SignIn />
            <SignUp />
        </div>
    );
};

export default Auth;