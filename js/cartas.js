class Carta {
	constructor(numero,nipe){
		this.numero = numero;
		this.nipe = nipe;
	}
}

class Baralho {
	
	constructor(){
		this.cartas = [];
		
	}
	
	adicionarCarta(carta){
		this.cartas.push(carta);
	}
	
	removerCarta(index{
		
	}
	
}





function inicializar(){
	var literal = "";
	var cartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
	
	for(var i=0;i<cartas.length;i++){
		literal+= criaCarta(cartas[i],"paus");
		literal+= criaCarta(cartas[i],"ouro");
		literal+= criaCarta(cartas[i],"copas");
		literal+= criaCarta(cartas[i],"espadas");
	}
	document.body.innerHTML = literal;
	
}

window.onload = inicializar;

 function criaCarta(numero,nipe){
	 switch(numero){
		case "A": return criaCartaAs(nipe);
		case "2": return criaCarta2a10("2",nipe);
		case "3": return criaCarta2a10("3",nipe);
		case "4": return criaCarta2a10("4",nipe);
		case "5": return criaCarta2a10("5",nipe);
		case "6": return criaCarta2a10("6",nipe);
		case "7": return criaCarta2a10("7",nipe);
		case "8": return criaCarta2a10("8",nipe);
		case "9": return criaCarta2a10("9",nipe);
		case "10": return criaCarta2a10("10",nipe);
		case "J": return criaCartaJQK("J",nipe);
		case "Q": return criaCartaJQK("Q",nipe);
		case "K": return criaCartaJQK("K",nipe);
	 }
 }
 
 
 function criaCartaAs(nipe){
	 
	var carta="";
	var caractere = "";
	
	carta+="<div class='container-card'><div class='card'>";
	
	if(nipe == "copas" || nipe=="ouro") carta+= "<div class='front red'>";
	else carta+= "<div class='front'>";
	
	switch (nipe){
		case "paus":caractere = "&clubs;";;break;
		case "ouro":caractere = " &diams;";break;
		case "copas":caractere = "&hearts;";break;
		case "espadas":caractere = "&spades;";break;
	}
	
    carta+= "<div class='index'>A<br/>"+caractere+"</div><div class='ace'>"+caractere+"</div></div></div></div>";
	 
	 return carta;
 }
 
 function criaCarta2a10(numero,nipe){
	
	var figuras = [
	{
		"numero":"2", 
		"coordenadas":
		[
			{"coluna":"B","linha":"2"},
			{"coluna":"B","linha":"4"}
		]
	},
	{
		"numero":"3", 
		"coordenadas":
		[
			{"coluna":"B","linha":"2"},
			{"coluna":"B","linha":"3"},
			{"coluna":"B","linha":"4"}
		]
	},
	{
		"numero":"4", 
		"coordenadas":
		[
			{"coluna":"A","linha":"1"},
			{"coluna":"A","linha":"5"},
			{"coluna":"C","linha":"1"},
			{"coluna":"C","linha":"5"}
		]
	},
	{
		"numero":"5", 
		"coordenadas":
		[
			{"coluna":"A","linha":"1"},
			{"coluna":"A","linha":"5"},
			{"coluna":"B","linha":"3"},
			{"coluna":"C","linha":"1"},
			{"coluna":"C","linha":"5"}
		]
	},
	
	{
		"numero":"6", 
		"coordenadas":
		[
			{"coluna":"A","linha":"1"},
			{"coluna":"A","linha":"3"},
			{"coluna":"A","linha":"5"},
			{"coluna":"C","linha":"1"},
			{"coluna":"C","linha":"3"},
			{"coluna":"C","linha":"5"}
		]
	},
	
	{
		"numero":"7", 
		"coordenadas":
		[
			{"coluna":"A","linha":"1"},
			{"coluna":"A","linha":"3"},
			{"coluna":"A","linha":"5"},
			{"coluna":"B","linha":"2"},
			{"coluna":"C","linha":"1"},
			{"coluna":"C","linha":"3"},
			{"coluna":"C","linha":"5"}
		]
	},
	
	{
		"numero":"8", 
		"coordenadas":
		[
			{"coluna":"A","linha":"1"},
			{"coluna":"A","linha":"3"},
			{"coluna":"A","linha":"5"},
			{"coluna":"B","linha":"2"},
			{"coluna":"B","linha":"4"},
			{"coluna":"C","linha":"1"},
			{"coluna":"C","linha":"3"},
			{"coluna":"C","linha":"5"}
		]
	},
	
	{
		"numero":"9", 
		"coordenadas":
		[
			{"coluna":"A","linha":"1"},
			{"coluna":"A","linha":"2"},
			{"coluna":"A","linha":"4"},
			{"coluna":"A","linha":"5"},
			{"coluna":"B","linha":"3"},
			{"coluna":"C","linha":"1"},
			{"coluna":"C","linha":"2"},
			{"coluna":"C","linha":"4"},
			{"coluna":"C","linha":"5"},
		]
	},
	{
		"numero":"10", 
		"coordenadas":
		[
			{"coluna":"A","linha":"1"},
			{"coluna":"A","linha":"2"},
			{"coluna":"A","linha":"4"},
			{"coluna":"A","linha":"5"},
			{"coluna":"B","linha":"2"},
			{"coluna":"B","linha":"4"},
			{"coluna":"C","linha":"1"},
			{"coluna":"C","linha":"2"},
			{"coluna":"C","linha":"4"},
			{"coluna":"C","linha":"5"},
		]
	},
	
	];
	var carta="";
	var caractere = "";
	
	carta+="<div class='container-card'><div class='card'>";
	
	if(nipe == "copas" || nipe=="ouro") carta+= "<div class='front red'>";
	else carta+= "<div class='front'>";
	
	switch (nipe){
		case "paus":caractere = "&clubs;";;break;
		case "ouro":caractere = " &diams;";break;
		case "copas":caractere = "&hearts;";break;
		case "espadas":caractere = "&spades;";break;
	}
	
	carta+="<div class='index'>"+numero+"<br/>"+caractere+"</div>";
	for(var f=0;f<figuras.length;f++){
		
		if(figuras[f].numero == numero){
			for(var i=0;i<figuras[f].coordenadas.length;i++){
				carta+="<div class='spot"+figuras[f].coordenadas[i].coluna+figuras[f].coordenadas[i].linha+"'>"+caractere+"</div>";
			}
			
			carta+="</div></div></div>";
		}
	}
	return carta;
 }
 
 function criaCartaJQK(numero,nipe){
	 
	var carta="";
	var caractere = "";
	
	carta+="<div class='container-card'><div class='card'>";
	
	if(nipe == "copas" || nipe=="ouro") carta+= "<div class='front red'>";
	else carta+= "<div class='front'>";
	
	switch (nipe){
		case "paus":caractere = "&clubs;";;break;
		case "ouro":caractere = " &diams;";break;
		case "copas":caractere = "&hearts;";break;
		case "espadas":caractere = "&spades;";break;
	}

	switch (numero){
		case "J":imagem = "jack.gif";;break;
		case "Q":imagem = "queen.gif";break;
		case "K":imagem = "king.gif";break;
	}
	
	carta+= "<div class='index'>"+numero+"<br/>"+caractere+"</div>";
	carta+=	"<img class='face' src='./img/"+imagem+"'/>";
	carta+= "<div class='spotA1'>"+caractere+"</div>";
	carta+= "<div class='spotC5'>"+caractere+"</div>";
	carta+=	"</div></div></div>";
	
	return carta;
	 
 }
 
 
 
 function darMao(){
			var mao = "";
			var caractereNumero ="";
			var caractereNipe = "";
			var numeroRandom,nipeRandom;
			
			for(var i=0;i<40;i++){
			
			numeroRandom = Math.floor((Math.random() * 13) + 1);
			nipeRandom = Math.floor((Math.random() * 4) + 1);
						
			 switch(numeroRandom){
				case 1: caractereNumero = "A";break;
				case 2: caractereNumero = "2";break;
				case 3: caractereNumero = "3";break;
				case 4: caractereNumero = "4";break;
				case 5: caractereNumero = "5";break;
				case 6: caractereNumero = "6";break;
				case 7: caractereNumero = "7";break;
				case 8: caractereNumero = "8";break;
				case 9: caractereNumero = "9";break;
				case 10: caractereNumero = "10";break;
				case 11: caractereNumero = "J";break;
				case 12: caractereNumero = "Q";break;
				case 13: caractereNumero = "K";break;
			 }
			 
			 switch(nipeRandom){
				case 1: caractereNipe = "paus";break;
				case 2: caractereNipe = "ouro";break;
				case 3: caractereNipe = "copas";break;
				case 4: caractereNipe = "espadas";break;
			 }
			
			
				mao+= criaCarta(caractereNumero,caractereNipe);
			}
			
			return mao;
		}
		
		function inicializa(){
			var mesa = document.getElementById("container");
			mesa.innerHTML = darMao();
		}
		
		
 
 
 
 