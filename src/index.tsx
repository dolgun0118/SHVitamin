import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { rootReducer } from 'store/rootReducer';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeConfig } from 'styles/ThemeConfig';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'styles/GlobalStyle';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={ThemeConfig}>
      <Provider store={store} >
        <GlobalStyle />
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
