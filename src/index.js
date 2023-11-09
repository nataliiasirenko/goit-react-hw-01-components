
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(`div`, 
{a:5, b:10, children: `hello world`});

console.log(element);

ReactDOM.render(element, document.querySelector(`#root`));

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
