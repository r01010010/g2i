import React from 'react';
import {
  Router,
  Switch,
  Route,
} from "react-router";
import { useHistory } from "react-router-dom"
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from 'history';

import Home from './components/pages/home'
import Questionaire from './components/pages/questionaire'
import Results from './components/pages/results'

export const ROUTES = {
  HOME: '/',
  QUESTIONAIRE: '/questionaire',
  RESULTS: '/results'
}

export const routesStore = new RouterStore()
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routesStore);

export default () => 
  <Router history={history}>
    <Switch>
      <Route exact path={ROUTES.HOME}><Home /></Route>
      <Route path={ROUTES.QUESTIONAIRE}><Questionaire /></Route>
      <Route path={ROUTES.RESULTS}><Results /></Route>
    </Switch>
  </Router >

export const useGoToHome = () => {
  const history = useHistory()
  return () => history.push(ROUTES.HOME)
}

export const useGoToResults = () => {
  const history = useHistory()
  return () => history.push(ROUTES.RESULTS)
}

export const useGoToQuestionaire = () => {
  const history = useHistory()
  return () => history.push(ROUTES.QUESTIONAIRE)
}
