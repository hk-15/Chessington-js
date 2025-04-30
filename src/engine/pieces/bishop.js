import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
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

        let location = board.findPiece(this);
        const boardSize = GameSettings.BOARD_SIZE;
        const availableMoves = [];
        
        let i = location.row + 1;
        let j = location.col + 1;
        while (j >= 0 && j < boardSize) {
            availableMoves.push(Square.at(i, j));
            i++;
            j++;
        }
        i = location.row + 1;
        j = location.col - 1;
        while (j >= 0 && j < boardSize) {
            availableMoves.push(Square.at(i, j));
            i++;
            j--;
        }
        i = location.row - 1;
        j = location.col + 1;
        while (i >= 0 && i < boardSize) {
            availableMoves.push(Square.at(i, j));
            i--;
            j++;
        }
        i = location.row - 1;
        j = location.col - 1;
        while (i >= 0 && i < boardSize) {
            availableMoves.push(Square.at(i, j));
            i--;
            j--;
        }
        
        for (let i = 0; i < availableMoves.length; i++) {
            console.log(isSquareOccupied(availableMoves[i]))
            if (isSquareOccupied(availableMoves[i])) {
                if (availableMoves[i].col > location.col && availableMoves[i].row > location.row) {
                    let loopCol = availableMoves[i].col + 1;
                    let loopRow = availableMoves[i].row + 1;
                    while (loopCol < boardSize && loopRow < boardSize) {
                        availableMoves.splice(i, 1);
                        loopCol++;
                        loopRow++;
                    }
                }  
            }
        }
        

        return availableMoves;
    }
}
