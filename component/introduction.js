import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dualimgcard from "./Dualimgcard";

const { Grid, Button, Typography, Container, Card } = require("@mui/material");

export default function Indtroduction({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        position: "relative",
      }}
    >
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
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                fontSize: "1vw",
                padding: "0",
                px: "16px",
                color: "black",
                borderRadius: "20px",
                boxShadow: "none",
                textTransform: "none",
              }}
            >
              <img src="Vector.png" height={14} style={{}} />
              <span>Trusted</span>
            </Button>

            <img
              src="/greenarrow.png"
              alt="image description"
              style={{
                width: "100vw",
                paddingRight: "40%",
                position: "absolute",
                objectFit: "cover",
                top: "-54px",
                // top:isMobile?'40%':null,
                display: isMobile ? "block" : "none",
              }}
            ></img>
            <Typography
              variant="h2"
              component="div"
              sx={{ fontWeight: "600", fontSize: isMobile ? "44px" : "6vw" }}
            >
              Data that's <br /> Professional.
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: isMobile ? "2.6vw" : "1.6" }}
            >
              If trading is a profession,then your data needs to be <br />{" "}
              professional too. Trading as profession presents Data Blaze.
            </Typography>

            <Typography
              component={"div"}
              sx={{ display: "flex", marginTop: "12%" }}
            >
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontSize: "1.4vw",
                  fontWeight: "600",
                  padding: "0",
                  px: "16px",
                  color: "black",
                  borderRadius: "8px",
                  boxShadow: "none",
                  textTransform: "none",
                  marginLeft: "2%",
                }}
              >
                {/* <img src='Vector.png' height={14} style={{}}/> */}
                <span>LOG IN</span>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontSize: "1.4vw",
                  fontWeight: "600",
                  padding: "0",
                  px: "16px",
                  color: "black",
                  borderRadius: "8px",
                  boxShadow: "none",
                  textTransform: "none",
                  marginLeft: "2%",
                  background:
                    "linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)",
                  color: "black",
                }}
              >
                <span>SIGN UP</span>
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
      {children}
    </div>
  );
}
