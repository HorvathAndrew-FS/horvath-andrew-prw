import React from 'react'

//my avatar component
const Avatar = props => {
    return (
        <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.Avatar} />
    )
}
export default Avatar

const styles = {
    Avatar: {
        height: '75px',
        cursor: 'pointer',
        borderRadius: '50%'
    }
}
