// Higher order component (HOC)

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please do not share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requiredAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <p>Authentication required</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentification(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='This is the detail' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='This is the detail' />, document.getElementById('app'));
