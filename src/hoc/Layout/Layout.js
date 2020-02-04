import React, { Component } from 'react' ;
import styles from './Layout.module.css';
import Cover from '../Cover/Cover';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state = {
        sideDrawerState : false
    }

    sideDrawerHandler = () => {
        this.setState({sideDrawerState : false});
    }

    toogleSideDrawer = () => {
        this.setState((prevstate) => {
            return {sideDrawerState : !prevstate.sideDrawerState}
        });
    }

    render() {
        return (
            <Cover>
                <Toolbar toogleDrawer={this.toogleSideDrawer}/>
                <SideDrawer curState={this.state.sideDrawerState} closeSideDrawer={this.sideDrawerHandler}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Cover>
        );
    }

}

export default Layout;