import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Edit from '../pages/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/edit" exact component={Edit} />
    </Switch>
  );
}
