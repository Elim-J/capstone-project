import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LongMenu from './Menu'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  
    <Card sx={{ marginBottom: 10, marginLeft: 5, marginRight: 5, backgroundColor: '#2f3042', border: '1px solid #0076bf' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: '#0277fb' }} aria-label="board">
            R
          </Avatar>
        }
        action={
          <LongMenu id={props.key}/>
        }
        title={
          <Typography sx={{color: 'white', textTransform: 'uppercase'}} variant="body2" color="text.secondary">
            {props.title}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="350"
        image= {props.image}
      />
    
      <CardActions disableSpacing>
        <IconButton sx={{color: 'white', width: 50}} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton sx={{color: 'white', width: 50}} aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          sx={{color: 'white', width: 50}}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent> 
          <Typography sx={{color: 'white'}} variant="body2" color="text.secondary">
          {`MEMBERS: ${props.members}` }
          </Typography>
          <br/>
          <Typography sx={{color: 'white'}} variant="body2" color="text.secondary">
              {`DESCRIPTION: ${props.description}`}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}