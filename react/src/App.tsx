import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import LoadingPerformance from './performances/LoadingPerformance';
import { TheBasics } from './basics/TheBasics';
import VariousWaysToBuildList from './performances/VariousWaysToBuildList';
import { RootLifeCycleComponent } from './basics/LifeCycles';
import { ErrorUsageExample } from './basics/ErrorBoundary';
import { ArrayResults } from './basics/ArrayResults';
import { ArrayKeys } from './basics/GoodKeys';
import { HigherOrderComponents } from './patterns/HigherOrderComponents';
import HooksExamples from './basics/HooksExamples';
import ServicesWithComponents from './basics/ServicesWithComponents';
import Overview from './basics/Overview';
import TipsOnComponents from './basics/TipsOnComponents';

const App = () => {
  return (
    <>
      <header>
        <nav className="App-header">
          <a href="/overview">1. Overview</a>
          <a href="/basics">2.1. The Basic</a>
          <a href="/array-results">2.1. Array Results</a>
          <a href="/lifecycle">3. Lifecyle</a>
          <a href="/errors">4. Error handling</a>
          <a href="/array-keys">5. Array Keys</a>
          <a href="/hooks">6. Hooks</a>
          <a href="/services">7. Services</a>
          <a href="/higher-order">8. Higher Order Components</a>
          <a href="/tips">9. Tips on components</a>
          <a href="/loading-perf">10. Performance measurement</a>
          <a href="/list-perf">11: List performance React vs Native</a>
        </nav>
      </header>
      <main>
        <Route path={"/overview"} component={Overview} />
        <Route path={"/basics"} component={TheBasics} />
        <Route path={"/array-results"} component={ArrayResults} />
        <Route path={"/lifecycle"} component={RootLifeCycleComponent} />
        <Route path={"/errors"} component={ErrorUsageExample} />
        <Route path={"/array-keys"} component={ArrayKeys} />
        <Route path={"/hooks"} component={HooksExamples} />
        <Route path={"/services"} component={ServicesWithComponents} />
        <Route path={"/higher-order"} component={HigherOrderComponents} />
        <Route path={"/tips"} component={TipsOnComponents} />
        <Route path={"/loading-perf"} component={LoadingPerformance} />
        <Route path={"/list-perf"} component={VariousWaysToBuildList} />
      </main>
    </>
  );
}

export default App;
