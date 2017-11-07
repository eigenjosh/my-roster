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
                          <img src="${playerIndex.img}" alt="">
                          <h4><b>${playerIndex.name}</b></h4>
                          <h5>${playerIndex.team}</h5>
                      </div>
                  </ul>
              </div>
              `
        }
        elem.innerHTML = rosterTemplate


    }


}