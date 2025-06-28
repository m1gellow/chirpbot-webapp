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
    <button onClick={onClose}>Закрыть</button>
    </>
  )
}

export default App
