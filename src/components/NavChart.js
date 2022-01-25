import React from 'react';
import NavButton from './buttons/ButtonChart';

const LeftNav = props => {
    return (
        <div style={styles.leftNavContainer}>
        <NavButton btnText="Link 1" />
        <NavButton btnText="Link 2" />
        <NavButton btnText="Link 3" />
        </div>
    )
}
export default LeftNav;

const styles = {
    leftNavContainer: {
        height: '25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
}