import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import QuickLinks from './pages/QuickLinks'
import {useAuthState} from "react-firebase-hooks/auth";
import db from "./services/firestore";
import SignIn from "./pages/SignIn";
import Admin from "./pages/Admin";

function App() {
    const [user] = useAuthState(db.auth())
  return (
    <Router>
        <Switch>
            <Route path="/admin">
                {() => {
                    if (!user) {
                        return <Redirect to="/login" />
                    }
                    return <Admin />
                }}
            </Route>
            <Route path="/login">
                {() => {
                    if (user) {
                        return <Redirect to="/admin" />
                    }
                    return <SignIn />
                }}
            </Route>
            <Route path="/logout">
                {() => {
                    db.auth().signOut().then(() => {

                    })
                    return <Redirect to="/" />
                }}
            </Route>
            <Route path="/">
                <QuickLinks />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
