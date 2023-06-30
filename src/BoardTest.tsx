import { useEffect, useState } from "react"

const X_PIECE  = "X"
const O_PIECE  = "O"
const X_GLITCH = "G"

export const BoardTest = () => {

    const [isGameOver, setIsGameOver] = useState(false);
    const [isGlitching, setIsGlitching] = useState(false);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState(X_PIECE);

    const  getRandomNumber = (a: number, b: number) => {
        return (Math.random() > 0.5) ? a : b 
    }

    const getRandomEmptyCell = (index: number) : number => {
        const emptyBoard: number[] = [];
        board.map(( cell, i ) => ( cell === null && i !== index ) && emptyBoard.push(i))
        
        if ( emptyBoard.length !== 0 ) {
            const randomIndex = Math.floor(Math.random() * emptyBoard.length);
            const randomElement = emptyBoard[randomIndex];
    
            return randomElement;
        }
        return index;
    }

    const resetMatch = () => {
        setIsGameOver(false)
        setCurrentPlayer(X_PIECE)
        setBoard(Array(9).fill(null))
    }

    const setPiece = ( index: number ) => {
        if ( currentPlayer === O_PIECE ) {
            const updatedBoard = [...board];
            updatedBoard[index] = currentPlayer;

            setBoard(updatedBoard);
            setCurrentPlayer( X_PIECE );

        } else {
            const emptyCell = getRandomEmptyCell(index);
            const updatedBoard = [...board];

            updatedBoard[index]     = X_GLITCH;
            updatedBoard[emptyCell] = X_GLITCH;
            
            setBoard(updatedBoard);
            setIsGlitching(true);

            
            setTimeout(() => {
                setIsGlitching(false);
                const updatedBoard = [...board];

                const removeCell = getRandomNumber(index, emptyCell);
                const keepCell = ( removeCell === index ? emptyCell : index )

                updatedBoard[removeCell] = null;
                updatedBoard[keepCell] = X_PIECE;
                setBoard(updatedBoard);
            } ,1500);
            
            setCurrentPlayer( O_PIECE );
        }
    }

    const declareWinner = () => {
        const winner = ( currentPlayer === O_PIECE ) ? X_PIECE : O_PIECE
        console.log("You win! ", winner)
        setIsGameOver(true)
    }

    const declareDraw = () => {
        console.log("The match ended in a draw")
        setIsGameOver(true)
    }

    const playPiece = ( index: number ) => {
        if (board[index] !== null || isGameOver || isGlitching || currentPlayer === O_PIECE) {
            return;
        }
        setPiece( index )
    }

    const evaluateGame = () => {
        
        if ( isGlitching ) return;

        if      ( board[0] !== null && board[0] === board[1] && board[1] === board[2] ) { declareWinner() }
        else if ( board[3] !== null && board[3] === board[4] && board[3] === board[5] ) { declareWinner() }
        else if ( board[6] !== null && board[6] === board[7] && board[6] === board[8] ) { declareWinner() }
        else if ( board[0] !== null && board[0] === board[3] && board[0] === board[6] ) { declareWinner() }
        else if ( board[1] !== null && board[1] === board[4] && board[1] === board[7] ) { declareWinner() }
        else if ( board[2] !== null && board[2] === board[5] && board[2] === board[8] ) { declareWinner() }
        else if ( board[0] !== null && board[0] === board[4] && board[0] === board[8] ) { declareWinner() }
        else if ( board[2] !== null && board[2] === board[4] && board[2] === board[6] ) { declareWinner() }
        else if ( board.find( cell => cell === null) === undefined ) { declareDraw() }
    }

    const gameEnded = () => {
        let response = false;
        if      ( board[0] !== null && board[0] === board[1] && board[1] === board[2] ) { response = true }
        else if ( board[3] !== null && board[3] === board[4] && board[3] === board[5] ) { response = true }
        else if ( board[6] !== null && board[6] === board[7] && board[6] === board[8] ) { response = true }
        else if ( board[0] !== null && board[0] === board[3] && board[0] === board[6] ) { response = true }
        else if ( board[1] !== null && board[1] === board[4] && board[1] === board[7] ) { response = true }
        else if ( board[2] !== null && board[2] === board[5] && board[2] === board[8] ) { response = true }
        else if ( board[0] !== null && board[0] === board[4] && board[0] === board[8] ) { response = true }
        else if ( board[2] !== null && board[2] === board[4] && board[2] === board[6] ) { response = true }
        else if ( board.find( cell => cell === null) === undefined ) { response = true }

        return response;
    }

    // Game evaluation
    useEffect(() => {
      !isGameOver && evaluateGame()
    }, [board])

    const pcMove = () => {
        const emptyCell = getRandomEmptyCell( -1 );
        const updatedBoard = [...board];
        updatedBoard[emptyCell] = O_PIECE;

        setBoard(updatedBoard);
        setCurrentPlayer( X_PIECE );
    }

    // Computer behaviour
    useEffect(() => {
      if ( currentPlayer !== O_PIECE || isGameOver || isGlitching || gameEnded() ) {
        return;
      }

      const timer = setTimeout(() => {
        pcMove();
      }, 1000);

      return () => {
        clearTimeout(timer);
      }

    }, [board])
    
    

    return (
        <main className="flex flex-col items-center">
            {/* Tic Tac Toe Board */}
            <div className="w-[60vw] h-[60vw] max-h-[60vh] mt-14 flex justify-center">
                <div className="w-full max-w-[60vh] h-full max-h-[60vh] grid grid-cols-3 grid-rows-3 gap-[5px] bg-grayLines">
                    {
                        board.map( (cell, index) => (
                            <div key={index} onClick={ () => playPiece(index) } className="w-full h-full bg-darkBlue">
                                {cell === X_PIECE  && <img src="x-bold.svg"></img>}
                                {cell === O_PIECE  && <img src="o-bold.svg"></img>}
                                {cell === X_GLITCH && <img className="animate-spin" src="x-bold.svg"></img>}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mt-14">
                <button onClick={ () => resetMatch() } className="w-[150px] h-[50px] rounded-[5px] bg-darkBlue border-[1px] text-[16px] font-medium text-white hover:bg-white hover:text-[#15202B] transition-all">
                    Reset
                </button>
            </div>
        </main>
    )
}
