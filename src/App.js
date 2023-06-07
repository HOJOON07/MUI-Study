import { useEffect, useLayoutEffect, useState } from "react";
import MaterialUIExample from "./components/MaterialUIExample";
import NestedGrid from "./components/NestedGrid";

function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  // useEffect(() => {
  //   setAge(29);
  //   setName("김호준");
  // }, []);

  // useLayoutEffect(() => {
  //   setAge(29);
  //   setName("김호준");
  // }, []);
  return (
    <>
      <MaterialUIExample></MaterialUIExample>
      <NestedGrid></NestedGrid>
    </>
  );
}

export default App;
