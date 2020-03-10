import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import LoadingPerformance from './performances/LoadingPerformance';
import { TheBasics1 } from './basics/TheBasics';
import VariousWaysToBuildList from './performances/VariousWaysToBuildList';
import { RootLifeCycleComponent } from './basics/LifeCycles';
import { ErrorUsageExample } from './basics/ErrorBoundary';
import { ArrayResults } from './basics/ArrayResults';
import { ArrayKeys } from './basics/GoodKeys';
import { HigherOrderComponents } from './patterns/HigherOrderComponents';

const App = () => {
  return (
    <>
      <header>
        <nav className="App-header">
          <a href="/basics">1.1. The Basic</a>
          <a href="/array-results">1.2. Array Results</a>
          <a href="/lifecycle">2. Lifecyle</a>
          <a href="/errors">3. Error handling</a>
          <a href="/array-keys">4. Array Keys</a>
          <a href="/higher-order">5. Higher Order Components</a>
          <a href="/loading-perf">6. Performance measurement</a>
          <a href="/list-perf">Other: List performance React vs Native</a>
        </nav>
      </header>
      <main>
        <Route path={"/basics"} component={TheBasics1} />
        <Route path={"/array-results"} component={ArrayResults} />
        <Route path={"/lifecycle"} component={RootLifeCycleComponent} />
        <Route path={"/errors"} component={ErrorUsageExample} />
        <Route path={"/array-keys"} component={ArrayKeys} />
        <Route path={"/higher-order"} component={HigherOrderComponents} />
        <Route path={"/loading-perf"} component={LoadingPerformance} />
        <Route path={"/list-perf"} component={VariousWaysToBuildList} />
      </main>
    </>
  );
}

export default App;
