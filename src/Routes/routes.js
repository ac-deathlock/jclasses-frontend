import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "../Containers/App";
import App2 from "../Containers/App2";
import App3 from "../Containers/App3";
import DefaultHandler from "../DefaultHandler";

export default (
    <Route path={`${process.env.PUBLIC_URL}/`} component={DefaultHandler}>
        <IndexRoute component={App} />
        <Route path={`${process.env.PUBLIC_URL}/home`} component={App} />
        <Route path={`${process.env.PUBLIC_URL}/subjects`} component={App2} />
        <Route path={`${process.env.PUBLIC_URL}/chapters`} component={App3} />
        <Route path={`${process.env.PUBLIC_URL}/*`} component={App} />
    </Route>
);