import React from 'react';

const UserForm = props => {
    return (
        <article key={props.id} style={styles.article}>
            <p><img src={props.img} alt={props.alt} /></p>
            <p>{props.username}</p>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.address}</p>
        </article>
    )
}

export default UserForm;

const styles = {
    article: {
        background: 'green',
        color: 'white',
        width: '50%',
        height: '50rem',
        fontSize: '3rem',
    }
}