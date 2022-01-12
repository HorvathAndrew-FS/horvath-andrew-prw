import React from 'react';
import NavButton from './buttons/ButtonStandard';

const LeftNav = props => {
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
        display: 'flex',
        flexDirection: 'column',
        padding: 30,
    }
}