function validar() {

    var nome = document.getElementById("nome").value;
    var sobrenome = formCadastro.sobrenome.value;
    var senha = formCadastro.senha.value;



    if (nome.length < 2) {
        alert('Preencha seu nome');
        formCadastro.nome.focus();
        return false;
    }

    if(sobrenome.length < 2){
        alert('Digite seu sobrenome.');
        formCadastro.sobrenome.focus();
        return false;
    }



    }