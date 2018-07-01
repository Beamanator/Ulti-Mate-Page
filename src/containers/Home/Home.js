import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <div>
            <p>Home!</p>
            <p><Link to="/p1">Link to Page1</Link></p>
            <p><Link to="/p2">Link to Page2</Link></p>
            <p><Link to="/">Link to Home</Link></p>
        </div>
    );
};

export default home;