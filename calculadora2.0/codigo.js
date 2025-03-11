function startCalculadora() {
    const sumar = (num1, num2) => {
        return (num1) + (num2);
    }
    const restar = (num1, num2) => {
        return (num1) - (num2);
    }
    const dividir = (num1, num2) => {
        return (num2 !== 0 ? num1 / num2 : "Error: División por cero");
    }
    const multiplicar = (num1, num2) => {
        return (num1) * (num2);
    }
          
    function pedirNumero(mensaje) {
        let numero;
        do {
            numero = prompt(mensaje);
            if (numero === null) return null;
            numero = Number(numero);
            if (isNaN(numero)) {
                alert("Debes ingresar un número válido");
            }
        } while (isNaN(numero));
        return numero;
    }
    
    alert ("Que operación deseas realizar?");
    let operacion = prompt ("1. Sumar, 2. Restar, 3. Dividir, 4. Multiplicar");

    
    if (operacion ==1) {
        num1 = pedirNumero ("Ingresa el primer número para sumar");
        num2 = pedirNumero ("Ingresa el segundo número para sumar");
        alert ("El resultado de la suma es: " + sumar(num1, num2));
    }
    else if (operacion ==2) {
        num1 = pedirNumero ("Ingresa el primer número para restar");
        num2 = pedirNumero ("Ingresa el segundo número para restar");
        alert ("El resultado de la resta es: " + restar(num1, num2));
    }
    else if (operacion ==3) {
        num1 = pedirNumero ("Ingresa el primer número para dividir");
        num2 = pedirNumero ("Ingresa el segundo número para dividir");
        alert ("El resultado de la división es: " + dividir(num1, num2));
    }
    else if (operacion ==4) {
        num1 = pedirNumero ("Ingresa el primer número para multiplicar");
        num2 = pedirNumero ("Ingresa el segundo número para multiplicar");
        alert ("El resultado de la multiplicación es: " + multiplicar(num1, num2));
    }
    else {
        alert ("Operación no válida");
    }
}