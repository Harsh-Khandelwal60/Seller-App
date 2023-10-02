import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './style.css';

const CardComponent = () => {
  return (
    <Card className="custom-card">
      <CardContent>
        <Typography variant="h5" component="div">
          Custom Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Some description text about the card.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
