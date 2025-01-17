import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Loading } from './components';

const Homelazy = lazy(() => import('./pages/Home/Home'));

const Routes: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/Europe (total)" />
                    </Route>

                    <Route exact path="/:country" component={Homelazy} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Routes;
