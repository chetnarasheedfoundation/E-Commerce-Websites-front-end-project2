import Reacr from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../customer/pages/HomePage';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Cart from '../customer/components/Cart/Cart';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order';
import OrderDetails from '../customer/components/Order/OrderDetails';
const CustomerRouters =()=>{
    return(
        <div>
            <div>
            < Navigation/>
            </div>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/:levelone/:leveltwo/:levelthree' element={<Product/>}>
                <Route path='/Product/:ProductId' element={<ProductDetails/>}></Route>
                <Route path='/Checkout' element={<Checkout/>}></Route>
                <Route path='/account/:order' element={<Order/>}></Route>
                <Route path='/account/:Order/:OrderId' element={<OrderDetails/>}></Route>
        
       
       
        
       


                </Route>
            </Routes>
            <div>
            <Footer/>
            </div>
     

        </div>
    )
};
export default CustomerRouters;