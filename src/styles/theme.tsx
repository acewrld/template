import { createTheme } from "@mui/material/styles";
import { green, blueGrey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      "50": "#FFFCF8",
      "100": "#FBEEE6",
      "200": "#EEB389",
      "300": "#E99C66",
      "400": "#E48542",
      "500": "#DD6E20",
      "600": "#AC5619",
      "700": "#7B3D12",
      "800": "#4A250B",
      "900": "#190C04",
      alt: "#FF8019",
      main: "#DD6E20",
      accent: "#DDA333",
      contrastText: "#fff",
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontWeight: 800,
      color: "#333333",
      lineHeight: 1.125,
      fontSize: "clamp(2.5rem, -0.875rem + 8.333vw, 4rem)",
    },
    h2: {
      fontWeight: 700,
      color: "#333333",
      lineHeight: 1.125,
      fontSize: "clamp(2.2rem, -0.85rem + 8.333vw, 3rem)",
    },
    h3: {
      fontWeight: 700,
      color: "#333333",
      lineHeight: 1.125,
      fontSize: "clamp(1.75rem, -0.8rem + 7vw, 2.725rem)",
    },
    h4: {
      fontWeight: 600,
      color: "#333333",
    },
    h5: {
      fontWeight: 600,
      color: "#333333",
    },
    h6: {
      fontWeight: 500,
      color: "#333333",
    },
    p: {
      color: "#616161",
    },
    body1: {
      color: "#616161",
    },
    body2: {
      color: "#616161",
    },
    inherit: {
      color: "#616161",
    },

    a: {
      color: "#333333",
    },
    body: {
      fontWeight: 400,
      color: "#616161",
      fontFamily: ['"Roboto"', "sans-serif"].join(","),
    },
    fontFamily: ['"Roboto"', "sans-serif"].join(","),
  },
});