import React from 'react';
import ButtonOutline from '../components/buttons/ButtonOutline';

const PostForm = props => {
    return (
        <form style={styles.postForm}>
            {/* You do not need these divs */}
            {/* <div style={styles.formTitle}> */}
                <h3 style={styles.formH3}>Create Post</h3>
            {/* </div> */}
            {/* <div style={styles.containerTitle}> */}
                <input style={styles.input} placeholder="first name" />
            {/* </div> */}
            {/* <div style={styles.containerDescription}> */}
                <textarea style={styles.textarea} cols="30" rows="15" placeholder="enter post content here" />
            {/* </div> */}
            <div style={styles.btnWrap}>
                <ButtonOutline btnText="Submit" />
            </div>
        </form>
    )
};
export default PostForm;

const styles = {
    postForm: {
        background: 'rgba(37, 68, 65, 1)',
        color: 'rgba(37, 68, 65, 1)',
        padding: '.75rem 1.5rem',
        borderRadius: '.5rem',
        marginTop: '1rem',
    },
    formTitle: {
        fontSize: '1.6rem',
    },
    formH3: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'rgba(126, 217, 87, 1)'
    },
    input: {
        width: '100%',
        padding: '1rem',
        background: 'rgba(255, 235, 245, 1)',
        fontSize: '1.6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'rgba(247, 100, 107, 1)'
    },
    textarea: {
        padding: '1rem',
        background: 'rgba(255, 235, 245, 1)',
        fontSize: '1.6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'rgba(247, 100, 107, 1)',
        marginBottom: '2rem',
        width: '100%'
    },
}