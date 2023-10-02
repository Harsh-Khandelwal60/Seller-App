import React from 'react';
import { Card, CardContent, Typography , CardMedia ,ButtonBase ,CardActions ,Button } from '@mui/material';
import useStyles from './style';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import EvStationRoundedIcon from '@mui/icons-material/EvStationRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import ShutterSpeedRoundedIcon from '@mui/icons-material/ShutterSpeedRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';






const CardComponent = ({data}) => {
                const classes = useStyles();
     return (
          <Card sx={classes.card} raised elevation={6}>
                            
                <CardMedia sx={classes.media} image={data.img} alt="Image"/> 
                          <ButtonBase sx={classes.cardAction}>
                             <CardContent>
                                    <Typography variant="h5" gutterBottom  component="p">{data.name}</Typography>
                              </CardContent>
                            <div style={classes.details}>
                                <Typography variant="body2" color="textSecondary">{<PeopleAltRoundedIcon sx={{color:'blue'}}/>} {`${data.accomodation} PEOPLE` }</Typography>
                                <Typography variant="body2" color="textSecondary">{<EvStationRoundedIcon sx={{color:'blue'}}/>} {`${data.engine}`}</Typography>
                            </div>
                            <div style={classes.details}>
                                <Typography variant="body2" color="textSecondary">{<SpeedRoundedIcon sx={{color:'blue'}}/>} {`${data.Mylage} km/1-litre`}</Typography>
                                <Typography variant="body2" color="textSecondary">{<ShutterSpeedRoundedIcon sx={{color:'blue'}}/>} {`${data.type}`}</Typography>
                            </div>
                    </ButtonBase>
                      <CardActions sx={classes.cardActions}>

                          <Typography >{`$ ${data.price} / Month`}</Typography>
                          <Button size="small" color="primary" >
                            <FavoriteRoundedIcon/>
                          </Button>     

                          <Button   sx={{backgroundColor:'rgba(71, 198, 237, 0.8)', color :'#ffffff'}} >
                              Rent Now
                          </Button>

                    </CardActions>




                  </Card>
     )
};


export default CardComponent;


