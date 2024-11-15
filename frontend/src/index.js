import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ShopContextProvider>
 <App /> 
</ShopContextProvider>
   
  
);

//wrap the app component into ShopContProv to provide the ShopContext data to all the pages


