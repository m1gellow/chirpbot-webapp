import { useEffect } from "react";

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])
    const onClose = () => {
      tg.close()
    }

  return (
    <>
    <h1>Hello world</h1>
    </>
  )
}

export default App
