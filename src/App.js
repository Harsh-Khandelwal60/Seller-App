import React, { useEffect, useState } from 'react';
import Cards from './Components/Card/Cards';
import Navbar from './Components/NavBar/Navbar';



import { BrowserRouter , Routes , Route, useNavigate, Navigate} from 'react-router-dom';





function App() {
  const [id , setId] = useState(1);

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/pages' element={<Cards/>}/>
            <Route exact path='/pages/:id' element={<Cards/>}/>
            <Route path='*' element={<Navigate to = "/pages"/>}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
