import Knight from '../../../src/engine/pieces/knight';
import Pawn from '../../../src/engine/pieces/pawn';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Knight', () => {

    let board;
    beforeEach(() => board = new Board());
    
    it('moves in an L shape', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(3, 2), knight);

        const moves = knight.getAvailableMoves(board);
        const expectedMoves = [
            Square.at(5, 1), Square.at(5, 3), Square.at(4, 0), Square.at(4, 4), Square.at(2, 0), Square.at(2, 4), Square.at(1, 1), Square.at(1, 3)
        ]

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(3, 2), knight);

        const moves = knight.getAvailableMoves(board);

        moves.should.have.length(8);
    });

    it('can take opposing pieces', () => {
        const knight = new Knight(Player.WHITE);
        const opposingPiece = new Pawn(Player.BLACK);
        board.setPiece(Square.at(4, 4), knight);
        board.setPiece(Square.at(2, 5), opposingPiece);

        const moves = knight.getAvailableMoves(board);

        moves.should.deep.include(Square.at(2, 5));
    });

    it('cannot take the opposing king', () => {
        const knight = new Knight(Player.WHITE);
        const opposingKing = new King(Player.BLACK);
        board.setPiece(Square.at(4, 4), knight);
        board.setPiece(Square.at(2, 5), opposingKing);

        const moves = knight.getAvailableMoves(board);

        moves.should.not.deep.include(Square.at(2, 5));
    });

    it('cannot take friendly pieces', () => {
        const knight = new Knight(Player.WHITE);
        const friendlyPiece = new Pawn(Player.WHITE);
        board.setPiece(Square.at(4, 4), knight);
        board.setPiece(Square.at(2, 5), friendlyPiece);

        const moves = knight.getAvailableMoves(board);

        moves.should.not.deep.include(Square.at(2, 5));
    });

});
