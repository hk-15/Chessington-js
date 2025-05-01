import Queen from '../../../src/engine/pieces/queen';
import Bishop from '../../../src/engine/pieces/bishop';
import King from '../../../src/engine/pieces/king';
import Pawn from '../../../src/engine/pieces/pawn';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Queen', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move laterally', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(3, 5), queen);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [
            // Horizontal
            Square.at(3, 0), Square.at(3, 1), Square.at(3, 2), Square.at(3, 3), Square.at(3, 4), Square.at(3, 6), Square.at(3, 7),
            // Vertical
            Square.at(0, 5), Square.at(1, 5), Square.at(2, 5), Square.at(4, 5), Square.at(5, 5), Square.at(6, 5), Square.at(7, 5)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('can move diagonally', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(3, 5), queen);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [
            // Forwards diagonal
            Square.at(4, 6), Square.at(5, 7), Square.at(4, 4), Square.at(5, 3), Square.at(6, 2), Square.at(7, 1),
            // Backwards diagonal
            Square.at(2, 6), Square.at(1, 7), Square.at(2, 4), Square.at(1, 3), Square.at(0, 2)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(3, 5), queen);

        const moves = queen.getAvailableMoves(board);

        moves.should.have.length(25);
    })

    it('cannot move through friendly pieces', () => {
        const queen = new Queen(Player.WHITE);
        const friendlyPiece = new Bishop(Player.WHITE);
        board.setPiece(Square.at(6, 2), queen);
        board.setPiece(Square.at(2, 6), friendlyPiece);

        const moves = queen.getAvailableMoves(board);

        moves.should.not.deep.include(Square.at(1, 7));
    })

    it('cannot move through opposing pieces', () => {
        const queen = new Queen(Player.WHITE);
        const opposingPiece = new Bishop(Player.BLACK);
        board.setPiece(Square.at(6, 2), queen);
        board.setPiece(Square.at(1, 2), opposingPiece);

        const moves = queen.getAvailableMoves(board);

        moves.should.not.deep.include(Square.at(0, 2));
    })

    it('can take opposing pieces', () => {
        const queen = new Queen(Player.WHITE);
        const opposingPiece = new Pawn(Player.BLACK);
        board.setPiece(Square.at(5, 1), queen);
        board.setPiece(Square.at(2, 4), opposingPiece);

        const moves = queen.getAvailableMoves(board);

        moves.should.deep.include(Square.at(2, 4));
    });

    it('cannot take the opposing king', () => {
        const queen = new Queen(Player.WHITE);
        const opposingKing = new King(Player.BLACK);
        board.setPiece(Square.at(5, 1), queen);
        board.setPiece(Square.at(2, 4), opposingKing);

        const moves = queen.getAvailableMoves(board);

        moves.should.not.deep.include(Square.at(2, 4));
    });

    it('cannot take friendly pieces', () => {
        const queen = new Queen(Player.WHITE);
        const friendlyPiece = new Pawn(Player.WHITE);
        board.setPiece(Square.at(5, 1), queen);
        board.setPiece(Square.at(2, 4), friendlyPiece);

        const moves = queen.getAvailableMoves(board);

        moves.should.not.deep.include(Square.at(2, 4));
    });
});
