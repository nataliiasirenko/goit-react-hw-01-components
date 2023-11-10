

// const elem1 =<span>Hello</span>;
// const elem2 = <span>wold</span>

// const jsxElement = (
//   <div>
//   {elem1}
//   {elem2}
//   </div>
// );

// console.log(jsxElement);



import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';


const imageUrl =
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
const productPrice = 10.99;

const product = (
  <div>
    <img src={imageUrl} alt="Tacos With Lime" width="240" />
    <h2>Tacos With Lime</h2>
    <p>Price: {productPrice}$</p>
    <button type="button">Add to cart</button>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(product);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
