import Rect from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import { Box, Grid } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails =() =>{
    return(
        <div className="px-5 lg:px-20">
            <div>
                <h1 className='font-semibold text-xl py-7'>Delivary Address</h1>
            <AddressCard/>

            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3}/>
            </div>
            <Grid  className=" space-x-5" container>
                <Grid item container className="shadow-xl rounded ml p-5 border" sx={{alignItems:"center",justifycontent:"spce-between"}}>
                    <Grid item sx={6}>
                        <div className='flex item-center space-y-2'>
                            <img  className="w=[5rem]h-[5rem] object-cover object-top"src="https://www.ethnicplus.in/media/catalog/product/cache/1d5df636cf8c8988ea2d2c570bb7c21d/s/l/sl-nuqat-152_2_.jpg" alt=""/>
                            <div className='space-y-2 ml-5'>
                            <p> cute purple embroidered georgatte designer crop-top shara wit jacket</p>
                            <p className='space-x-5'> <span>color:purple</span><span> size:M</span></p>
                            <p>Seller:linaries</p>
                            <p>₹4,449.00</p>
                            </div>
                        </div>    

                    </Grid>
                    <Grid  item className=''>
                        <Box sx={{color:deeppurple[500]}}>
                            <StarBorderIcon sx={{fontsize:"2rem"}} className='px-2 text-5xl'/>
                            <span>Rate &Review product</span>

                        </Box>

                    </Grid>
                    

                   

                </Grid>

            </Grid>
           

        </div>

    ) 
}
export default OrderDetails;
