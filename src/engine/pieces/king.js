import Square from '../square';
import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const availableMoves = [];

        let row = location.row;
        let col = location.col;
        let blockingPiece;

        if (col !== 7) {
            col++;
            blockingPiece = board.getPiece(Square.at(row, col));
            if (!blockingPiece || blockingPiece.player !== this.player) {
                availableMoves.push(Square.at(row, col));
            }
        }
        if (col !== 0) {
            col -= 2;
            blockingPiece = board.getPiece(Square.at(row, col));
            if (!blockingPiece || blockingPiece.player !== this.player) {
                availableMoves.push(Square.at(row, col));
            }
        }
    
        col = location.col;
        if (row !== 7) {
            row++;
            blockingPiece = board.getPiece(Square.at(row, col));
            if (!blockingPiece || blockingPiece.player !== this.player) {
                availableMoves.push(Square.at(row, col));
            }
            if (col !== 7) {
               col++;
               blockingPiece = board.getPiece(Square.at(row, col));
               if (!blockingPiece || blockingPiece.player !== this.player) {
                   availableMoves.push(Square.at(row, col));
               }
            }
            if (col !== 0) {
                col -= 2;
                blockingPiece = board.getPiece(Square.at(row, col));
                if (!blockingPiece || blockingPiece.player !== this.player) {
                    availableMoves.push(Square.at(row, col));
                }
            }
        }

        row = location.row;
        col = location.col;
        if (row !== 0) {
            row--;
            blockingPiece = board.getPiece(Square.at(row, col));
            if (!blockingPiece || blockingPiece.player !== this.player) {
                availableMoves.push(Square.at(row, col));
            }
            if (col !== 7) {
                col++;
                blockingPiece = board.getPiece(Square.at(row, col));
                if (!blockingPiece || blockingPiece.player !== this.player) {
                    availableMoves.push(Square.at(row, col));
                }
            }
            if (col !== 0) {
                col -= 2;
                blockingPiece = board.getPiece(Square.at(row, col));
                if (!blockingPiece || blockingPiece.player !== this.player) {
                    availableMoves.push(Square.at(row, col));
                }
            }
        }
        return availableMoves;
    }
}
