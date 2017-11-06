function PlayerService(callback) {


    var playersData = [];
    var filteredPlayers = playersData.filter(function (player) { 
        if (player.team === "SF") { 
            return true;
        }
    });

    var apiUrl = "http://api.cbssports.com/fantasy/players/profile?version=3.0";

    this.getPlayersByTeam = function (teamName) {
        return playersData.filter(function (player) {
            if (player.team == teamName) {
                return true;
            }
        });
    }

    this.getPlayersByPosition = function (position) {
        return playersData.filter(function (player) {
            if (player.position == position) {
                return true;
            }
        });
    }

    this.getPlayersByName = function (name) {
        return playersData.filter(function (player) {
            if (player.name == name) {
                return true;
            }
        });
    }


    function loadPlayersData() {


        var localData = localStorage.getItem('playersData');
        if (localData) {
            playersData = JSON.parse(localData);
            return callback();
        }


        $.getJSON(apiUrl, function (data) {
            playersData = data.body.players;
            console.log('Player Data Ready')
            console.log('Writing Player Data to localStorage')
            localStorage.setItem('playersData', JSON.stringify(playersData))
            console.log('Finished Writing Player Data to localStorage')
            callback()
        });
    }
    loadPlayersData();




    this.getPlayers = function getPlayers(callOnComplete) {

        $.get(apiUrl, function (response) {
            playersData = response.data.results;
            callOnComplete(playersData)
        })


    }
}
