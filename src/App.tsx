import { useEffect } from "react";


function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
       tg.close()
  }

  return (
    <>
      <h1>Hello world</h1>
    <button onClick={onClose}>Close</button>
    </>
  );
}

export default App;