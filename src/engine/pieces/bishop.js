import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const boardSize = GameSettings.BOARD_SIZE;
        const availableMoves = [];
        let blockingPiece;
        
        let row = location.row + 1;
        let col = location.col + 1;
        while (row < boardSize && col < boardSize) {
            blockingPiece = board.getPiece(Square.at(row, col));
            if (blockingPiece) {
                if (blockingPiece.player !== this.player && blockingPiece.constructor.name !== 'King') {
                    availableMoves.push(Square.at(row, col))
                    break;
                } else {
                    break;
                }
            }
            availableMoves.push(Square.at(row, col));
            row++;
            col++;
        }
        row = location.row + 1;
        col = location.col - 1;
        while (col >= 0 && row < boardSize) {
            blockingPiece = board.getPiece(Square.at(row, col));
            if (blockingPiece) {
                if (blockingPiece.player !== this.player && blockingPiece.constructor.name !== 'King') {
                    availableMoves.push(Square.at(row, col))
                    break;
                } else {
                    break;
                }
            }
            availableMoves.push(Square.at(row, col));
            row++;
            col--;
        }
        row = location.row - 1;
        col = location.col + 1;
        while (row >= 0 && col < boardSize) {
            blockingPiece = board.getPiece(Square.at(row, col));
            if (blockingPiece) {
                if (blockingPiece.player !== this.player && blockingPiece.constructor.name !== 'King') {
                    availableMoves.push(Square.at(row, col))
                    break;
                } else {
                    break;
                }
            }
            availableMoves.push(Square.at(row, col));
            row--;
            col++;
        }
        row = location.row - 1;
        col = location.col - 1;
        while (row >= 0 && col >= 0) {
            blockingPiece = board.getPiece(Square.at(row, col));
            if (blockingPiece) {
                if (blockingPiece.player !== this.player && blockingPiece.constructor.name !== 'King') {
                    availableMoves.push(Square.at(row, col))
                    break;
                } else {
                    break;
                }
            }
            availableMoves.push(Square.at(row, col));
            row--;
            col--;
        }
    
        return availableMoves;
    }
}
