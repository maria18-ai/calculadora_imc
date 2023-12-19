// DOM 
const imcNumber = document.querySelector('#show_imc p');
const imcMensagem = document.querySelector('#mensage_imc p');
const imcLorenMensage = document.querySelector('#loren_imc');
const btn = document.querySelector('#btn');

function calcIMC() {
    const userWeight = parseFloat(document.querySelector('#weight').value);
    const UserHeigth = parseFloat(document.querySelector('#heigth').value);

    if (isNaN(userWeight) || isNaN(UserHeigth) || UserHeigth === 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        imcNumber.innerHTML = `00.00`
        imcMensagem.innerHTML = ``
        imcLorenMensage.innerHTML = ``
        return;
    }

    const imc = userWeight / (UserHeigth ** 2);
    return imc.toFixed(2);
    return 
}

btn.addEventListener('click', (e) => {
    const calculatedIMC = calcIMC();
    const showMsg = document.querySelector('#loren_imc p')

    //  mostrar os elementos na segunda div 
    imcNumber.innerHTML = calculatedIMC;

    if (calculatedIMC < 18.5) {
        imcMensagem.innerHTML = `MAGREZA`
        showMsg.innerHTML = `
        Peso considerado abaixo do normal para a altura. <br></br>
        - Menos reserva de energia.
        <br>
        - Maior suscetibilidade a infecções.
        <br>
        - Possível deficiência nutricional.`;
        imcLorenMensage.classList.add('magreza');

    } else if (calculatedIMC > 18.5 && calculatedIMC < 24.9) {
        imcMensagem.innerHTML = `NORMAL`
        showMsg.innerHTML = `
        Peso considerado normal para a altura. <br></br>
        - Menor risco de doenças cardíacas.
        <br>
        - Melhor controle do açúcar no sangue.
        <br>
        - Menor probabilidade de desenvolver condições relacionadas à obesidade.`
        imcLorenMensage.classList.add('normal');

    } else if (calculatedIMC > 25.0 && calculatedIMC < 29.9){
        imcMensagem.innerHTML = `SOBREPESO`
        showMsg.innerHTML = `
        Excesso de peso em relação à altura.<br></br>
        - Aumento do risco de diabetes tipo 2.
        <br>
        - Pressão arterial mais elevada.
        <br>
        - Maior probabilidade de desenvolver doenças cardíacas.
        `
        imcLorenMensage.classList.add('sobrepeso');

    } else if (calculatedIMC > 30.0 && calculatedIMC < 39.9) {
        imcMensagem.innerHTML = `OBESIDADE`
        showMsg.innerHTML = `
        Obesidade moderada.<br></br>
        - Maior risco de doenças cardíacas.
        <br>
        - Aumento do risco de apneia do sono.
        <br>
        - Agravamento dos problemas articulares.
        `
        imcLorenMensage.classList.add('obesidade');

    } else {
        imcMensagem.innerHTML = `OBESIDADE GRAVE`
        showMsg.innerHTML = `
        Obesidade grave ou mórbida..<br></br>
        - Maior risco de doenças cardíacas.
        <br>
        - Maior probabilidade de desenvolver diabetes tipo 2.
        <br>
        - Aumento do risco de complicações respiratórias.
        `
        imcLorenMensage.classList.add('obesidade_grave');

    }
    // mostrar mensagem sobre imc
    imcLorenMensage.classList.add('show');

    // limpando inputs 
    document.querySelector('#name').value = ``
    document.querySelector('#age').value = ``
    document.querySelector('#weight').value = ``
    document.querySelector('#heigth').value = ``

    e.preventDefault();
});

