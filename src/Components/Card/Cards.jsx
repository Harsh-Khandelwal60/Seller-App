import React, { useEffect } from "react";
import useStyles from './Style'; 
import { Grid , CircularProgress } from '@mui/material';
// import data from '../../Data/Data'
import CardComponent from './Card/Card';
import { useDispatch,  useSelector } from "react-redux/";
import { getData ,getDataByID } from "../../Store/CarData";
import { useLocation , useParams } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Paginate from '../Pagination/Pagination'


const Cards = () => {
    

    const classes = useStyles();
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.carData);



    const {id} = useParams();
    console.log(id);
    
    useEffect(() => {
        if(id){
            dispatch(getDataByID(id));
        }else{

            dispatch(getData())
        }
    },[id])
   
   
    return (


        <>
        <Navbar/>
            <Grid sx={classes.container} container alignItems="stretch" spacing={3}>
            {
                data.map((data) => (
                    <Grid key={data.id} item xs={12} sm={12} md={6} lg={4} >
                        <CardComponent data={data} />
                    </Grid>
                ))
            }
           
        </Grid>
        <Paginate pageNumber={id}/>
        </>
    )
       
};

export default Cards;