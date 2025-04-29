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
        if (this.player === Player.WHITE) {
            oneSquareInFront = Square.at(location.row + 1, location.col);
            twoSquaresInFront = Square.at(location.row + 2, location.col);
            if(board.getPiece(oneSquareInFront)) {
                return [];
            }
            if (board.getPiece(twoSquaresInFront) || location.row !== 1) {
                return new Array (oneSquareInFront)
            } else {
                return new Array (oneSquareInFront, twoSquaresInFront)
            }
        }
        else {
            oneSquareInFront = Square.at(location.row - 1, location.col);
            twoSquaresInFront = Square.at(location.row - 2, location.col);
            if(board.getPiece(oneSquareInFront)) {
                return [];
            }
            if (board.getPiece(twoSquaresInFront) || location.row !== 6) {
                return new Array (oneSquareInFront)
            } else {
                return new Array (oneSquareInFront, twoSquaresInFront)
            }
        }
    }
}