$(document).ready(function() {
	$("#butget").click(function() {
		$.getJSON("http://bolaoshow.herokuapp.com/service/jogos", function(data) {
			$.each(data, function() {
  				$.each(this, function(name, value) {
    				$("#table > tbody").append('<tr><td>'+ value.clubeCasa +'</td><td>'+ value.clubeVisitante +'</td><td>'+ value.numeroRodada + '</tr><td>'+ value.campeonato+ '</tr>');
  				});
			});
		})
	});

	$("#butpost").click(function(){
		var j = {"clubeCasa":{"clube":"36","escudo":"url","nome":"Tabajara Futebol Clube"},"clubeVisitante":{"clube":38,"escudo":"url","nome":"Vasco Vice"},
		"numeroRodada":$("#numeroRodada").val(), "campeonato":{"ano":"2014","campeonato":37,"descricao":"Bom demais!","nome":"Campeonato do Vicente"}};

		$.ajax ({
			type: "POST",
    		url: "http://bolaoshow.herokuapp.com/service/jogos",
    		data: JSON.stringify(j),
    		processData: true,
    		contentType: "application/json"
		});

		$("#tabela > tbody").html("");
		alert($("#numeroRodada").val()+ " adicionado com sucesso! Use o get e o verá na tabela.");
	});
});