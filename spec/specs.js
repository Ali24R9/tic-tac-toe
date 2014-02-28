beforeEach(function() {
  Space.all = [];
});

beforeEach(function() {
  Board.spaces = [];
});

describe("Board", function() {
  describe('initialize', function() {
    it('initializes an empty array', function(){
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.spaces.should.eql([]);
    });
  });

  describe('create', function() {
    it('creates a new board object', function() {
      var testBoard = Board.create();
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
    it('initializes the object', function() {
      var testBoard = Board.create();
      testBoard.spaces.should.eql([]);
    });
  });

  describe('createSpaces', function() {
    it('creates a board using the instances of space', function() {
      var testBoard = Board.create();
      testBoard.createSpaces();
      testBoard.spaces.length.should.equal(9);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    })
  });

  describe("create", function() {
    it('creates an instance of Space', function() {
      var testSpace = Space.create();
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
    it('initializes the instance of Space', function() {
      var testSpace = Space.create(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });

  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });

  });
});

//Player object below
describe('Player', function() {
  describe('create', function() {
    it("creates a new instance of Player", function() {
      var testPlayer = Player.create();
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
    it("initializes a player when created", function() {
      var testPlayer = Player.create("x");
      testPlayer.marker.should.equal("x");
    });
  });
  describe('initialize', function() {
    it("logs a marker for each person", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("x");
      testPlayer.marker.should.equal("x");
    });
  });
});
