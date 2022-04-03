import styles from './Card.module.css';
import cloud from './img/cloud.svg'; 

const Card = () => {
    return (
        <div className={`card ${styles.card}`}>
            <div className={`card-img-top ${styles.img}`}> 
             <div className={`${styles.cityname} my-3`}>
               <p>Berlin</p>
               <span>...</span>
             </div>
            </div>

            <div className="card-body">
                {/* <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <div className={`${styles.cardmid} row`}>
                    <div className={`col-8 text-center ${styles.temp}`}>
                         <span>30&deg;C</span>
                    </div>
                    <div className="col-4 condition-temp">
                        <p className={`${styles.condition}`}>Thunder Storm</p>
                        <p className={`${styles.high}`}>30&deg;C</p>
                        <p className={`${styles.low}`}>27&deg;C</p>
                    </div>
                    <div className={`${styles.icon_container} card shadow mx-auto`}>
                        <img src={cloud} alt="" />
                    </div>
                    <div className={`${styles.card_bottom} px-1 py-4 row`}>
                       <div className="col text-center">
                        <p>30&deg;C</p>
                        <span>Feels Like</span>
                       </div>
                       <div className="col text-center">
                           <p>55%</p>
                           <span>Humidity</span>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
       
        
    );
}

export default Card;