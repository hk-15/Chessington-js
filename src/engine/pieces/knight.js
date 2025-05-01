import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const availableMoves = [];
        let blockingPiece;

        let row = location.row + 2;
        let col = location.col + 1;
        if (row < 8 && col < 8) {
            availableMoves.push(Square.at(row, col));
        }
        col -= 2;
        if (col >= 0) {
            availableMoves.push(Square.at(row, col));
        }
        row--;
        col--;
        if (col >= 0) {
            availableMoves.push(Square.at(row, col));
        }
        col += 4;
        if (col < 8) {
            availableMoves.push(Square.at(row, col));
        }
        row -= 2;
        if (row >= 0) {
            availableMoves.push(Square.at(row, col));
        }
        col -= 4;
        if (col >= 0) {
            availableMoves.push(Square.at(row, col));
        }
        row--;
        col++;
        if (row >= 0) {
            availableMoves.push(Square.at(row, col));
        }
        col += 2;
        if (col < 8) {
            availableMoves.push(Square.at(row, col));
        }
        return availableMoves;
    }
}
