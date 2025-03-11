function startCalculadora() {
    const sumar = (num1, num2) => {
        return parseFloat(num1) + parseFloat(num2);
    }
    const restar = (num1, num2) => {
        return parseFloat(num1) - parseFloat(num2);
    }
    const dividir = (num1, num2) => {
        return parseFloat(num1) / parseFloat(num2);
    }
    const multiplicar = (num1, num2) => {
        return parseFloat(num1) * parseFloat(num2);
    }
    
    alert ("Que operación deseas realizar?");
    let operacion = prompt ("1. Sumar, 2. Restar, 3. Dividir, 4. Multiplicar");
    
    if (operacion ==1) {
        let num1 = prompt ("Ingresa el primer número para sumar");
        let num2 = prompt ("Ingresa el segundo número para sumar");
        alert ("El resultado de la suma es: " + sumar(num1, num2));
    }
    else if (operacion ==2) {
        let num1 = prompt ("Ingresa el primer número para restar");
        let num2 = prompt ("Ingresa el segundo número para restar");
        alert ("El resultado de la resta es: " + restar(num1, num2));
    }
    else if (operacion ==3) {
        let num1 = prompt ("Ingresa el primer número para dividir");
        let num2 = prompt ("Ingresa el segundo número para dividir");
        alert ("El resultado de la división es: " + dividir(num1, num2));
    }
    else if (operacion ==4) {
        let num1 = prompt ("Ingresa el primer número para multiplicar");
        let num2 = prompt ("Ingresa el segundo número para multiplicar");
        alert ("El resultado de la multiplicación es: " + multiplicar(num1, num2));
    }
    else {
        alert ("Operación no válida");
    }
}