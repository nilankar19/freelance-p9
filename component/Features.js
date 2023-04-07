import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const cardsData = [
  { title: 'Superior Data', content: 'Cover all data points meant for professional traders and investors in the market.'},
  { title: 'Robust Performance', content: 'Offers high frequency data for the market with ultra low latency.' },
  { title: 'Practical to use', content: 'Data points available at a glance, no strangle and signal based struggle.' },
  { title: 'Performance benchmark', content: 'Offers you live data from exchange along with charts from Trading View directly.' },
];

const Cards = ({ isMobile }) => {
  const cards = cardsData.map((card, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <Card sx={{
        height: isMobile ? '100%' : '290px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        background: 'linear-gradient(98.05deg, #0AB2EA 5.59%, #6F0478 296.05%)',
        borderRadius: '8px',
        width: isMobile ? '100%' : '290px',
        margin: 'auto'
      }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '28px',
            lineHeight: '42px',
            color: '#FFFFFF',
            width: '100%',
            textAlign: 'start',
            marginTop: isMobile ? '20px' : '40%'
          }}>
            {card.title}
          </Typography>
          <Typography variant="body1" component="p" sx={{
            width: '100%',
            height: '72px',
            color: '#FFFFFF',
            textAlign: 'start',
            marginTop: isMobile ? '10px' : '20px'
          }}>
            {card.content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
  return cards;
};

const FeaturesCardList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={2} sx={{ marginTop: "10%", paddingLeft: isMobile ? '5%' : '3%', paddingRight: isMobile ? '5%' : '0' }}>
      <Cards isMobile={isMobile} />
    </Grid>
  );
};

export default FeaturesCardList;
