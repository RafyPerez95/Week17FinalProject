import React from "react";
import ConsoleCard from "./ConsoleCard";

export default function ConsoleList({ consoles, onDelete }) {
  return (
    <>
      {consoles.map((c) => (
        <ConsoleCard key={c.id} console={c} onDelete={onDelete} />
      ))}
    </>
  );
}
