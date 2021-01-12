import { useState } from "react";

type Props = {
  orientation?: "DOWN" | "LEFT" | "RIGHT" | "UP";
};

export default function Chevron(props: Props) {

  const getPathDefinition = () => {
    switch (props.orientation) {
      case 'LEFT':
        return "M15 19l-7-7 7-7"
      case 'RIGHT':
        return "M15 19l-7-7 7-7"
      case 'UP':
        return "M5 15l7-7 7 7"
      // DOWN is default
      default:
        return "M19 9l-7 7-7-7"
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={getPathDefinition()}
      />
    </svg>
  );
}
