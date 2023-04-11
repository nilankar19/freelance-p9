import { Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../public/Arrow.svg";

export default function Career() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div sx={{ flexGrow: 1 ,overflowX:'hidden'}}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: isMobile ? "20px" : "60px",
              lineHeight: isMobile ? "40px" : "90px",
              textAlign: "center",
              marginTop: isMobile ? "28px" : "160px",
              "& span": {
                backgroundImage:
                  "linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            Your <span>career</span> is waiting ahead.
            <br />
            click on the button and get <span>started</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)",
              color: "white",
              borderRadius: isMobile ? "10px" : "50px",
              padding: "12px 48px",
              fontWeight: 600,
              fontSize: 20,
              marginTop: isMobile ? "10px" : "10px",
              marginBottom: 4,
              "& span": {
                backgroundImage:
                  "linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            Get Started{" "}
            <img src="Arrow.svg" alt="arrow" style={{ paddingLeft: "10px" }} />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
