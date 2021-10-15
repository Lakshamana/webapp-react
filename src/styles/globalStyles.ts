export const breakpoints = {
	ssm: "320px",
	sm: "425px",
	md: "768px",
	lg: "1024px",
	xl: "1440px"
}

export const breakpointKeys = {
	"mobile-small": "ssm",
	"mobile-large": "sm",
	tablet: "md",
	"desktop-small": "lg",
	desktop: "xl"
}

export const fonts = {
	body: "Roboto Regular, sans-serif",
	regular: "Roboto Regular, sans-serif",
	medium: "Roboto Medium, sans-serif",
	bold: "Roboto Bold, sans-serif",
	black: "Roboto Black, sans-serif"
}

export const globalStyles = `
@font-face {
  font-family: 'Roboto Regular';
  font-style: normal;
  font-weight: 500;
  src: url('https://fonts.googleapis.com/css2?family=Roboto&display=swap') format('truetype');
}
@font-face {
  font-family: 'Roboto Medium';
  font-style: normal;
  font-weight: 500;
  src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap') format('truetype');
}
@font-face {
  font-family: 'Roboto Bold';
  font-style: normal;
  font-weight: 500;
  src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap') format('truetype');
}
@font-face {
  font-family: 'Roboto Black';
  font-style: normal;
  font-weight: 500;
  src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap') format('truetype');
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

table {
  border-collapse: separate;
  border-spacing: 0 10px;
  margin-top: -10px; /* correct offset on first border spacing if desired */
}

td {
  border: solid 1px;
  border-style: solid none;
  padding: 10px;
}
td:first-child {
  border-left-style: solid;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
td:last-child {
  border-right-style: solid;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
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

`
