import styles from "./styles.module.css"
export default function Banner_Procurado(props){

    return(
        <div className={styles.container}>
        <img src={props.source} alt="image"/>
        </div>
    );
};