import { Component,react } from 'react';
import styles from "./styles.module.css"
import { Carousel } from 'react-responsive-carousel';
import Banner_Procurado from '../Banner_Procuradp/Banner_Procurado';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel_main(){
    const CustomPrevArrow = ({ onClick }) => (
        <div className={styles.customPrevArrow} onClick={onClick}>
          Previous
        </div>
    );
    const CustomNextArrow = ({ onClick }) => (
        <div className={styles.customNextArrow} onClick={onClick}>
          Next
        </div>
    );
    const renderIndicator = (onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              className={styles.carouselLi}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            >
              <span className={styles.indicatorDotSelected} />
            </li>
          );
        }
    
        return (
          <li
            className={styles.carouselLi}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          >
            <span className={styles.indicatorDot} />
          </li>
        );
      };

    return(
        <div className={styles.carouselContainer}>
            <Carousel infiniteLoop={true} showStatus={false} 
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                    <CustomPrevArrow onClick={onClickHandler} label={label} />
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                    <CustomNextArrow onClick={onClickHandler} label={label} />
                    )
                }
                renderIndicator={renderIndicator}
            >

            <Banner_Procurado source = "/pouco-corre.png"/>  
                <Banner_Procurado source = "/diego.png"/>
                <Banner_Procurado source = "/bigode-ralo.png"/>
                <Banner_Procurado source = "/dorme-dorme.png"/>
                <Banner_Procurado source = "/renato.png"/>
            </Carousel>
        
        
        </div>
    )
   
}
