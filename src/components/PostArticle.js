import React from 'react';
// import styled from 'styled-components';
import MyBtn from './buttons/ButtonStandard';

const PostArticle = props => {
    return (
        <article style={styles.myPostArticle}>
            <img src={props.value.pImg} alt={props.value.pAlt} />
                <h2>{props.value.pName}</h2>
                    <p>{props.value.pText}</p>

                    <div style={styles.buttons}>
                        <MyBtn btnText='edit' />
                        <MyBtn btnText='delete' />
                    </div>
        </article>

    )
}

export default PostArticle;

const styles = {
    width: '100%',
    background: '0rgba(67, 170, 139, 1)',
    padding: '2rem',
}