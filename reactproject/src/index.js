import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

import Main from './main';

import Header1 from './header/headers.js/header1';

import Home from './home/home';

// const el = React.createElement('h1',{},'hello world');

 const root = ReactDOM.createRoot(document.getElementById('root'));
// const ele =
// <div>
//    <h1>hii<h2>fabevy</h2></h1> 
//  </div>       
//root.render(ele);
// root.render(
//   <React.StrictMode> 
//     <App />
//   </React.StrictMode>
// );

// function El1()
// {
//  return (
//   <section>
//     <h1>fabevy</h1>
//   </section>
//  )
// }

// function El2()
// {
//     return (
//   <div>
//     fabevy
//   </div>
//     )
// }

// function Main()
// {
//     return (
//         <div>
//     <El1 />
//     <El2 />
//     </div>
//     )
// }

                 //props //

    function Val(props){
        return (
            <div>val {props.name}</div>
        )
    }             
    root.render(<Home />)