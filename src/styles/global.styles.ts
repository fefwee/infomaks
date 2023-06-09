/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontSize: "16px",
    fontWeight: "500px",
    lineHeight: "18px",
    fontFamily: "Inter",
    h1: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "58px",
    },
    h2: {
      fontSize: "36px",
      fontWeight: "700",
      lineHeight: "42px",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "500",
      lineHeight: "28px",
    },
    h4: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "18px",
    },
    p: {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "16px",
      color:'#595959'
    },
    img:{
      maxWidth:'100%'
    }
  } as const,
  "html, body, #root": {
    height: "100%",
  },
};
