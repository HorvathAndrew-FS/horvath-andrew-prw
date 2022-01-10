import React from 'react'

//standard button component
const ButtonOutline = props => {
    return (
        <button style={styles.btnOutline}>
            {props.btnText}
        </button>

    )
}
export default ButtonOutline

const styles = {
    btnOutline: {
        background: 'transparent',
        color: '#121212',
        fontSize: '1.2rem',
        padding: '1% 2.25%',
        borderRadius: '5px',
        border: '2px solid #121212',
        cursor: 'pointer'
    }
 
}