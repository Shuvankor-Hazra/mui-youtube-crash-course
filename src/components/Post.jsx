import { Favorite, FavoriteBorder } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';

const Post = () => {
  return (
    <Card sx={{mb:"40px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shuvankor Hazra"
        subheader="October 21, 2025"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://i.ibb.co.com/JqwttqZ/sci-fi.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Monotonectally innovate accurate materials whereas client-based alignments. Credibly leverage existing plug-and-play mindshare through prospective content. Distinctively architect next-generation imperatives before cooperative results. Holisticly reconceptualize superior applications whereas market-driven scenarios. Dynamically.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<Favorite sx={{color:"red"}}/>} checkedIcon={<FavoriteBorder />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{color:"red"}}/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post