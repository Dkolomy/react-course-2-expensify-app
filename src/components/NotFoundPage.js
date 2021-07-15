import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        This is from my Not Found Page 404 component<br/>
        <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;