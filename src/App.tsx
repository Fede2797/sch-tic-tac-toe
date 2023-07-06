import { Board } from './Board';

function App() {

  return (
    <div className="w-full min-h-screen bg-darkBlue flex flex-col">
      <header className="w-full flex flex-col justify-center items-center">
        {/* Title */}
        <div className="h-[60px] flex justify-center items-center md:h-[100px] xl:h-[150px]">
          <h1 className="text-center text-[24px] font-bold text-white md:text-[36px] lg:text-[42px] xl:text-[54px]">Schrödinger Tic Tac Toe</h1>
        </div>
        {/* Divider */}
        <div className="flex w-full max-w-[375px] h-[1px] bg-grayLines md:max-w-[600px] xl:max-w-[800px]"></div>
      </header>
      {/* <Board /> */}
      <Board />
    </div>
  )
}

export default App
