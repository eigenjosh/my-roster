function PlayerController() {

    var loading = true;
    var playerService = new PlayersService(ready);

    function ready() {
        loading = false;

        $('some-button').on('click', function () {
            var teamSF = playerService.getPlayersByTeam("SF");
        })
    }

    function draw(playerService) {

        var elem = document.getElementById('row');
        elem.innerHTML = '';
        var rosterTemplate = '';
        var player = data.body.players

        for (player in playersData) {

            var playerIndex = playersData[player];
            rosterTemplate += `
              <div class="panel panel-default">
                  <ul id='player-list'>
                      <div>
                          <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="">
                          <h4><b>${playerIndex.firstname}</b></h4>
                          <h5>${playerIndex.pro_team}</h5>
                      </div>
                  </ul>
              </div>
              `
        }
        elem.innerHTML = rosterTemplate


    }


}