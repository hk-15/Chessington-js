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
        let lastRow;
        if (this.player === Player.WHITE) {
            oneSquareInFront = Square.at(location.row + 1, location.col);
            twoSquaresInFront = Square.at(location.row + 2, location.col);
            startingRow = 1;
            lastRow = 7;
        }
        else {
            oneSquareInFront = Square.at(location.row - 1, location.col);
            twoSquaresInFront = Square.at(location.row - 2, location.col);
            startingRow = 6;
            lastRow = 0;
        }

        if(location.row === lastRow || board.getPiece(oneSquareInFront)) {
            return new Array(0);
        }
        if (location.row !== startingRow || board.getPiece(twoSquaresInFront) ) {
            return new Array(oneSquareInFront);
        } else {
            return new Array(oneSquareInFront, twoSquaresInFront);
        }
    }
}
