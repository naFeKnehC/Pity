import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from './layout';
import Login from './pages/login';
import Home from './pages/home';

import Leetcode from './pages/leetcode';

function Pity() {

  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<Login/>}/>
        <Route path={'home'}>
          <Route index element={<Home/>}/>
          <Route path={'leetcode'} element={<Leetcode/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default Pity;

