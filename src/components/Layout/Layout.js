import React from 'react' ;
import LayoutCSS from './Layout.module.css';
import Cover from '../../hoc/Cover';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
    return (
        <Cover>
            <Toolbar/>
            <main className={LayoutCSS.Content}>
                {props.children}
            </main>
        </Cover>
    );
}

export default layout;