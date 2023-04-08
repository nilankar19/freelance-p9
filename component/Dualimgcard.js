import { Box, Card, CardMedia, Container } from "@mui/material";
import "../public/DashboardD.png";
import "../public/DashboardL.png";
// export default function Dualimgcard() {
//   return (
//     <Container sx={{position:'relative',display:"flex"}} >

//       <Box component={"img"} src="DashboardD.png" alt="DashboardD" className="cardimg"></Box>
//       <Box component={"img"} src="DashboardL.png" alt="DashboardD" className="cardimg"></Box>

//     </Container>
//   );
// }

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Dualimgcard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ position: "absolute", top: "10%", right: "10%" }}>
      <img
        src="DashboardL.png"
        alt="a"
        className={isMobile ? "mimglight1" : "imglight1"}
      />
      <img
        src="DashboardD.png"
        alt="w"
        className={isMobile ? "mimgdark2" : "imgdark2"}
      />
    </div>
  );
}
