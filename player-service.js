function PlayersService(callback) {



    var playersData = [];

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
            console.log(playersData)
            return callback();
        }

        var url = "https://bcw-getter.herokuapp.com/?url=";
        var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
        var apiUrl = url + encodeURIComponent(endpointUri);

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
}
