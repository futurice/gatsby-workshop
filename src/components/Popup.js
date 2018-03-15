import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0 0 0.75rem 0;
  }

  p {
    margin-bottom: 1rem;
  }
`;

export default ({ onClose }) => (
  <Overlay>
    <Popup>
      <h1>Test popup</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Button onClick={onClose}>Okay, close</Button>
    </Popup>
  </Overlay>
);
