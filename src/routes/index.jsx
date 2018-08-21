import Components from "views/Components/Components.jsx";
import Home from 'views/Home/Home.jsx';
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

const indexRoutes = [
    { path: "/landing-page", name: "LandingPage", component: LandingPage },
    { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
    { path: "/login-page", name: "LoginPage", component: LoginPage },
    { path: "/components", name: "Components", component: Components },
    { path: "/", name: "Home", component: Home }
];

export default indexRoutes;
