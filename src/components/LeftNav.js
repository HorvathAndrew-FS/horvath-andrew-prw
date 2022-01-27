import React from 'react';
import NavButton from './buttons/ButtonStandard';
//If you are not using props you can leave it empty.
const LeftNav = () => {
    return (
        <div style={styles.leftNavContainer}>
        <NavButton btnText="News Feed" />
        <NavButton btnText="Messages" />
        <NavButton btnText="Watch" />
        </div>
    )
}
export default LeftNav;

const styles = {
    leftNavContainer: {
        height: '23rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
}