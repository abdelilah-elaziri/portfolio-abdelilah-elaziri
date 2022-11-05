import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio-abdelilah-elaziri" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App;
