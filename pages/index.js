import styles from "./styles.module.css";
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Banner_Procurado from './Banner_Procuradp/Banner_Procurado';
  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className={styles.main}>
              <h1>OS MAIS PROCURADOS DO VALE</h1>
              <div className={styles.container}>
                <Carousel infiniteLoop="true" showStatus="false" showIndicators="false">
                  <Banner_Procurado source = "./pouco-corre.png"/>  
                  <Banner_Procurado source = "./diego.png"/>
                  <Banner_Procurado source = "./bigode-ralo.png"/>
                  <Banner_Procurado source = "./dorme-dorme.png"/>
                  <Banner_Procurado source = "./renato.png"/>
                </Carousel>
              </div> 
            </div>
        );
    }
};