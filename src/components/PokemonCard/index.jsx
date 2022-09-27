import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";

export default function PokemonCard({ name, image, types, stats }) {
  const infoStatus = () => {
    var infoPokemon = [];
    for (var i = 0; i < 5; i++) {
      infoPokemon.push(
        " " + stats[i].stat.name + ": " + stats[i].base_stat + " || "
      );
    }
    return infoPokemon;
  };

  const typeHandler = () => {
    if (types[1]) {
      return "type: " + types[0].type.name + " | " + types[1].type.name;
    }
    return "type: " + types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={image} alt="" />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}
            </Typography>
          </Box>
          <Typography gutterBottom variant="h7" component="div">
            {infoStatus()}
          </Typography>
          {/*    <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More info(coming soon)
        </Button>
      </CardActions>
    </Card>
  );
}
