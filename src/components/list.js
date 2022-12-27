import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import { ListItemText } from "@mui/material";

export default function InteractiveList() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <center>
        <h1>Event Information</h1>
      </center>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemText>Event Name:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Event Description:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Event Venue:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Event Date:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Event Time:</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
