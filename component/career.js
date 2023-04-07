import { Button, Grid, Typography } from '@mui/material';

export default function Career() {
  return (
    <div sx={{ flexGrow: 1 }}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 60,
              lineHeight: '90px',
              textAlign: 'center',
              marginTop: 36,
              '& span': {
                backgroundImage: 'linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              },
            }}
          >
            Your <span>career</span> is waiting ahead.<br/>
            click on the button and get <span>started</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)',
              color: 'white',
              borderRadius: 50,
              padding: '12px 48px',
              fontWeight: 600,
              fontSize: 20,
              marginTop: 10,
              marginBottom:4,
              '& span': {
                backgroundImage: 'linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              },
            }}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
