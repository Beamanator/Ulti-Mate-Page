// defaults
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignUpPage from "views/SignUpPage/SignUpPage.jsx";

// created by Hip Hip
import Home from 'views/Home/Home.jsx';
import AddPickup from 'views/Add/Types/Pickup.jsx';
import AddTournament from 'views/Add/Types/Tournament.jsx';

const indexRoutes = [
    // defaults
    { path: "/landing-page", name: "LandingPage", component: LandingPage },
    { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
    { path: "/login-page", name: "LoginPage", component: LoginPage },
    { path: "/signup-page", name: "SignUpPage", component: SignUpPage },
    { path: "/components", name: "Components", component: Components },

    // created by Hip Hip
    // 'Add' pages
    { path: "/add/pickup", name: "Add Pickup", component: AddPickup },
    { path: "/add/tournament", name: "Add Tournament", component: AddTournament },
    // home (Note: Must go on bottom! Matches everything "else")
    { path: "/", name: "Home", component: Home },
];

export default indexRoutes;
