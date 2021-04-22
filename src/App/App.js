import { Switch, Route, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

// LAYOUT
import Header from "src/layout/header/Header.layout";
// STYLES
import styles from "./app.module.scss";
// PAGES
import HomePage from "src/pages/home/Home.page";
import AuthPage from "src/pages/auth/Auth.page";
import ShopPage from "src/pages/shop/Shop.page";
import CheckOutPage from "src/pages/checkout/Checkout.page";
import Oops from "src/components/oops/Oops.component";
import { useEffect } from "react";
import { getCategoriesAsync } from "src/redux/shop/shop.actions";

// import { appIsLoading } from "src/redux/common/common.reducer";

const App = (props) => {
  const { globalErrorMessage } = props;
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCategoriesAsync());
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.pages}>
          <Oops errorMessage={globalErrorMessage}>
            <Switch>
              <Route component={HomePage} path="/home" />
              <Route component={AuthPage} path="/auth" />
              <Route component={ShopPage} path="/shop" />
              <Route component={CheckOutPage} path="/checkout" />
              <Redirect exact from="/" to="/home" />
            </Switch>
          </Oops>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (store) => ({
  globalErrorMessage: store.common.globalErrorMessage,
});

export default connect(mapStateToProps)(App);
