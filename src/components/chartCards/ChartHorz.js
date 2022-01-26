import React from 'react';
import LineCharts from '../charts/HorzLineCharts';

const ChartHorz = ({chartHorz}) => {
    return (
        <article key={chartHorz.id} style={styles.card}>
            <h1>{chartHorz.chartHeader}</h1>
            <LineCharts />
        </article>
    )
};

export default ChartHorz;

const styles = {
    card: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        minHeight: '100%',
        background: 'white',
        margin: '1rem',
        padding: '1rem',
        width: '50%',
    }

}