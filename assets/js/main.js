function contador() {
    function criaSeg(segundos) {
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
      });
    }
  
    const contador = document.querySelector('.contador');
    let segundos = 0;
    let timer;
  
    function iniciaC() {
      timer = setInterval(function() {
        segundos++;
        contador.innerHTML = criaSeg(segundos);
      }, 1000);
    }
  
    document.addEventListener('click', function(e) {
      const el = e.target;
  
      if (el.classList.contains('zerar')) {
        clearInterval(timer);
        contador.innerHTML = '00:00:00';
        contador.classList.remove('pausado');
        segundos = 0;
      }
  
      if (el.classList.contains('iniciar')) {
        contador.classList.remove('pausado');
        clearInterval(timer);
        iniciaC();
      }
  
      if (el.classList.contains('pausar')) {
        clearInterval(timer);
        contador.classList.add('pausado');
      }
    });
  }
  contador();

  