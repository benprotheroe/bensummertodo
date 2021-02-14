import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", []);
  const [inputText, setInputText] = useState("");

  function handleSubmitClick(event) {
    event.preventDefault();
    setActivities([...activities, inputText]);
    setInputText("");
  }
  return (
    <>
      <h1>Things we want to do this summer?</h1>
      <form onSubmit={handleSubmitClick}>
        <input
          type="text"
          name={inputText}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
      <ul>
        {activities.map((item, index) => (
          <li key={index} value={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
