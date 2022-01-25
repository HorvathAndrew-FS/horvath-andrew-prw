import React from 'react';

function Dashboard() {
    return (
        <section style={styles.container}>
            <p>Logo</p>
            <h1 style={styles.title}>Dashboard</h1>
            <p>place all of the charts here.</p>
        </section>
    );
}

export default Dashboard;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
    }
}