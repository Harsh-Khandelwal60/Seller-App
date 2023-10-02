import React from "react";
import useStyles from './Style'; 
import { Grid , CircularProgress } from '@mui/material';
import data from '../../Data/Data'
import CardComponent from './Card/Card';


const Posts = () => {
    

    const classes = useStyles();

   
   
    return (
        <Grid sx={classes.container} container alignItems="stretch" spacing={3}>
            {
                data.map((data) => (
                    <Grid key={data.id} item xs={12} sm={12} md={6} lg={4} >
                        <CardComponent data={data} />
                    </Grid>
                ))
            }
        </Grid>
    )
       
};

export default Posts;