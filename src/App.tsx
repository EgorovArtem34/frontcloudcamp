import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import StepOne from './components/Step1/StepOne';

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/step1" element={<StepOne />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default App;
