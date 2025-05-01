import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Queen extends Piece {
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
        //lateral moves 
        let row = location.row;
        let col = location.col + 1;
        while (col < boardSize) {
            availableMoves.push(Square.at(row, col));
            col++;
        }
        col = location.col - 1;
        while (col >= 0) {
            availableMoves.push(Square.at(row, col));
            col--;
        }
        col = location.col;
        row = location.row + 1;
        while (row < boardSize) {
            availableMoves.push(Square.at(row, col));
            row++;
        }
        row = location.row - 1;
        while (row >= 0) {
            availableMoves.push(Square.at(row, col));
            row--;
        }
        //diagonal moves
        row = location.row + 1;
        col = location.col + 1;
        while (row < boardSize && col < boardSize) {
            availableMoves.push(Square.at(row, col));
            row++;
            col++;
        }
        row = location.row + 1;
        col = location.col - 1;
        while (col >= 0 && row < boardSize) {
            availableMoves.push(Square.at(row, col));
            row++;
            col--;
        }
        row = location.row - 1;
        col = location.col + 1;
        while (row >= 0 && col < boardSize) {
            availableMoves.push(Square.at(row, col));
            row--;
            col++;
        }
        row = location.row - 1;
        col = location.col - 1;
        while (row >= 0 && col >= 0) {
            availableMoves.push(Square.at(row, col));
            row--;
            col--;
        }
        console.log(availableMoves)
        return availableMoves;
    }
}
