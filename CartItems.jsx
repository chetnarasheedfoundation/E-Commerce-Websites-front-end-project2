import React from 'react';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import {Button} from '@material-ui/core/Button';

const CartItems = () =>{
    return(
        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg-h:[9rem]">
                    <img className="w-full h-full object-cover object-top" src=""  alt=""/>
                    
                </div>
            <div className="ml-5 space-y-1"></div>
                <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                <p className="opacity-70 mt-2">Size:L,White</p>
                <p className="opacity-70 mt-2">Seller:Crishtaliyo 2fashion</p>
                
                <div className='flex space-x-5 items-center text-lg lg:text-xl text-grey-900 pt-6'>
                    <p className='font-semibold'> ₹199</p>
                    <p className='opacity-50 line-through'> ₹211</p>
                   < p className='texgreen-500 font-semibold'>5% off</p>

                </div>   
                
            </div>
            <div className="lg:flex items-center lg: space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <IconButton>
                    <RemoveCircleTwoToneIcon/>

                    </IconButton>
                    <span className="py-1 px-2 border rounded-sm">3</span>
                    <IconButton sx={{color:"RCB(145 85 253)"}} >
                     <AddCircleOutlineIcon/>

                    </IconButton>
                    

                </div>
                <div>
                    <Button  sx={{color:"RCB(145 85 253)"}}>remove</Button>
                </div>
            </div>
        </div>
    )
}
export default CartItems;