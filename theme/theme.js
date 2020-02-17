const sizeScreen = {
  mobileS: "20em",
  mobileM: "24em", // 384
  mobileL: "26em", // 416
  tabletS: "33.125em", // 530
  tabletM: "38em", // 608
  tablet: "48em",
  laptop: "64em",
  laptopS: "80em", // 1200
  laptopL: "90.5em",
  desktop: "120.5em",
  desktopL: "160em"
};

const themes = {
  colors: {
    mainColor: "#0E0E0E",

    colorWhite: "#ffffff",

    colorBlue1: "#1B85E6",
    colorBlue2: "#115FA6",
    colorGray: "#969696",
    colorGray1: "#1E1E1E",
    colorGray2: "#A4A4A4",
    colorGray3: "#222222",
    colorGray4: "#E0E0E0",
    colorGray5: "#626262",
    colorGray6: "#717171",
    colorGray7: "#1C1C1C",
    colorGray8: "#292929"
  },
  device: {
    mobileS: `(max-width: ${sizeScreen.mobileS})`,
    mobileM: `(max-width: ${sizeScreen.mobileM})`,
    mobileL: `(max-width: ${sizeScreen.mobileL})`,
    tabletS: `(max-width: ${sizeScreen.tabletS})`,
    tabletM: `(max-width: ${sizeScreen.tabletM})`,

    tablet: `(max-width: ${sizeScreen.tablet})`,
    laptop: `(max-width: ${sizeScreen.laptop})`,
    laptopS: `(max-width: ${sizeScreen.laptopS})`,
    laptopL: `(max-width: ${sizeScreen.laptopL})`,
    desktop: `(max-width: ${sizeScreen.desktop})`,
    desktopL: `(max-width: ${sizeScreen.desktopl})`
  }
};

export { themes };
