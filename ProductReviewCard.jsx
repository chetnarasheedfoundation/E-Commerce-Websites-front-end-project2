import React from 'react';
import {Box,Grid} from '@mui/material';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';

const ProductReviewCard =() => {
    return(
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar ClassName="text-white" sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-2"></div>
                    <div>

                        <p className="font-semibold text-lg">Karan</p>
                        <p className="opacity-70">may 5,2024</p>
                    </div>
                    <Rating vlue={4.5} name="half-rating" readOnly precision={4.5}/>
                    <p>nice product</p>

                </Grid>
            </Grid>
        </div>
    )
};
export default ProductReviewCard;