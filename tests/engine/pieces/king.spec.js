import King from '../../../src/engine/pieces/king';
import Pawn from '../../../src/engine/pieces/pawn';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('King', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move one square in any direction', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(3, 3), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(4, 2), Square.at(4, 3), Square.at(4, 4), Square.at(3, 4), Square.at(2, 4), Square.at(2, 3), Square.at(2, 2), Square.at(3, 2)
        ];

        moves.should.deep.include.members(expectedMoves);
    })

    it('cannot make any other moves', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(3, 3), king);

        const moves = king.getAvailableMoves(board);

        moves.should.have.length(8);
    });

    it('can take opposing pieces', () => {
        const king = new King(Player.WHITE);
        const opposingPiece = new Pawn(Player.BLACK);
        board.setPiece(Square.at(1, 4), king);
        board.setPiece(Square.at(2, 4), opposingPiece);

        const moves = king.getAvailableMoves(board);

        moves.should.deep.include(Square.at(2, 4));
    });

    it('cannot take a friendly piece', () => {
        const king = new King(Player.BLACK);
        const friendlyPiece = new Pawn(Player.BLACK);
        board.setPiece(Square.at(1, 4), king);
        board.setPiece(Square.at(0, 4), friendlyPiece);

        const moves = king.getAvailableMoves(board);

        moves.should.not.deep.include(Square.at(0, 4));
    });

});
