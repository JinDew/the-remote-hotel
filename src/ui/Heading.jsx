import { css, styled } from "styled-components";
// const xNum = 6;
// const test = `
//   text-align: center;
//   ${xNum > 4 ? "background-color: green" : "background-color: pink"};
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 35px;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 30px;
      font-weight: 500;
    `}
${(props) => props.as === "h3" && "font-size: 20px; font-weight: 400; "}
${(props) =>
    props.as === "h4" &&
    "font-size: 30px; font-weight: 600; text-align: center "}
`;

export default Heading;
