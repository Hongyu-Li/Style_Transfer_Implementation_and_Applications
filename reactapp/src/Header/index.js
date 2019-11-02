import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import {Icon} from 'antd';

class Header extends Component {
    render() {
        return (
            <div className={styles.Header}>
                <h1>Neural Style Transfer</h1>
                <div className={styles.menu}>
                    <Link to='/Home' className={styles.link}>Home</Link>
                    <Link to='/DIY' className={styles.link}>DIY</Link>
                    <Link to='/WebCam' className={styles.link}>WebCam</Link>
                    <Link to='/About' className={styles.link}>About</Link>
                    <a href='https://github.com/Hongyu-Li/Style_Transfer_Implementation_and_Applications'
                          className={styles.link}>
                        <Icon type='github'/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Header;