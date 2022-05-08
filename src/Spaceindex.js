import React from 'react';
import ReactDOM from 'react-dom'
import App from './spacex/App'


import {BrowserRouter, Routes, Route} from 'react-router-dom'


 ReactDOM.render(
    <BrowserRouter>
        <Routes>

            <Route path='/' element={<App />}>
                <Route path=':id' element = {<App />} />
               
              
            </Route>
        </Routes>
        
    </BrowserRouter>  
  , 
document.getElementById('root'))