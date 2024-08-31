import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import CreatteContact from './components/CreatteContact';
import EditPage from './components/EditPage';

function App() {
   return (
      <Routes>
         <Route path="/MainPAge" element={<MainPage />} />
         <Route path="/" element={<MainPage to="/product" replace />} />
         <Route path="/Create" element={<CreatteContact />} />
         <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
   );
}

export default App;
