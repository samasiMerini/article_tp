import React from 'react';
import {Link} from 'react-router-dom';


const Menu = (props) =>(
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        
        <li>
            <Link to="/articles">List des Articles</Link>
        </li>
        <li>
            <Link to="/a-propos-de-nous">Qui Sommes Nous</Link>
        </li>
        <li>
            <Link to="/no-offres">Nos Offres</Link>
        </li>
        <li>
            <Link to="/add-article">Add New Article</Link>
        </li>
    </ul>
)
export default Menu;

