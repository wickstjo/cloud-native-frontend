import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem({ link, header }) { return (
    <Link to={ link }>
        <li>{ header }</li>
    </Link>
)}

export default MenuItem;