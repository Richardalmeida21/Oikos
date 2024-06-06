function mostrarSenha(icone) {
    var senhaInput = icone.previousElementSibling;
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
}

function sucesso () {
    Swal.fire({
        title: "Usuário cadastrado com sucesso!",
        text: "Realize o login para continuar",
        icon: "success"
    }).then(() => {
        window.location.href = "index.html";
    });
}

document.getElementById('cadastro').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário
    sucesso(); // Ativa a função
});


window.addEventListener('touchmove', function(event) {
    if(document.activeElement.tagName === 'INPUT' ||
       document.activeElement.tagName === 'TEXTAREA') {
      event.preventDefault();
    }
  });
  



