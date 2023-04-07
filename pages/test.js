import { Button, Container, Typography } from "@mui/material";
import '../public/DashboardD.png'

export default function Indtroduction() {
  return (
    <Container
      maxWidth="md"
      sx={{ border: "1px solid green", padding: "10px", width: "100%" }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* col - 1 */}



        {/* col - 2 */}
        <Container
          component={"div"}
          sx={{
            width: "50%",
            padding: "10px",
            border: "1px solid red",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
            "& .imgContainer": {
              position: "relative",
              width: "100%",
              height: "100%",
            },
            "& .img1": {
              // position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "60%",
              objectFit: "cover",
              zIndex: 1,
            },
            "& .img2": {
              // position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              objectFit: "cover",

              zIndex: 2,
            },
          }}
        >
          <div className="imgContainer">
            <img
              className="img1"
              src="DashboardD.png"
              alt="img1"
            />
            <img
              className="img2"
              src="DashboardL.png"
              alt="img2"
            />
          </div>
        </Container>
      </div>
    </Container>
  );
}


