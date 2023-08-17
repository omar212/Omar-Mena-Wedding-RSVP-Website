// create a title component that takes in a title prop and renders it in a div with the class component-title

import React from 'react';
import './components.scss'

const Title = ({ title }) => {
    return (
        <div className="component-title header">{title}</div>
    ) 
};

export default Title;
