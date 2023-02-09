// SCRIPT PARA TRANSFORMAR O CAMPO VALOR EM MOEDA

function formatCurrency(input) {
    var value = input.value;
    value = value.replace(/\D/g, "");
    value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value/100);
    input.value = value;
  }

// FUNÇÃO PARA VALIDAR O CAMPO "COD APOLLO" NO FORMULARIO

function validateForm() {
    var x = document.getElementById("code").value;
    if (x == "") {
        alert("O campo 'Cod Apollo' é obrigatório");
        return false;
    }
}

// FUNÇÃO PARA ABRIR/FECHAR O MENU

function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    } else {
      dropdownMenu.style.display = "block";
    }
  }