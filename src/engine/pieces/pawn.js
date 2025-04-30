import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
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
        let availableMoves = [];
        let oneSquareInFront;
        let twoSquaresInFront;
        let startingRow;
        let lastRow;
        let diagonalLeftAndRightSquares;

        if (this.player === Player.WHITE) {
            oneSquareInFront = Square.at(location.row + 1, location.col);
            twoSquaresInFront = Square.at(location.row + 2, location.col);
            startingRow = 1;
            lastRow = 7;
            diagonalLeftAndRightSquares = new Array (Square.at(location.row + 1, location.col - 1), Square.at(location.row + 1, location.col + 1));
        }
        else {
            oneSquareInFront = Square.at(location.row - 1, location.col);
            twoSquaresInFront = Square.at(location.row - 2, location.col);
            startingRow = 6;
            lastRow = 0;
            diagonalLeftAndRightSquares = new Array (Square.at(location.row - 1, location.col - 1), Square.at(location.row - 1, location.col + 1));

        }

        if (location.row !== lastRow && !isSquareOccupied(oneSquareInFront)) {
            availableMoves.push(oneSquareInFront);
            if (location.row === startingRow && !isSquareOccupied(twoSquaresInFront)) {
                availableMoves.push(twoSquaresInFront);
            }

            diagonalLeftAndRightSquares.forEach((square) => {
                if (isSquareOccupied(square) && this.player !== board.getPiece(square).player && board.getPiece(square).constructor.name !== 'King') {
                    availableMoves.push(square);
                }
            })

        }
        return availableMoves;
    }
}
