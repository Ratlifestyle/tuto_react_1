import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Countries from '../components/Countries';
import { UserContext } from '../interfaces/IUserContext';

const Home = () => {
    const currentUser = React.useContext(UserContext);
    return (
        <div>
            <div>
                <h3>Hello {currentUser.user}</h3>
            </div>
            <Logo />
            <Navigation />
            <Countries />
        </div>
    );
};

export default Home;