  $(window).on("load",function () {
    $("#contenedor").hide();
  });
  

$(document).ready(function () {

    $(".button").click(function () {

    
        let busca = $(".buscar").val();
        $.ajax({
            type: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/" + busca,
            dataType: "json",
            success: function (response) {
                


                $("#contenedor").show();

                $("#carta").attr("src", response.sprites.other.dream_world.front_default);

                console.log(response);

                $("#name").html(response.name.toUpperCase());
 
                  var chart = new CanvasJS.Chart("chartContainer", {
                    
                    theme: "dark1",
                    exportFileName: "Doughnut Chart",
                    exportEnabled: true,
                    animationEnabled: true,
                    
                    legend:{
                      cursor: "pointer",
                      
                    },
                    data: [{
                      type: "doughnut",
                      innerRadius:120,
                      showInLegend: false,
                      toolTipContent: "<b>{name}</b>: <b>{y}</b>",
                      indexLabel: "{name} - {y}",
                      dataPoints: [
                        { y: response.stats[0].base_stat, name: "Vida" },
                        { y: response.stats[1].base_stat, name: "Ataque" },
                        { y: response.stats[2].base_stat, name: "Defensa" },
                        { y: response.stats[3].base_stat, name: "Ataque Especial" },
                        { y: response.stats[4].base_stat, name: "Defensa Especial" },
                        { y: response.stats[5].base_stat, name: "Velocidad" }
                      ]
                    }]
                  });
                  chart.render();
                   
                }  

             
    
            }
          );
        
    });
    

});

