import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import CreatteContact from './components/CreatteContact';

function App() {
   return (
      <Routes>
         <Route path="/MainPAge" element={<MainPage />} />
         <Route path="/" element={<MainPage to="/product" replace />} />
         <Route path="/Create" element={<CreatteContact />} />
      </Routes>
   );
}

export default App;
