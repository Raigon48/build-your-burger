import React from 'react' ;
import LayoutCSS from './Layout.module.css';
import Cover from '../../hoc/Cover';

const layout = (props) => {
    return (
        <Cover>
            <div>Tool bar, other options</div>
            <main className={LayoutCSS.Content}>
                {props.children}
            </main>
        </Cover>
    );
}

export default layout;