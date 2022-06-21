import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Views
import ListFilms from './views/ListFilms';
import DetailFilm from './views/DetailFilm';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListFilms />} />
        <Route path="/films/:id" element={<DetailFilm />} />
      </Routes>
    </BrowserRouter>
  );
}