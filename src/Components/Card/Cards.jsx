import React from "react";
import CardComponent from "./Card/Card";
import { Grid } from "@mui/material";

const Cards = () => {
    return (
        <Grid container spacing={3}>
        {/* {cardData.map((data) => (
          <Grid item xs={4} key={data.id}>
            <CardComponent title={data.title} description={data.description} />
          </Grid>
        ))} */}
      </Grid>
    )
}

export default Cards;
