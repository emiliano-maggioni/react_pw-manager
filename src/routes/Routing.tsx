import { Route, Routes } from 'react-router-dom'
import CreatePasswordView from 'views/CreatePasswordView/CreatePasswordView';
import FeedbackView from 'views/FeedbackView/FeedbackView';
import HomeView from "views/HomeView/HomeView";
 
const Routing = () => { 

  return (
      <Routes>
        <Route path='/feedback' element={<FeedbackView />} />
        <Route path='/create-password' element={<CreatePasswordView />} />
        <Route path='/' element={<HomeView />} />
      </Routes>
  );
}

export default Routing;
