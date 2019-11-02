import React, { Component } from 'react';
import {Icon} from 'antd';
import butler from '../assets/butler.png';
import centralpark from '../assets/centralpark.png';
import Carousel from 'nuka-carousel';
import styles from './index.module.scss';




class Home extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            currentIndex: 0
        }
    }

    render() {
        return (
        <>
            <Carousel withoutControls={true} dragging={false} slideIndex={this.state.currentIndex}>
                <img src={butler} alt='carousel' className={styles.imgSize}/>
                <img src={centralpark} alt='carousel' className={styles.imgSize}/>
            </Carousel>
            {this.state.currentIndex === 0 ? 
                <Icon type='right' onClick={()=>this.setState((prev)=>({currentIndex: prev.currentIndex + 1}))} className={styles.right}/>: 
                <Icon type='left' onClick={()=>this.setState((prev)=>({currentIndex: prev.currentIndex - 1}))} className={styles.left}/>
            }
            {this.state.currentIndex === 0 ?
                <div className={styles.title}>
                    <h3>Butler Library</h3>
                    <p>Starry Night Over the Rhône - Vincent van Gogh</p>
                </div>:
                <div className={styles.title}>
                    <h3>Central Park</h3>
                    <p> Mont Sainte, Victoire - Paul Cézanne</p>
                </div>}
        </>    
        )
    }
}
        
export default Home;