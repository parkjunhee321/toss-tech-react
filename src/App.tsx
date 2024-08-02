import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layouts';

//pages
import Home from './pages/home';
import Article from './pages/article';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:tab' element={<Home />} />
        <Route path='/article/:key' element={<Article />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
