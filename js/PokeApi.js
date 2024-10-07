$(document).ready(function () {
    getPokemonListV2();
  
    $(document).on("click", "#btn-get-data", function () {
      getPokemonListV2();
    });
   
  
    function getPokemonListV2() {
      $("#data-content").html("https://media.tenor.com/YXS2BDyDWtwAAAAM/video-games-cargando.gif");
      $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        method: "GET",
      }).done(function (resp) {
        setTimeout(function () {
          $("#data-content").html("");
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
            $("#data-content").append(template);
          });
        }, 1000);
      });
    }
  });


var template = `<p><a href="detail.html?pid=${pokemonId}"><h1 class="pokemon" pokemonid="1">${pokemon.name}</h1><img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemonId}.png"</a></p>`;
