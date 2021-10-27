export const breakpoints = {
  ssm: "320px",
  sm: "425px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
};

export const breakpointKeys = {
  "mobile-small": "ssm",
  "mobile-large": "sm",
  tablet: "md",
  "desktop-small": "lg",
  desktop: "xl",
};

export const fonts = {
  light: "Helvetica Neue Light",
  body: "Helvetica Neue",
  regular: "Helvetica Neue",
  medium: "Helvetica Neue",
  bold: "Helvetica Neue Bold",
  black: "Helvetica Neue Black",
};

export const globalStyles = `

@font-face {
  font-family: 'Helvetica Neue Light';
  font-style: normal;
  font-weight: 500;
  src: local('Helvetica Neue Light'), url('./assets/fonts/HelveticaNeueUltraLight.ttf') format('truetype');
}

@font-face {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  src: local('Helvetica Neue'), url('./assets/fonts/HelveticaNeueMedium.ttf') format('truetype');
}

@font-face {
  font-family: 'Helvetica Neue Bold';
  font-style: normal;
  font-weight: 700;
  src: local('Helvetica Neue Bold'), url('./assets/fonts/HelveticaNeueMedium.ttf') format('truetype');
}

@font-face {
  font-family: 'Helvetica Neue Black';
  font-style: normal;
  font-weight: 900;
  src: local('Helvetica Neue Black'), url('./assets/fonts/HelveticaNeueMedium.ttf') format('truetype');
}


html {
  height: 100%;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  width: 100%;
  overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

button:focus,
button:active,
input:focus,
input:active,
div:focus,
div:active,
select:focus,
select:active {
  -moz-outline-style: none;
  outline: none;
  outline: 0;
}

i {
  cursor: pointer;
}

* {
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  border: 0;
  margin: 0;
  outline: 0;
}

#root {
  height: 100%;
}
body::before {
  content: 'mobile-small';
  display: none;
}
@media (max-width: ${breakpoints.ssm}) {
  body::before {
    content: 'mobile-small';
  }
}
@media (min-width: ${breakpoints.sm}) {
  body::before {
    content: 'mobile-large';
  }
}
@media (min-width: ${breakpoints.md}) {
  body::before {
    content: 'tablet';
  }
}
@media (min-width: ${breakpoints.lg}) {
  body::before {
    content: 'desktop-small';
  }
}
@media (min-width: ${breakpoints.xl}) {
  body::before {
    content: 'desktop';
  }
}

::-webkit-scrollbar {
  width: 0.4rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: #20242A;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9E9F9D;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}


::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

input:-webkit-autofill {
  color: #20242A !important;
}

.chakra-popover__content {
  box-shadow: none !important;
  border: none !important;
}

.chakra-popover__body {
  padding: 0 !important;
}

.chakra-radio-group {
  display: flex;
}

.chakra-radio {
  cursor: pointer;
}

.chakra-checkbox__control, .chakra-radio__control {
  box-shadow: none !important;
}


.vjs-chromecast-button {
  display: block !important;
}

.vjs-chromecast-button .vjs-icon-placeholder {
  width: 50% !important;
  height: 50% !important;
}

`
