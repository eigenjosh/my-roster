function PlayerController(){

    var loading = true;
    var playerService = new PlayersService(ready);

    function ready(){
        loading = false;

        $('some-button').on('click', function(){
            var teamSF = playerService.getPlayersByTeam("SF");
        })
    }


}