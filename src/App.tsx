import { Board } from './Board';

function App() {

  return (
    <div className="w-full h-full min-h-screen bg-darkBlue flex flex-col">
      {/* <Confetti /> */}
      <header className="w-full flex flex-col justify-center items-center">
        {/* Title */}
        <div className="h-[60px] flex justify-center items-center ">
          <h1 className="text-center text-[24px] font-bold text-white ">Schrödinger Tic Tac Toe</h1>
        </div>
        {/* Divider */}
        <div className="flex w-full max-w-[375px] h-[1px] bg-grayLines md:max-w-[600px]"></div>
      </header>
      {/* <Board /> */}
      <Board />
    </div>
  )
}

export default App
