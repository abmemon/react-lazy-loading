import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./components/LazyComponent'));

function App() {
  return (
    <div className="App">
      <h1>Lazy Loading App</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
