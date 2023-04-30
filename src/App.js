import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Botshow from "./components/Botshow";
import { useEffect, useState } from "react";
function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then((res) => res.json())
      .then((data) => setRecords(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <Botshow records={records} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
