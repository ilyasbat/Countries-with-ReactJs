import React from 'react'
import Layout from "./Layout";
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
function App(){
    return (
        <Layout>
            <Switch>
                <Route path="/country/:id">
                    <CountryDetail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Layout>
    )
}
export default App
