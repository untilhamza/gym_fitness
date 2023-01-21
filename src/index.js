import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    
)
