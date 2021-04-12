import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import routeMap from './resources/routeMap';

const renderRoute = ({ path, component: Component }) => (
  <Route path={path} key={path}>
    <Component />
  </Route>
);

const renderApp = () => {
  const routeList = Object.values(routeMap);

  return (
    <Router>
      <div className="fullScreen">
        <Nav />
        <Switch>{routeList.map(renderRoute)}</Switch>
      </div>
    </Router>
  );
};

function About() {
  return (
    <div
      className="uk-height-large uk-background-cover uk-light uk-flex image"
      uk-parallax="bgy: -200"
    >
      <h1 className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">Headline</h1>
    </div>
  );
}

function Topics() {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  const { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default renderApp();
