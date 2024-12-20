import { Route, Routes} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component'; 
import SignIn from './routes/signin/signin.component';


const Shop = () => { 
  return (
    <div> 
        <h1>This is the shop</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element= {<Navigation />}>
        <Route index element= {<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
);
};

export default App; 
