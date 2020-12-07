import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import useStyles from "./styles";

export default function Products() {
  const products = [
    { id: 1, name: "Iphone", description: "...", price: 100 },
    { id: 2, name: "Watch", description: "...", price: 50 },
    { id: 3, name: "Macbook", description: "...", price: 200 },
  ];
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
