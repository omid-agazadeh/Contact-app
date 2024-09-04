import { Route, Routes } from 'react-router-dom';

import CreateContact from './components/createContact/MainCreateContact';
import MainWatch from './components/mainPage/MainWatch';
import EditPage from './pages/EditPage';

function App() {
   return (
      <Routes>
         <Route path="/MainPAge" element={<MainWatch />} />
         <Route path="/" element={<MainWatch to="/product" replace />} />
         <Route path="/Create" element={<CreateContact />} />
         <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
   );
}

export default App;
