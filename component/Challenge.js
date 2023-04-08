// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { Box, Grid, Typography, Button } from '@mui/material';
// import Dualimgcard from "./Dualimgcard";

// export default function Challenge(params) {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Grid container spacing={2} sx={{ justifyContent: "space-evenly",marginTop:'14%' ,paddingTop: isMobile ? "20px" : "14%"}}>
//     <Grid item xs={6} sx={{ position: "relative" }}>
//       <Dualimgcard sx={{ width: "100%" }} />
//     </Grid>
//     <Grid item xs={6}>
//       <Box
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         height="100%"
//       >
//         <Typography
//           variant="h1"
//           sx={{
//             fontStyle: "normal",
//             fontWeight: 600,
//             fontSize: isMobile ? "40px" : "60px",
//             lineHeight: isMobile ? "56px" : "80px",
//             color: "rgba(27, 27, 27, 0.95)",
//             mb: isMobile ? "20px" : "40px",
//           }}
//         >
//           Finance can’t hold you back now.
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             mb: isMobile ? "20px" : "40px",
//           }}
//         >
//           If finance is your challenge then finance can’t challenge, if you
//           are a part of trading as profession. we are there to support you. To
//           know more about how we can help you.
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             width: "220px",
//             height: "62px",

//             background:
//               "linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)",
//             boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.25)",
//             borderRadius: "8px",
//             fontWeight: '600',
// fontSize: '20px',
// color:'white',
//             mt: isMobile ? "20px" : "40px",
//           }}
//         >
//           Connect Now
//         </Button>
//       </Box>
//     </Grid>
//   </Grid>
// );
// }
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Grid, Typography, Button } from "@mui/material";
import Dualimgcard from "./Dualimgcard";

export default function Challenge(params) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClick = (e) => {
    switch (e.target.value) {
      case "CTA":
        window.location.assign("/");
        break;
      case "Connect Now":
        window.location.assign("/");
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ marginTop: "14%" }}>
      <Grid container spacing={2}>
        {!isMobile && (
          <Grid item xs={6} sx={{ position: "relative" }}>
            <Dualimgcard sx={{ width: "100%" }} />
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
            sx={{
              width: isMobile ? "100%" : "80%",
              padding: isMobile ? "2%" : "",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontStyle: "normal",
                fontWeight: "600",

                fontSize: isMobile ? "32px" : "52px",
                lineHeight: isMobile ? "44px" : "1",
                color: "rgba(27, 27, 27, 0.95)",
                mb: isMobile ? "20px" : "40px",
                padding: isMobile ? "2%" : "",
              }}
            >
              {!isMobile ? (
                <span>
                  Finance can’t hold <span></span> you back now.'
                </span>
              ) : (
                <span>
                  We believe in <span style={{ color: "blue" }}>Doing</span>,
                  not in saying.
                </span>
              )}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: isMobile ? "20px" : "40px",
                fontSize: isMobile ? "12px" : "",
              }}
            >
              {!isMobile
                ? `If finance is your challenge then finance can’t challenge, if you
                 are a part of trading as profession. we are there to support you.
                  To know more about how we can help you.`
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna alias Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."}
            </Typography>
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                width: "200px",
                height: "50px",
                background: "linear-gradient(180deg, #0AB2EA 0%, #0489B5 115%)",
                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.25)",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "14px",
                color: "white",
                mt: isMobile ? "20px" : "40px",
              }}
            >
              {!isMobile ? "Connect Now" : "CTA"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
