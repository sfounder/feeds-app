// Core
import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// App
import { App } from './App';

// Lib
import { queryClient } from './lib';

// Redux
import { store } from './lib/redux';

// Components
import { AuthChecking } from './components';

createRoot(document.getElementById('root')).render(
    <>
        <Provider store = { store }>
            <QueryClientProvider client = { queryClient }>
                <Router>
                    <AuthChecking>
                        <App />
                    </AuthChecking>
                </Router>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </Provider>
    </>,
);
