import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let oneSquareInFront;
        let twoSquaresInFront;
        let startingRow;
        if (this.player === Player.WHITE) {
            oneSquareInFront = Square.at(location.row + 1, location.col);
            twoSquaresInFront = Square.at(location.row + 2, location.col);
            startingRow = 1;
        }
        else {
            oneSquareInFront = Square.at(location.row - 1, location.col);
            twoSquaresInFront = Square.at(location.row - 2, location.col);
            startingRow = 6;
        }
        
        if(board.getPiece(oneSquareInFront)) {
            return new Array(0);
        } else if (board.getPiece(twoSquaresInFront) || location.row !== startingRow) {
            return new Array (oneSquareInFront);
        } else {
            return new Array (oneSquareInFront, twoSquaresInFront);
        }
    }
}
