import { Switch, Route, Redirect } from "react-router-dom";
// LAYOUT
import Header from "src/layout/header/Header.layout";
// STYLES
import styles from "./app.module.scss";
// PAGES
import HomePage from "src/pages/home/Home.page";
import SignInPage from "src/pages/signin/SignIn.page";

const App = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <Switch>
                    <Route component={HomePage} path="/home" />
                    <Route component={SignInPage} path="/signin" />
                    <Redirect exact from="/" to="/home" />
                </Switch>
            </main>
        </div>
    );
};
export default App;
