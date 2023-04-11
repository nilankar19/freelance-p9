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

      <div style={{
        // height: isMobile ? '100%' : '290px',
        marginLeft:'2%',
        marginTop:isMobile?'4 %':0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'flex-end',
        background: 'linear-gradient(98.05deg, #0AB2EA 5.59%, #6F0478 296.05%)',
        borderRadius: '8px',
        padding:'2%',
        paddingTop:'6%'



        // width: isMobile ? '100%' : '290px',


      }}>
        <div style={{ display:'flex',flexDirection:'column',justifyContent:'end'}}>
          <div  style={{
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize:isMobile?'5vw':'2vw',
            color: '#FFFFFF',


            // marginTop: '20%'
          }}>
            {card.title}
          </div>
          <div style={{


            color: '#FFFFFF',
            textAlign: 'start',
            // marginTop: isMobile ? '10px' : '20px'
            fontSize:isMobile?'2vw':'1.2vw'
          }}>
            {card.content}
          </div>
        </div>
      </div>

  ));
  return <div style={{display:'flex',flexDirection: isMobile?'column':'row', padding:'3%'}}>{cards}</div>
};

const FeaturesCardList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Cards isMobile={isMobile}/>
  );
};

export default FeaturesCardList;
