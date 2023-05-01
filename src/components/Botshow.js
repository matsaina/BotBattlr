import React from "react";
import BotCard from "./BotCard";

function Botshow({ records, action, removecard }) {
  return (
    <>
      {records.map((record) => {
        return (
          <>
            <BotCard record={record} action={action} removecard={removecard} />
          </>
        );
      })}
    </>
  );
}

export default Botshow;
