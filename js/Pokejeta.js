$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("pid")); 
    var pokemonId = urlParams.get("pid");

    if (pokemonId == null) {
      alert("No se ha recibido el ID de pokemon");
    } else {
      getPokemonId(pokemonId);
    }
  
    function getPokemonId(pokemonId){
      $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
        method: "GET",
      }).done(function(resp){
          var pokemon = resp; 
          var template = `<h1>${pokemon.name}</h1>`; 
          $(".titulo").append(template); 
      }).fail(function(){
          alert("Error al obtener los datos del Pokémon");
      });
    }


});

