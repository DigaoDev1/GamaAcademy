document.getElementById("botaoCadastrar").addEventListener("click", function(event){
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dados = {
        nome, 
        email
    };

    let jsonDados = JSON.stringify(dados);
    localStorage.setItem('dados', jsonDados);
    
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';

    
    alert('Cadastro realizado com sucesso! Obrigado :)');
  });

  document.getElementById("iconUm").addEventListener("click", function(event){
      alert('Apenas teste');
  });

  document.getElementById("iconDois").addEventListener("click", function(event){
      alert('Apenas teste');
  });

  document.getElementById("iconTres").addEventListener("click", function(event){
      alert('Apenas teste');
  });

  document.getElementById("iconQuatro").addEventListener("click", function(event){
      alert('Apenas teste');
  });