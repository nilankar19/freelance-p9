import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dualimgcard from "./Dualimgcard";

const { Grid, Button, Typography, Container, Card } = require("@mui/material");

export default function Indtroduction() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="introduction-main">
      <div
        style={{
          marginTop: "10%",
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          justifyContent: "space-evenly",
        }}
      >
        {/* col - 1 */}
        <Container
          component={"div"}
          sx={{
            position: "relative",
            width: "80%",
            marginTop: isMobile ? "106%" : "",
          }}
        >
          <Button
            sx={{
              border: "2px solid #0AB2EA",
              borderRadius: "20px",
              paddingLeft: "16px",
              width: isMobile ? "79px" : "141px",
              height: isMobile ? "25px" : "36px",
              paddingRight: "10px",
              paddingBottom:'4px',
              display: "flex",
              flexDirection: ["row"],
              alignItems: ["center", "initial"],
            }}
          >
            <img
              src="Vector.png"
              alt="start"
              sx={{ marginBottom: ["10px", "0"] }}
            />
            <Typography
              component={"div"}
              sx={{
                marginLeft: ["0", "10px"],
                fontWeight: "300",
                fontSize: isMobile ? "10px" : "20px",
                textTransform: "none",
                // padding:'4px'
              }}
            >
              Trusted
            </Typography>
          </Button>

          <Typography
            variant="h2"
            component="div"
            sx={{ fontWeight: "600", fontSize: isMobile ? "44px" : "80px" }}
          >
            Data that's <br /> Professional.
          </Typography>
          <Typography variant="h6" component="div">
            If trading is a profession,then your data needs to be <br />{" "}
            professional too. Trading as profession presents Data Blaze.
          </Typography>

          <Typography component={"div"} sx={{ display: "flex" }}>
            <Button
              variant="outlined"
              sx={{
                // background: 'linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)',
                color: "black",
                borderRadius: "10px",
                padding: !isMobile ? "12px 48px" : "",
                width: isMobile ? "141px" : "220px",
                fontWeight: 600,
                fontSize: isMobile ? "10px" : "20px",
                marginTop: 10,
                marginBottom: 4,
                marginLeft: "2%",
                "& span": {
                  // backgroundImage: 'linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)',
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              LOG IN
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)",
                color: "white",
                borderRadius: "10px",
                padding: !isMobile ? "12px 48px" : "",
                width: isMobile ? "141px" : "220px",
                fontWeight: 600,
                fontSize: isMobile ? "10px" : "20px",
                marginTop: 10,
                marginBottom: 4,
                marginLeft: "3%",
                "& span": {
                  backgroundImage:
                    "linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              SIGN UP
            </Button>
          </Typography>
        </Container>
        {/* col - 2 */}

        <div component={"div"} className={isMobile ? "mduoimg" : "duoimg"}>
          <div style={{ position: "relative", top: "0", left: "0" }}>
            <Dualimgcard />
          </div>
        </div>
      </div>
    </div>
  );
}
