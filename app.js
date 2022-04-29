const team = {
    _players: [
      playerOne = {
        firstName: 'oliver',
        lastName: 'gallop',
        age: 27,
      },
      playerTwo = {
        firstName: 'daniel',
        lastName: 'li',
        age: 27,
      },
      playerThree = {
        firstName: 'steve',
        lastName: 'schwab',
        age: 27,
      },
    ],
    _games: [
      gameOne = {
        opponent: 'steve',
        teamPoints: 10,
        opponentPoints: 11,
      },
      gameTwo = {
        opponent: 'daniel',
        teamPoints: 9,
        opponentPoints: 8,
      },
      gameThree = {
        opponent: 'oliver',
        teamPoints: 5,
        opponentPoints: 15,
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer (newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(player);
    },
    addGame (newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team._players);
  
  team.addGame('Titans', 100, 98);
  console.log(team._games);