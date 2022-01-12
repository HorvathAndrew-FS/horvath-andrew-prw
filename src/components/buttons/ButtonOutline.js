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
        color: 'rgba(126, 217, 87, 1)',
        fontSize: '1.5rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        padding: '1% 2.25%',
        borderRadius: '5px',
        border: '2px solid rgba(247, 100, 107, 1)',
        cursor: 'pointer'
    }
 
}