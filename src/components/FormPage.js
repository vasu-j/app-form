import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { addUser } from '../actions/user';

const FormPage = (props) => (
    <div className="container">
        <UserForm 
            onSubmit={(user) => {
                console.log(user);
                props.dispatch(addUser(user));
                props.history.push('/end');
            }}
        />
    </div>

);

export default connect()(FormPage);