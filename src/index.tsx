import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

// @ts-ignore
window.renderCats = (containerId, history) => {
  // @ts-ignore
  ReactDOM.render(
    // @ts-ignore
    <App history={history} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};
// @ts-ignore
window.unmountCats = containerId => {
  // @ts-ignore
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
// @ts-ignore
if (!document.getElementById('Cats-container')) {
  // @ts-ignore
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}