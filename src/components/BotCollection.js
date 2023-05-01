import React from 'react'
import BotCard from './BotCard';

function BotCollection({ records, action, removecard }) {
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

export default BotCollection