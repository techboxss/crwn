import { Routes, Route } from 'react-router-dom';
import './index.css';
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';                        
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIncomponent from './routes/sign-in/SignIncomponent';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIncomponent />} />
      </Route>
    </Routes>
  );
};

export default App;
