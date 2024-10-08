$(document).ready(function () {
    getPokemonListV2();
  
    $(document).on("click", "#btn-get-data", function () {
      getPokemonListV2();
    });
   
  
    function getPokemonListV2() {
      $(".pokemon-grid").html('<img src="../img/refresh giff.gif"></img>');
      $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        method: "GET",
      }).done(function (resp) {
        setTimeout(function () {
          $(".pokemon-grid").html("");
          var listadoPomemon = resp.results;
          listadoPomemon.forEach(function (pokemon) {
            var pokemonId = pokemon.url.split("/")[6];
            var template = ` 
             <div class="pokemon-card">
                <div><p><Strong>${pokemon.name}</Strong></p></div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemonId}.png" alt=${pokemon.name}>
                    <div class="tipos d-flex gap-2 align-items-center" >
                        <p class="pokemon-type agua">${pokemon.tipos}</p>
                </div>
            </div>
`;
            $(".pokemon-grid").append(template);
          });
        }, 1000);
      });
    }
  });


 