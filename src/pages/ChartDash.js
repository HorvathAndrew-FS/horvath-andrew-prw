import React from 'react';

function ChartDash() {
    return (
        <section style={styles.container}>
            <p>Logo</p>
            <h1 style={styles.title}>ChartDash</h1>
            <p>Here is a different Page called chart dash!</p>
        </section>
    );
}

export default ChartDash;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
    }
}