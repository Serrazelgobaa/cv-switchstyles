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




document.getElementById("trigger_logiciels").addEventListener( 'click', displayLogiciels);
document.getElementById("trigger_langages").addEventListener( 'click', displayLangages);
document.getElementById("trigger_autres").addEventListener( 'click', displayAutres);