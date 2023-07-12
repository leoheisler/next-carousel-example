import styles from "./styles.module.css";
import React, { Component } from 'react';
import Carousel_main from "./Carousel_main/carousel_main";

  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className={styles.main}>
              <h1>OS MAIS PROCURADOS DO VALE</h1>
              <div className={styles.container}>
                <Carousel_main/>
              </div> 
            </div>
        );
    }
};