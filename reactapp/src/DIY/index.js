import React, { Component } from 'react';
import styles from './index.module.scss';
import DropzoneComponent from 'react-dropzone-component';
import $ from 'jquery';
import * as tf from '@tensorflow/tfjs';
import '../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../node_modules/dropzone/dist/min/dropzone.min.css';

const loadModel= async () => {
    // const model = await tf.loadLayersModel('./tfjs_model/model.json');
    // console.log(model);
}

const removeSomeDefaultConfigOnUpload = () => {
    $('.dz-progress').remove();
    $('.dz-preview').remove();
    $('.dz-default').css('display', 'block');
}

const removeSomeDefaultConfigOnInit = () => {
    $('.dropzone').css('background-color', 'transparent');
    $('.filepicker').css('min-height', '0');
    $('.filepicker').css('height', '50px');
    $('.dz-default').css('margin', '10px');
}

const displayImageOnUpload = (file) => {
    let inputImage = ''; 
    const width = window.innerWidth * 0.5;
    const height =  window.innerHeight * 0.55;
    const reader = new FileReader();
    reader.onload = (event) => {
        inputImage = event.target.result;
        if (inputImage){
            if ($('img').length !== 0) {
                $('img').attr('src', inputImage);
            }else{
                $('#input').append(`<img width=${width} height=${height} src=${inputImage} alt='input-image'/>`);
            }
            const image = document.getElementById('input');
            
        }
    }
    reader.readAsDataURL(file);
}

var componentConfig = {
    iconFiletypes: ['.jpg', '.png', 'jpeg'],
    showFiletypeIcon: false,
    postUrl: 'no-url'
};
var djsConfig = {
    addRemoveLinks: true,
    autoProcessQueue: false,
    maxFiles: 1,
    dictDefaultMessage: "Click or Drop files Here"
}
var eventHandlers = {
    addedfile: (file) => {
        displayImageOnUpload(file);
        removeSomeDefaultConfigOnUpload();
    }, 
    init: () => removeSomeDefaultConfigOnInit()
}
class DIY extends Component {
    componentDidMount(){
        loadModel();
    }

    render() {
        return (
            <div className={styles.diy}>
                <h1>Style Transfer An Image</h1>
                <p>Use Deep Learning to Automatically Style Tranfer An Image</p>
                <div className={styles.upload}>
                    <DropzoneComponent config={componentConfig}
                        eventHandlers={eventHandlers}
                        djsConfig={djsConfig} />
                </div>
                <div className={styles.result}>
                    <div className={styles.inputImage} id='input'/>
                    <div className={styles.outputImage} id='output'/>
                </div>

            </div>
        )
    }

}

export default DIY;