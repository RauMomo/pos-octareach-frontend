// import logo from './logo.svg';
import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import './index.css';
import DashboardPage from "./views/dashboard/dashboard_page";
import ForgotPage from "./views/session/forgot_page";
import ResetPage from "./views/session/reset_page";
import SignInPage from "./views/session/signin_page";

let auth = false;

class App extends React.Component{
  render() {
    return (
      <main className={styles.App}>
        <div className={styles.AppLogo}>This is App Page</div>
          <Routes>
            <Route path="/" component={auth ? <SignInPage /> : <DashboardPage />} />
            <Route path="/login" component={<ForgotPage />} />
            <Route path="/forgot-password" component={<ForgotPage />} />
            <Route path="/reset-password" component={<ResetPage />} />
          </Routes>
      </main>
    )
  }
}

export default App;
