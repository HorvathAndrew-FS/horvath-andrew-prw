import React from 'react';

import { GoSettings } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { GiSquirrel } from "react-icons/gi";
import AvatarImageURL from '../images/AvatarAndrew-sm.svg';
import Avatar from '../components/Avatar';
import Logo from '../images/digitalLogo.jpg';

const MainHeader = props => {
    return (
        <header style={styles.mainHeader}>
            <div style={styles.logoWrapper}>
                <div style={styles.logo}>
                    <img src={Logo} alt='some alt text for logo here' />
                </div>
                <h1 style={styles.companyTitle}>Mango Digital</h1>
            </div>
            <div style={styles.searchWrapper}>
                <span style={styles.searchIcon}><BsSearch /></span>
                <input type="text" style={styles.searchInput}
                placeholder="Search" />
            </div>
            <nav style={styles.rightNav}>
                <button style={styles.rightNavIcons}><GoSettings /></button>
                <button style={styles.rightNavIcons}><GiSquirrel /></button>
                <Avatar AvatarIcon={AvatarImageURL} />
            </nav>
        </header>
    )
}
export default MainHeader

const styles = {
    mainHeader: {
        marginBottom: '3rem',
        padding: '1.5%',
        background: 'rgba(37, 68, 65, 1)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '1px 6px 7px 1px rgba(37, 68, 65, .3)'
    },
    logoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '1%',
    },
    logo: {
       height: '50px',
       width: '50px',
       marginRight: '1rem',
    },
    companyTitle: {
        fontFamily: 'Montserrat',
        fontSize: '3rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        color: 'rgba(126, 217, 87, 1)',
    },
    searchWrapper: {
        border: '2px solid rgba(247, 100, 107, 1)',
        display: 'flex',
        flexDirection: 'row',
        width: '30%',
    },
    searchIcon: {
        background: 'rgba(255, 235, 245, 1)',
        padding: '1rem',
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
    },
    searchInput: {
        border: 'none',
        flex: '1',
        padding: '1rem',
        background: 'rgba(255, 235, 245, 1)',
    },
    rightNav: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '2%',
    },
    rightNavIcons: {
        padding: '0',
        fontSize: '3rem',
        background: 'none',
        border: 'none',
        marginRight: '2rem',
        color: 'rgba(247, 100, 107, 1)',
    }

}
