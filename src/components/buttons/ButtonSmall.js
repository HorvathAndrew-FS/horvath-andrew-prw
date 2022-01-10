import React from 'react'

//standard button component
const ButtonSmall = props => {
    return (
        <button style={styles.btn}>
            {props.btnText}
        </button>

    )
}
export default ButtonSmall

const styles = {
    btn: {
        background: '#121212',
        color: '#fff',
        fontSize: '1.2rem',
        padding: '5px 10px',
        borderRadius: '7px',
        border: '1px solid #121212',
        cursor: 'pointer'
    }
 
}