import React from "react";
import Carousel from "react-elastic-carousel";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
export default function SingleLineGridList() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sectionDesktop}>
        <Carousel itemsToShow={5}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
        </Carousel>
      </div>
      <div className={classes.sectionMobile}>
        <Carousel itemsToShow={2}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
        </Carousel>
      </div>
    </div>
  );
}
