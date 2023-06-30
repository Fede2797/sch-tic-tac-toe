import { Board } from './Board';
import { BoardTest } from './BoardTest';

function App() {

  return (
    <div className="w-full min-h-screen bg-darkBlue flex flex-col">
      <header className="w-full flex flex-col justify-center items-center">
        {/* Title */}
        <div className="h-[80px] flex justify-center items-center">
          <h1 className="text-center font- text-[24px] font-bold text-white">Schrödinger Tic Tac Toe</h1>
        </div>
        {/* Divider */}
        <div className="flex w-full max-w-[375px] h-[1px] bg-grayLines"></div>
      </header>
      {/* <Board /> */}
      <BoardTest />
    </div>
  )
}

export default App
