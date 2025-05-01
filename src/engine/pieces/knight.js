import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        function validateSquare(square) {
            if (square.row >= 0 && square.row < 8 && square.col >= 0 && square.col < 8) {
                return true;
            }
            return false;
        }
        function generateMoves(square) {
            if (validateSquare(square)) {
                availableMoves.push(square)
            }
        }
        let location = board.findPiece(this);
        const availableMoves = [];

        let row = location.row + 2;
        let col = location.col + 1;
        generateMoves(Square.at(row, col))
        col -= 2;
        generateMoves(Square.at(row, col))
        row--;
        col--;
        generateMoves(Square.at(row, col))
        col += 4;
        generateMoves(Square.at(row, col))
        row -= 2;
        generateMoves(Square.at(row, col))
        col -= 4;
        generateMoves(Square.at(row, col))
        row--;
        col++;
        generateMoves(Square.at(row, col))
        col += 2;
        generateMoves(Square.at(row, col))
        return availableMoves;
    }
}
