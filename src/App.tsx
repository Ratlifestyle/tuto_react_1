import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import { UserContext } from './interfaces/IUserContext';

const App = () => {
  
  const currentUser = React.useContext(UserContext);
  return (
    <Router>
      <UserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;