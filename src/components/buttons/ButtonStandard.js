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
        background: 'rgba(37, 68, 65, 1)',
        color: 'rgba(126, 217, 87, 1)',
        fontSize: '1.5rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        padding: '2rem',
        borderRadius: '5px',
        border: '1px solid #121212',
        cursor: 'pointer',
    }
 
}