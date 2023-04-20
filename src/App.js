import React, { Component, lazy, Suspense } from 'react';
import './App.css';

import Page1 from './components/Page1';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    if (route === 'page1') {
      this.setState({route: route});
    } else if (route === 'page2') {
        const Page2 = lazy(()=> import('./components/Page2'));
        this.setState({route: route, component: Page2});
    } else if (route === 'page3') {
        const Page3 = lazy(()=> import('./components/Page3'));
        this.setState({route: route, component: Page3});
    } 
  }
  render() {
      if (this.state.route === 'page1') {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Page1 onRouteChange={this.onRouteChange} />
          </Suspense>)
      } else {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <this.state.component onRouteChange={this.onRouteChange} />
          </Suspense> )
      }
  }
}

export default App;
