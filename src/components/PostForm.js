import React from 'react';
import styled from 'styled-components';
import Button from './buttons/ButtonOutline';
import AvatarImageURL from '../images/AvatarAndrew.svg';
import Avatar from '../components/Avatar';


const PostForm = props => {
    return (
        <StyleComp>
            <form>
                <input placeholder="Create Post" />
                    <div className="form-group">
                        <Avatar AvatarIcon={AvatarImageURL} />
                        <textarea placeholder="What's Your Boggle?" />
                        <Button btnText="Post" />    
                    </div>
            </form>
        </StyleComp>

    )
};
export default PostForm;

const StyleComp = styled.div`
    form {
        width: 100%;
        background: rgba(67, 170, 139, 1);
        padding: 2rem;
    }
    input {
        width: 100%;
        padding: 1rem;
        margin: 0 0 1rem 0;
        font-size: 3rem;
    }
    input::placeholder {
        font-size: 2rem;
    }
    textarea {
        width: 90%;
        height: fit-content;
        padding: 1rem 1.5rem 1.5rem;
        border: none;
        margin: 0 0 1rem 1rem;
        background: none;
        font-size: 3rem;
        color: rgba(255, 235, 245, 1);
        resize: none;
    }
    textarea::placeholder {
        color: rgba(37, 68, 65, 1);
        font-size: 3rem;
        line-height: 8rem;
    }
    textarea:focus {
        outline: none;
    }
    .form-group {
        display: flex;
        align-items: center;
    }
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