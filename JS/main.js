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


function mudarPlaceholder(input) {
    input.placeholder = 'Selecione a data de nascimento';
}





