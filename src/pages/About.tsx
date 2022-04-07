import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { UserContext } from '../interfaces/IUserContext';

const About = () => {
    const currentUser = React.useContext(UserContext);
    return (
        <div>
            <h3>Hello {currentUser.user}</h3>
            <Logo />
            <Navigation />
            <h1>About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sint consectetur optio sit. Mollitia neque, obcaecati voluptate soluta fugit impedit laborum in nisi omnis, distinctio beatae aliquam incidunt amet quaerat.</p>
        </div>
    );
};

export default About;