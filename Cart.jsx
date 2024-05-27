import React from 'react';
import CartItems from './CartItems';



const Cart =() =>{
    return(
        <div>
            <div className="lg-grid grid-col-3lg:px-16 relative">
                <div className='col-span-2'> 
                {[1,1,1,1,1].map((item)=> <CartItems/>)}


                </div>
                <div className='px-5 sticky top-0 h-[100 vh] mt-5 lg:mt-0'>
                <div className='border'>
                    <p className='uppercase font-bold-opacity-60 pb-4'>price details</p>
                    <hr/>
                    <div className='space-y-3 font-semibold mb-10'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>4687 ₹</span>

                        </div>
                        <div className='flex justify-between pt-3 '>
                            <span className='text-green-600'>Discount</span>
                            <span>-3488 ₹</span>

                        </div>
                        <div className='flex justify-between pt-3 '>
                            <span  className='text-green-600'>delivary charge</span>
                            <span>Free</span>

                        </div>
                        <div className='flex justify-between pt-3 '>
                            <span  className='text-green-600'>Total Amaunt</span>
                            <span>1278 ₹</span>

                        </div>

                        




                    </div>
                    <Button vraiant="contained" className="w-full mt-5" sx={{px:"2.5rem",py:".7rem",bgcolor:"#9155fd"}}>
                        CheckOut
                            
                    </Button>
                </div> 
           
            </div>
          
                 
            </div>
           
        </div>
    )
}
export default Cart;