/* eslint-disable */

import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import Content from './components/index';
import { ThemeProvider, createTheme } from 'mineral-ui/themes';

const store = configureStore();

const myAppColor = { 
  [10]: '#00ad64',
  [20]: '#00ad64',
  [30]: '#00ad64',
  [40]: '#00ad64',
  [50]: '#00ad64',
  [60]: '#00ad64',
  [70]: '#00ad64',
  [80]: '#00ad64',
  [90]: '#00ad64',
  [100]: '#00ad64'
}

const myTheme = createTheme({
  colors: {
    theme: myAppColor,
    danger: 'bronze',
    warning: 'gray',
    success: 'teal'
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={myTheme}>
          <Content />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
