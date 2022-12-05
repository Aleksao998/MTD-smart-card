import React from "react";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Loading = () => (
   <div className="loadingPage">
    <RingLoader
    css={override}
    size={75}
    color={"#123abc"}
    
    />
   </div>
);

export default Loading;