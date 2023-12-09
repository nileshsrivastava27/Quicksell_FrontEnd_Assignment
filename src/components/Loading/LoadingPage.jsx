import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Circles
        height="100"
        width="100"
        color="00000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />{" "}
      <span
        style={{
          color: "black",
          fontWeight: "bolder",
          letterSpacing: "3px",
        }}
      >
        Loading
      </span>
    </div>
  );
};

export default Loading;
