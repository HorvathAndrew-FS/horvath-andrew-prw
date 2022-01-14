import React from 'react';
import Button from './buttons/ButtonOutline'
import styled from 'styled-components';

const PostForm = props => {
    return (
        <StyleComp>
            <form>
           <input placeholder="Create Post" />
        
            <div>
                <textarea placeholder="What's Your Boggle?" />
                <div>
                    <Button btnText="Post" />
                </div>
            </div>
            </form>
        </StyleComp>

    )
};
export default PostForm;

const StyleComp = styled.div`
    width: 100%;
    color: rgba(37, 68, 65, 1);
    padding: 2rem;
    margin: 1rem 0 0 0;
`;

// const styles = {
//     postForm: {
//         background: 'rgba(37, 68, 65, 1)',
//         color: 'rgba(37, 68, 65, 1)',
//         padding: '2rem',
//         borderRadius: '.5rem',
        
//     },
//     input: {
//         width: '90%',
//         padding: '1.5rem',
//         marginBottom: '0 auto 1rem',
//         background: 'rgba(255, 235, 245, 1)',
//         fontSize: '1.6rem',
//         fontWeight: 'bold',
//         textTransform: 'uppercase',
//         color: 'rgba(247, 100, 107, 1)'
//     },
//     contentAndBtn: {
//         // border: 'none',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         width: '90%',
//     },
//     textarea: {
//         width: '90%',
//         padding: '1rem',
//         background: 'red',
//         border: 'none',
//         fontSize: '1.6rem',
//         fontWeight: 'bold',
//         textTransform: 'uppercase',
//         color: 'rgba(255, 235, 245, 1)',
//         marginBottom: '1rem',
//     },
// }