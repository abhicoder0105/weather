import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >    •
  </Box>
);

export default function BasicCard(props) {
  console.log(props);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Weather
        </Typography>
        <Typography variant="h5" component="div">
          {props.data[0].title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.data[0].location_type}
        </Typography>
        <Typography variant="body2">
          LattLong: {props.data[0].latt_long}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={`/location/${props.data[0].woeid}`}>Weather Details</Link></Button>
      </CardActions>
    </Card>
  );
}
