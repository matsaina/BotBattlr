import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Botshow from "./components/Botshow";
import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
function App() {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [visibleCollection, setvisibleCollection] = useState([]);
  const [botSpecs, setBotSpecs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/bots')
      .then(response => response.json())
      .then(bots => {
        setRecords(bots);
        setFilteredRecords(bots);
      });
  }, []);


  const addToArmy = (bot) => {
    const newCollection = filteredRecords.filter(card => card.bot_class !== bot.bot_class);
    setFilteredRecords(newCollection);
    setBotArmy([...botArmy, bot]);
    setvisibleCollection(true);
  };


  const removeFromArmy = (bot) => {
    const newArmy = botArmy.filter(card => card.id !== bot.id);
    const armyClasses = newArmy.map(bot => bot.bot_class);
    const newCollection = records.filter(bot => !armyClasses.includes(bot.bot_class));
    setBotArmy(newArmy);
    setvisibleCollection(newCollection);
  };


  const removeBotPermanently = (bot) => {
    const newCollection = records.filter(card => card !== bot);
    const newFilteredCollection = filteredRecords.filter(card => card !== bot);
    const newArmy = botArmy.filter(card => card !== bot);
    setRecords(newCollection);
    setFilteredRecords(newFilteredCollection);
    setBotArmy(newArmy);

    fetch(`http://localhost:4000/bots/${bot.id}`, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(result => console.log(result));
  };

  
  const displayBotSpecs = (bot) => {
    setvisibleCollection(false);
    setBotSpecs(bot);
  };


  const displayBotCollection = () => {
    setvisibleCollection(true);
  };


  return (
    <>
      <Navbar />
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
           <Botshow records={records} action={removeFromArmy}   removeCard={removeBotPermanently} />
      
      
{visibleCollection
  ? <BotCollection
      records={filteredRecords}
      action={displayBotSpecs}
      removeCard={removeBotPermanently} />
      : <BotCollection
      bot={botSpecs}
      back={displayBotCollection}
      enlist={addToArmy} />
  }    
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
