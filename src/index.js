import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>, 
    document.getElementById('root')
)

/**
* Thank you to Ryan Waite for his assistance with this project - (https://www.youtube.com/watch?v=acJHkd6K5kI&t=0s&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s&index=4 -
* Accessed September 28, 2018)
**/
