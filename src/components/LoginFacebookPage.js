import React from 'react';
import FacebookLogin from 'react-facebook-login';



class LoginFacebookPage extends React.Component {
    state = {
    };

    responseFacebook = (response) => {
        console.log(response);
    }

    handleOnClick = () => {
        return this.props.history.push('/form');
    }

    render() {
        return (
            <div className="container">
                <p>This is login page.</p>
                <FacebookLogin
                    appId="422465065156325"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.handleOnClick}
                    callback={this.responseFacebook} 
                />
            </div>
        )
    }

};

export default LoginFacebookPage;