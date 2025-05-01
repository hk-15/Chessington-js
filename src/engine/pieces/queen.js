import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const boardSize = GameSettings.BOARD_SIZE;
        const availableMoves = [];
        let blockingPiece;
        //lateral moves 
        let row = location.row;
        let col = location.col + 1;
        while (col < boardSize) {
            blockingPiece = board.getPiece(Square.at(row, col));
            if (blockingPiece) {
                break;
            }
            availableMoves.push(Square.at(row, col));
            col++;
        }
        col = location.col - 1;
        while (col >= 0) {
            blockingPiece = board.getPiece(Square.at(row, col));
            if (blockingPiece) {
                break;
            }
            availableMoves.push(Square.at(row, col));
            col--;
        }
        col = location.col;
        row = location.row + 1;
        while (row < boardSize) {
            blockingPiece = board.getPiece(Square.at(row, col));
            if (blockingPiece) {
                break;
            }
            availableMoves.push(Square.at(row, col));
            row++;
        }
        row = location.row - 1;
        while (row >= 0) {
            blockingPiece = board.getPiece(Square.at(row, col));
            if (blockingPiece) {
                break;
            }
            availableMoves.push(Square.at(row, col));
            row--;
        }
        //diagonal moves
        row = location.row + 1;
        col = location.col + 1;
        while (row < boardSize && col < boardSize) {
            blockingPiece = board.getPiece(Square.at(row, col));
            if (blockingPiece) {
                break;
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
                break;
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
                break;
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
                break;
            }
            availableMoves.push(Square.at(row, col));
            row--;
            col--;
        }
        return availableMoves;
    }
}
