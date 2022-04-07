import { Button, Form, Input } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContext } from './interfaces/IUserContext';


const Connexion = () => {

    const currentUser = React.useContext(UserContext);

const handleSubmit = (results: any) => {
    
    currentUser.user = results.username;
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

    return (
        <div>
            <Form onFinish={handleSubmit}>
                <Form.Item label="username" name="username">
                   <Input name="username" />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType='submit'>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Connexion;