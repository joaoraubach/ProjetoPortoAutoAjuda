function mostrarSenha(){
    var inputPass = document.getElementById('Senha');
    var btnShowPass = document.getElementById('olho');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
};

function mostrarSenha2(){
    var inputPass = document.getElementById('confirmarSenha');
    var btnShowPass = document.getElementById('olho2');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
};