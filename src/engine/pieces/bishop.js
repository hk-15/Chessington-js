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
        
        let row = location.row + 1;
        let col = location.col + 1;
        while (row < boardSize && col < boardSize) {
            if (isSquareOccupied(Square.at(row, col))) {
                break;
            }
            availableMoves.push(Square.at(row, col));
            row++;
            col++;
        }
        row = location.row + 1;
        col = location.col - 1;
        while (col >= 0 && row < boardSize) {
            if (isSquareOccupied(Square.at(row, col))) {
                break;
            }
            availableMoves.push(Square.at(row, col));
            row++;
            col--;
        }
        row = location.row - 1;
        col = location.col + 1;
        while (row >= 0 && col < boardSize) {
            if (isSquareOccupied(Square.at(row, col))) {
                break;
            }
            availableMoves.push(Square.at(row, col));
            row--;
            col++;
        }
        row = location.row - 1;
        col = location.col - 1;
        while (row >= 0 && col >= 0) {
            if (isSquareOccupied(Square.at(row, col))) {
                break;
            }
            availableMoves.push(Square.at(row, col));
            row--;
            col--;
        }
    
        return availableMoves;
    }
}
