import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        function isSquareOccupied(square) {
            if (board.getPiece(square)) {
                return true;
            }
            return false;
        }

        function checkIsPieceKing(square) {
            if (board.getPiece(square).constructor.name === 'King') {
                return true;
            }
            return false;
        }

        let location = board.findPiece(this);
        const boardSize = GameSettings.BOARD_SIZE;
        let availableMoves = [];
        let occupiedSquares = [];

        for (let i = 0; i < boardSize; i++) {
            if (i != location.col) {
                availableMoves.push(Square.at(location.row, i))
            }
            if (i != location.row) {
                availableMoves.push(Square.at(i, location.col))
            }
        }
        
        availableMoves.forEach((square) => {
            if (isSquareOccupied(square)) {
                occupiedSquares.push(square);
            }
        })

        let inaccessibleSquares = [];
        for (let i = 0; i < occupiedSquares.length; i++) {
            if (occupiedSquares[i].col !== location.col) {
                if (occupiedSquares[i].col > location.col) {
                    let j = occupiedSquares[i].col + 1;
                    while (j < boardSize) {
                        inaccessibleSquares.push(Square.at(location.row, j));
                        j++;
                    }
                } else {
                    let j = occupiedSquares[i].col - 1;
                    while (j >= 0) {
                        inaccessibleSquares.push(Square.at(location.row, j));
                        j--;
                    }
                }
            }

            if (occupiedSquares[i].row !== location.row) {
                if (occupiedSquares[i].row > location.row) {
                    let j = occupiedSquares[i].row + 1;
                    while (j < boardSize) {
                        inaccessibleSquares.push(Square.at(j, location.col));
                        j++;
                    }
                } else {
                    let j = occupiedSquares[i].row - 1;
                    while (j >= 0) {
                        inaccessibleSquares.push(Square.at(j, location.col));
                        j--;
                    }
                }
            }
        }
        
        for (let i = 0; i < availableMoves.length; i++) {
            for (let j = 0; j < inaccessibleSquares.length; j++) {
                if (inaccessibleSquares[j].col !== location.col) {
                    if (availableMoves[i].col === inaccessibleSquares[j].col) {
                        availableMoves.splice(i, 1);
                    }
                }

                if (inaccessibleSquares[j].row !== location.row) {
                    if (availableMoves[i].row === inaccessibleSquares[j].row) {
                        availableMoves.splice(i, 1);
                    }
                }
                
            }
            if (isSquareOccupied(availableMoves[i])) {
                if (checkIsPieceKing(availableMoves[i]) || this.player === board.getPiece(availableMoves[i]).player) {
                    availableMoves.splice(i, 1);
                }
            }
        }
        return availableMoves;
    }
}