var Game = {
  initialize: function(Player1, Player2) {
    var Game = Object.create(Game);
    this.Player1 = Player1;
    this.player2 = Player2;


    var Board = Object.create(Board);
    board.createSpaces();
    this.board = board;
    
  }
}

var Board = {

  initialize: function() {
    this.spaces = [];
  },

  create: function() {
    var board = Object.create(Board);
    board.initialize();
    return board;
  },
  createSpaces: function() {
    for(var x=1;x<=3;x++){
      for(var y=1;y<=3;y++){
        this.spaces.push(Space.create(x,y));
      }
    }
  }
}

var Space = {
  initialize: function(x,y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  },

  create: function(x,y) {
    var space = Object.create(Space);
    space.initialize(x,y)
    // Space.all.push(space);//may be unnecessary
    return space;
  },

  markBy: function(marker) {
    this.markedBy = marker; 
  }

};


var Player = {
  create: function(marker) {
    var player = Object.create(Player);
    player.initialize(marker)
    return player;
  },

  initialize: function(marker) {
    this.marker = marker;
  }

};


$(document).ready(function() {


  $("form#tictactoe").submit(function(event){

    event.PreventDefault();
    var player1 = $('#player1').val();
    var player2 = $('#player2').val();

    var newGame = Game.initialize(player1, player2);

    player1 = Person.create("x");
    player2 = Person.create("o");

  });

    $('.tictactoe tr td').click(function() {
      var cid =$(this).attr('id');
      alert(cid);
    });



  


});

