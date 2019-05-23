function displayLogiciels(){

  if ( document.getElementById("langages").classList.contains('showed') ) {
    document.getElementById("langages").classList.remove('showed');
    document.getElementById("langages").classList.add('hidden');

    document.getElementById("logiciels").classList.remove('hidden');
    document.getElementById("logiciels").classList.add('showed');
  }

  else if ( document.getElementById("autres").classList.contains('showed') ){
  	document.getElementById("autres").classList.remove('showed');
    document.getElementById("autres").classList.add('hidden');

    document.getElementById("logiciels").classList.remove('hidden');
    document.getElementById("logiciels").classList.add('showed');
  }

}

function displayLangages(){

  if ( document.getElementById("logiciels").classList.contains('showed') ) {
    document.getElementById("logiciels").classList.remove('showed');
    document.getElementById("logiciels").classList.add('hidden');

    document.getElementById("langages").classList.remove('hidden');
    document.getElementById("langages").classList.add('showed');
  }

  else if ( document.getElementById("autres").classList.contains('showed') ){
  	document.getElementById("autres").classList.remove('showed');
    document.getElementById("autres").classList.add('hidden');

    document.getElementById("langages").classList.remove('hidden');
    document.getElementById("langages").classList.add('showed');
  }

}

function displayAutres(){

  if ( document.getElementById("logiciels").classList.contains('showed') ) {
    document.getElementById("logiciels").classList.remove('showed');
    document.getElementById("logiciels").classList.add('hidden');

    document.getElementById("autres").classList.remove('hidden');
    document.getElementById("autres").classList.add('showed');
  }

  else if ( document.getElementById("langages").classList.contains('showed') ){
  	document.getElementById("langages").classList.remove('showed');
    document.getElementById("langages").classList.add('hidden');

    document.getElementById("autres").classList.remove('hidden');
    document.getElementById("autres").classList.add('showed');
  }

}

function switchStyles() {

    let flexElements = document.querySelectorAll(".styleFlex");

    flexElements.forEach(function (elem, i) {
        if (elem.classList.contains('dark')) {
    
    		elem.classList.remove('dark');
    		elem.classList.add('light');

		}

		else {
			elem.classList.remove('light');
			elem.classList.add('dark');

			console.log("light");
		}
	});

    
}

document.getElementById("trigger_style").addEventListener( 'click', switchStyles);
document.getElementById("trigger_logiciels").addEventListener( 'click', displayLogiciels);
document.getElementById("trigger_langages").addEventListener( 'click', displayLangages);
document.getElementById("trigger_autres").addEventListener( 'click', displayAutres);


var boite = document.getElementById('date_heure');


function horloge() { 
	var now = new Date(); 

	var annee = now.getFullYear();
	var mois = now.getMonth()+1;

	mois = ('0'+mois).slice(-2);
	
	var jour = ('0'+now.getDate()   ).slice(-2);
	var joursemaine = now.getDay();
	var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");

	var heure = ('0'+now.getHours()  ).slice(-2);
	var minutes = ('0'+now.getMinutes()).slice(-2);
	var secondes = ('0'+now.getSeconds()).slice(-2);

	boite.textContent = '' + tab_jour[joursemaine] + ' ' + jour + '/' + mois + '/' + annee + ' ' + heure + ':' + minutes + ':' + secondes;

	function checkTime() {

		if (heure == 11)
		{
	
			switchStyles();

		}
	
	}

	
}

setInterval("horloge()", 1000);
