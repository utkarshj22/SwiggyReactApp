import React from 'react';
import ReactDOM from 'react-dom/client';
import restaurants from '../data/restaurants';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import * as Constants from './constants';

const AppComponent = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);
