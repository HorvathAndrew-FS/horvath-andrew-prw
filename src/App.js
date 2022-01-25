import { Routes, Route } from 'react-router-dom';
import Header from './components/MainHeader';
import Nav from './components/NavChart';
import Dashboard from './pages/Dashboard';
import ChartDash from './pages/ChartDash';

function App() {
  return (
    <div>
      <Header />
        <main style={styles.container}>
          <Nav style={styles.nav} />
            <section>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='chartDash' element={<ChartDash />} />
              </Routes>
            </section>
        </main>
    </div>
  );
}

export default App;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        backgroundColor: 'red',
    }
}