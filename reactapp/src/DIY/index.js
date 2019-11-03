import React, { Component } from 'react';
import styles from './index.module.scss';

class DIY extends Component {
    render() {
        return (
            <div className={styles.diy}>
                <h1>Style Transfer An Image</h1>
                <p>Use Deep Learning to Automatically Style Tranfer An Image</p>
                <div className={styles.upload}>
                </div>
            </div>
        )
    }

}

export default DIY;