import React from 'react';
// import styled from 'styled-components';
import MyBtn from './buttons/ButtonStandard';

const PostArticle = props => {
    return (
        <article style={styles.myPostArticle}>
            <img style={styles.postImg} src={props.val.pImg} alt={props.val.pAlt} />
                <h2>{props.val.pName}</h2>
                    <p>{props.val.pText}</p>

                    <div style={styles.buttons}>
                        <MyBtn btnText='edit' />
                        <MyBtn btnText='delete' />
                    </div>
        </article>

    )
}

export default PostArticle;

const styles = {
    myPostArticle : {
    margin: '1rem 0 0 0',
    width: '100%',
    background: 'rgba(67, 170, 139, 1)',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'white',
    },
    postImg: {
        width: '300px',
    }
}