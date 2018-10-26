/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Sidebar from '../../components/Sidebar';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import MainContent from '../../components/MainContent';

export default function App() {
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <div className="main">
      <Header></Header>
      <MainContent></MainContent>
      </div>
    </Wrapper>
  );
}
