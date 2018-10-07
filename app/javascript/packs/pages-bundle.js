window.ReactOnRails = window.ReactOnRails || require('react-on-rails').default;

import LandingPage from '../bundles/Pages/components/LandingPage';
import LoginForm from '../bundles/Pages/components/LoginForm';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
    LandingPage,
    LoginForm,
});
