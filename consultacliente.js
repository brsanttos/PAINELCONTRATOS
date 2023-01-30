// Seleciona a linha do cliente quando clicada
function selecionarLinha(linha) {
    var linhas = document.getElementsByClassName("linhaCliente");
    for (var i = 0; i < linhas.length; i++) {
      linhas[i].style.backgroundColor = "white";
      linhas[i].style.color = "black";
    }
  
    linha.style.backgroundColor = "blue";
    linha.style.color = "white";
  }
  
  // Filtra os clientes pelo código ou nome
  function filtrarClientes() {
    var input = document.getElementById("filtroCliente");
    var filtro = input.value.toUpperCase();
    var tabela = document.getElementById("cliente-table");
    var linhas = tabela.getElementsByTagName("tr");
  
    for (var i = 0; i < linhas.length; i++) {
      var coluna
    }  }

// Função para conectar-se ao banco de dados e carregar os clientes na tabela
function carregarClientes() {
    // Código para conectar-se ao banco de dados e recuperar os clientes
  
    // Exemplo de como adicionar linhas de clientes à tabela
    var clienteTable = document.getElementById("cliente-table");
    var novaLinha = clienteTable.insertRow();
    var celulaCodigoApollo = novaLinha.insertCell(0);
    var celulaNome = novaLinha.insertCell(1);
    var celulaCPF = novaLinha.insertCell(2);
    var celulaEndereco = novaLinha.insertCell(3);
    var celulaTelefone = novaLinha.insertCell(4);
    celulaCodigoApollo.innerHTML = "001";
    celulaNome.innerHTML = "João Silva";
    celulaCPF.innerHTML = "123.456.789-00";
    celulaEndereco.innerHTML = "Rua 1, nº 12";
    celulaTelefone.innerHTML = "(11) 1234-5678";
  }