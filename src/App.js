import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/utils/Layout';
import Home from './components/Home';
import Place from './components/Place';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
      </Route>
    </Routes>
  )
}

export default App;