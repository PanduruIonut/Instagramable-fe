
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FeedPage from './pages/feedPage/feedPage';
import SinglePostPage from './pages/singlePost/postViewPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FeedPage} />
          <Route exact={true} path="/details" component={SinglePostPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
