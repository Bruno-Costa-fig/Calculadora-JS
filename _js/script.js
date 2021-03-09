
// recebe a div de resultados
var res = document.getElementById('res');

// recebe os inputs
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

var s = 0;

// função que vai receber a opção selecionada e realizar as validações e cálculos.
function op(val) {
    switch (val) {
        // botão de zerar
        case 0:
            num1.value = "";
            num2.value = "";
            res.innerHTML = '<p>O resultado vai aparecer aqui!</p>';
        break;

        // botão de soma
        case 1:
            // valida se ficou algum input em branco.
            if(num1.value=="" || num2.value==""){
                alert('Digite os dois números')
            } else {
                s = Number(num1.value) + Number(num2.value);
                res.innerHTML = `O resultado da soma de ${num1.value} com ${num2.value} é igual a ${s}`
            }
        break;

        // botão de subtração
        case 2:
            // valida se ficou algum input em branco.
            if(num1.value=="" || num2.value==""){
                alert('Digite os dois números')
            } else {
                s = Number(num1.value) - Number(num2.value);
                res.innerHTML = `O resultado da subtração de ${num1.value} por ${num2.value} é igual a ${s}`  
            }
        break;

        // botão de multiplicação
        case 3:
            // valida se ficou algum input em branco.
            if(num1.value=="" || num2.value==""){
                alert('Digite os dois números')
            } else {
                s = Number(num1.value) * Number(num2.value);
                res.innerHTML = `O resultado da multiplicação de ${num1.value} por ${num2.value} é igual a ${s}`  
            }
        break;

        // botão de divisão
        case 4:
            // valida se ficou algum input em branco.
            if(num1.value=="" || num2.value==""){
                alert('Digite os dois números')
            } else {
                s = Number(num1.value) / Number(num2.value);
                res.innerHTML = `O resultado da divisão de ${num1.value} por ${num2.value} é igual a ${s}`  
            }
        break;
    } 
};

