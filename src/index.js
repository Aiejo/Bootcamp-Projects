import ReactDOM from 'react-dom/client';
import React from 'react'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  // Secuencia para configurar user snippet File > Preferences > user snippets > javascript
 // Snippet para console.log()
  // {
  //   "console.log": {
  //     "prefix": "clog",
  //     "body": [
  //       "console.log('$1')",
  //     ],
  //     "description": "Log output to console"
  //   }
  // }