import React from 'react';

function SettingChart() {
    return (
        <section style={styles.container}>
            <h1 style={styles.title}>Settings</h1>
            <p style={styles.content}>This is where settings would be for the user to change.</p>
        </section>
    );
}

export default SettingChart;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '5rem',
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        color: 'rgba(126, 217, 87, 1)',
    },
    content: {
        fontFamily: 'Montserrat',
        fontSize: '2.25rem',
        color: 'rgba(255, 235, 245, 1)',
        width: '75rem',
        marginTop: '2rem',
    }
}