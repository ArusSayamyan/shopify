import { Switch, Route, Redirect } from "react-router-dom";
// LAYOUT
import Header from "src/layout/header/Header.layout";
// STYLES
import styles from "./app.module.scss";
// PAGES
import HomePage from "src/pages/home/Home.page";
import AuthPage from "src/pages/auth/Auth.page";
import ShopPage from "src/pages/shop/Shop.page";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Switch>
        <Route component={ShopPage} path="/shop" />
          <Route component={HomePage} path="/home" />
          <Route component={AuthPage} path="/auth" />
          <Redirect exact from="/" to="/home" />
        </Switch>
      </main>
    </div>
  );
};
export default App;
