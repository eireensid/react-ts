import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/router";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>main</Link>
      <Link to={'/about'}>about</Link>
      <AppRouter />
    </div>
  );
};

export default App;