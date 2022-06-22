import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./styles";

const Spinner = () => {
  return (
    <Container>
      <div className="position-relative" style={{
            position: "absolute",
            left: "200px",
            top: "100px",
            fontSize: "20px",
          }}>
        <p
          className="blink"
          style={{
            position: "absolute",
            left: "160px",
            top: "40px",
            fontSize: "40px",
          }}
        >
          Loading...
        </p>
        <FontAwesomeIcon
          className="spinner"
          spin
          color="lightblue"
          size="10x"
          icon={faSpinner}
        />
      </div>
    </Container>
  );
};
export default Spinner;
