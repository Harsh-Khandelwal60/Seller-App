import React ,{useEffect} from "react";
import { Pagination , PaginationItem , Typography} from "@mui/material";
import { useNavigate  } from "react-router-dom";
import useStyles from './Styles';
import { useDispatch  } from "react-redux";




const Paginate = ({pageNumber}) => {

    const numberOfPages = 10;
    const classes = useStyles();
    const dispatch = useDispatch();
    const page = 5;
    const Navigate = useNavigate();
    
    
    const handleChange = (event , value) => {
        console.log(event, value);
        Navigate(`/pages/${value}`)
    }
   

    return (
        <div style={classes.divStyle}>
            <Typography>Page Number {!pageNumber?1:pageNumber}</Typography>
            <Pagination 
                sx = { {ul : classes.ul }  }
                count={numberOfPages}
                variant="outlined"
                color="primary"
                onChange={handleChange}
            />
        </div>
    )
}
export default Paginate;