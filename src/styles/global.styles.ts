/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
  "*,p": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontSize:'16px',
    fontWeight:'500px',
    lineHeight:'18px'
  } as const,
  "html, body, #root": {
    height: "100%",
  },
};
