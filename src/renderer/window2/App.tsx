import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div className='bg-white text-red-900 text-6xl hover:bg-sky-600'>
        hola mundo
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
