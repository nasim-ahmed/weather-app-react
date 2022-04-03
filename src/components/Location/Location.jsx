import styles from './Location.module.css';


const Location = () => {
    return (
    <div className={`card-img-top ${styles.img}`}>
       <div className={`${styles.cityname} my-3`}>
         <p>Berlin</p>
         <span>...</span>
       </div>
    </div>
    ); 
}


export default Location;