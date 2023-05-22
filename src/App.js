// Core
import {
    Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';

// Pages
import {
    FeedPage, LoginPage, PostCommentsPage, ProfilePage, SignUpPage,
} from './pages';

// Components
import { Footer } from './components';

// Hooks
import { useToastErrorNotify } from './hooks';

export const App = () => {
    useToastErrorNotify();

    return (
        <>
            <ToastContainer newestOnTop transition = { Slide } />
            <main>
                <div className = 'feed-wrapper'>
                    <div className = 'container'>
                        <Routes>
                            <Route path = 'feed' element = { <Outlet /> }>
                                <Route index element = { <FeedPage /> } />
                                <Route path = ':postId' element = { <PostCommentsPage /> } />
                            </Route>
                            <Route path = 'profile' element = { <Outlet /> }>
                                <Route index element = { <ProfilePage /> } />
                            </Route>
                            <Route path = 'login' element = { <LoginPage /> } />
                            <Route path = 'signup' element = { <SignUpPage /> } />
                            <Route path = '*' element = { <Navigate to = 'login' replace /> } />
                        </Routes>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
