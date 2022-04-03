import styles from './Form.module.css'

const Form = () => {
    return ( 
        <form>
            <input
            type="text"
            name="city"
            placeholder="Please type city" 
            autocomplete="off"
            className={`form-control ${styles.input} my-3`}
            />
            

            {/* <button
                type="button"
                className="btn btn-success">
                    Search
            </button> */}
        </form>   
     );
}

export default Form;