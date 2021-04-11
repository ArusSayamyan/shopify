import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// LAYOUT
import Header from "src/layout/header/Header.layout";
// STYLES
import styles from "./app.module.scss";
// PAGES
import HomePage from "src/pages/home/Home.page";
import AuthPage from "src/pages/auth/Auth.page";
import ShopPage from "src/pages/shop/Shop.page";
import ShopCategory from "src/pages/shop-category/ShopCategory.component";
import Oops from "src/components/oops/Oops.component";


// import { appIsLoading } from "src/redux/common/common.reducer";

const App = (props) => {
  const { globalErrorMessage } = props;

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
      <Oops errorMessage={globalErrorMessage}>
        <Switch>
          <Route component={HomePage} path="/home" />
          <Route component={AuthPage} path="/auth" />
          <Route component={ShopPage} exact path="/shop" />
          <Route component={ShopCategory} path="/shop/:category" />
          <Redirect exact from="/" to="/home" />
        </Switch>
        </Oops>

      </main>
    </div>
  );
};

const mapStateToProps = (store) => ({
  globalErrorMessage: store.common.globalErrorMessage,
});

export default connect(mapStateToProps)(App);