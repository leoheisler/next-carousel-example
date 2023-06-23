import styles from "./styles.module.css"
export default function Banner_Procurado(props){

    return(
        <div>
        <img className={styles.container} src={props.source} alt="image"/>
        </div>
    );
};