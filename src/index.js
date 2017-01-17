//Create new Component that can generate some HTML
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAn9cXJmpNHsetVUzinu_3-EoFxqtC4hpk';
const App = () => {
  return
    <div>
      <SearchBar/>
    </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));

//Take this component' generated  HTML  and put it on page

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
