import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

export default function Product({ product }) {
  const classes = useStyles();
  const handleAddtoCart = () => console.log("Add");

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="" title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton>
          <AddShoppingCart aria-label="Add to Cart" onClick={handleAddtoCart} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
