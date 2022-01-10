import React from 'react'

//standard button component
const ButtonStandard = props => {
    return (
        <button style={styles.btn}>
            {props.btnText}
        </button>

    )
}
export default ButtonStandard

const styles = {
    btn: {
        background: '#121212',
        color: '#fff',
        fontSize: '1.2rem',
        padding: '1% 2.25%',
        borderRadius: '5px',
        border: '1px solid #121212',
        cursor: 'pointer'
    }
 
}