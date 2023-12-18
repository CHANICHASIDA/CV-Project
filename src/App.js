import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Counter from './counter';
import Form from './form';
import ShopApp from './shopApp'

import Header from './header';



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index element={<Counter/>}/>
        <Route path="/about" element={<ShopApp/>}/>
        <Route path="/employee" element={<Counter/>}/>
        <Route path="/employee/:company" element={<Counter/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
