import React from "react";
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Header from '../components/Header';
import LoginFacebookPage from '../components/LoginFacebookPage';
import FormPage from '../components/FormPage';
import StartPage from '../components/StartPage';
import EndPage from '../components/EndPage';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={StartPage}/>
                <Route path="/login" component={LoginFacebookPage}/>  
                <Route path="/form" component={FormPage}/>
                <Route path="/end" component={EndPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>

);

export default AppRouter;