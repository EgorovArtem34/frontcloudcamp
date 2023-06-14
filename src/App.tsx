import { Routes, Route, Navigate } from 'react-router-dom';
// import './styles/index.css';
import MainPage from './components/MainPage/MainPage';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/users/:userId" element={<User />} />
      <Route path="/about" element={<AboutMe />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default App;
