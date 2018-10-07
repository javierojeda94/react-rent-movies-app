window.ReactOnRails = window.ReactOnRails || require('react-on-rails').default;

import LandingPage from '../bundles/Pages/components/LandingPage';
import LoginForm from '../bundles/Pages/components/LoginForm';

ReactOnRails.register({
    LandingPage,
    LoginForm,
});
