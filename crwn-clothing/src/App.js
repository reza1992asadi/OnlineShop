import './App.scss';
import { Route, Routes} from 'react-router-dom'; 
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component'; 
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component'; 
import CheckOut from './routes/checkout/checkout.component';


const App = () => {
  return (
    <div className='app-layout'>
      <Routes>
        <Route  path='/' element= {<Navigation />}>
          <Route index element= {<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element= {<CheckOut />} />
        </Route>
      </Routes>
    </div>
);
};

export default App; 
