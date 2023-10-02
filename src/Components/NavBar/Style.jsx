import { makeStyles } from 'mui-styles-hook';



export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius:'20px',  
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color:'#333333'
  },
  search: {
    display: 'flex',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fffff',
    paddingLeft: theme.spacing(1),
    borderRadius:'1px solid #000000'
  },
  searchIcon: {
    color: '#888', // Greyish color
    marginRight: theme.spacing(1),
  },
  links: {
    display: 'flex',
    gap: theme.spacing(2),
  },
}));