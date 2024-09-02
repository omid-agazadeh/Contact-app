import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';

import EditPage from './components/EditPage';
import CreateContact from './pages/CreatteContact';

function App() {
   return (
      <Routes>
         <Route path="/MainPAge" element={<MainPage />} />
         <Route path="/" element={<MainPage to="/product" replace />} />
         <Route path="/Create" element={<CreateContact/>}  />
         
         <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
   );
}

export default App;
