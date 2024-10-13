import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Exercises from './components/Exercise';
import store from './store'; 

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;



