import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={400}>

        {/* Online Friends */}
        <Typography variant="h6" fontWeight={100} mb={1}>
          Online Friends
        </Typography>
        <AvatarGroup max={9}>
          <Avatar
            alt="Rems Sharp"
            src="https://i.ibb.co.com/JqwttqZ/sci-fi.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i.ibb.co.com/SJ7GjQn/art1.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://i.ibb.co.com/r5889cS/real-es1.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://i.ibb.co.com/hL9xPCq/thriller.jpg"
          />
          <Avatar
            alt="Rems Sharp"
          // src="https://i.ibb.co.com/JqwttqZ/sci-fi.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.ibb.co.com/H4gH2VR/blog-1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i.ibb.co.com/SJ7GjQn/art1.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://i.ibb.co.com/r5889cS/real-es1.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://i.ibb.co.com/hL9xPCq/thriller.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.ibb.co.com/H4gH2VR/blog-1.jpg"
          />
        </AvatarGroup>

        {/* Popular Photos */}
        <Typography variant="h6" fontWeight={100} my={1}>
          <Divider variant="fullWidth" />
          Popular Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://i.ibb.co.com/H4gH2VR/blog-1.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.ibb.co.com/hL9xPCq/thriller.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.ibb.co.com/r5889cS/real-es1.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.ibb.co.com/SJ7GjQn/art1.jpg"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://i.ibb.co.com/JqwttqZ/sci-fi.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.ibb.co.com/H4gH2VR/blog-1.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        {/*  Latest Conversations */}
        <Typography variant="h6" fontWeight={100} mt={1}>
          <Divider variant="fullWidth" />
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Rems Sharp" src="https://i.ibb.co.com/H4gH2VR/blog-1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://i.ibb.co.com/JqwttqZ/sci-fi.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    To Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/hL9xPCq/thriller.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Our Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
