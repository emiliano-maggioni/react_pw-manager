import { Route, Routes } from 'react-router-dom'
import HomeView from "views/HomeView/HomeView";
 
const Routing = () => { 

  return (
      <Routes>
        {/* <Route path='/details/:id' element={<DefaultDetailsView />} />   */}
        <Route path='/' element={<HomeView />} />      
      </Routes>
  );
}

export default Routing;
