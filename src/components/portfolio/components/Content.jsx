import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import Education from './tabs/Education';
import Hobby from './tabs/Hobby';
import Projects from './tabs/Projects';
import TechStatcks from './tabs/TechStatcks';

const Content = () => {
  const { path, url } = useRouteMatch();
  console.log('path', path);
  console.log('url', url);
  return (
    // <Switch>
    <>
      <Route component={<Projects />} exact path={`${path}/home/projects`} />
      <Route component={<TechStatcks />} exact path={`${path}/home/stacks`} />
      <Route component={<Hobby />} exact path={`${path}/home/hobby`} />
      {/* <Route component={<Education />} path='/home/education' /> */}
    </>
    // </Switch>
  );
};

export default Content;
