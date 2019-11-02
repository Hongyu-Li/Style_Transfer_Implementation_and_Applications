import React, { Component } from 'react';
import { Card } from 'antd';
import hyl from '../assets/hl.jpg';
import hpf from '../assets/ph.jpg';
import jz from '../assets/jz.jpg';
import dw from '../assets/dw.jpg';
import styles from './index.module.scss';

const { Meta } = Card;
class About extends Component {
    render() {
        const teams = [
            { name: 'Hongyu Li', email: 'hl3099@columbia.edu', avatar: hyl },
            { name: 'Peifeng Hong', email: 'ph2534@columbia.edu', avatar: hpf },
            { name: 'Jia Zheng', email: 'jz2891@columbia.edu', avatar: jz },
            { name: 'Di Wu', email: 'dw2794@columbia.edu', avatar: dw }
        ];
        return (
            <div className={styles.about}>
                <h1>Our Team</h1>
                <p>We love image processing and would explore further!</p>
                <div className={styles.team}>
                    {teams.map((person) => (
                        <Card
                            className={styles.card}
                            cover={<img alt="avatar" src={person.avatar} className={styles.avatar} />}>
                            <Meta
                                title={<h3 className={styles.title}>{person.name}</h3>}
                                description={person.email}
                            />
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

}

export default About;