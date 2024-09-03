import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EditPage from './components/EditPage';
import CreateContact from './components/createContact/MainCreateContact';

function App() {
   return (
      <Routes>
         <Route path="/MainPAge" element={<MainPage />} />
         <Route path="/" element={<MainPage to="/product" replace />} />
         <Route path="/Create" element={<CreateContact />} />

         <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
   );
}

export default App;
