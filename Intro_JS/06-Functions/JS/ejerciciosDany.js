//Explicación Dani

function esMultiploDe5(number1,number2) {
    console.log(150,200);
};



function esMultiploDe5(number1,number2) {
    if(number1%5 == 0 && number2%5 ==0){
        console.log('Los numeros si son multiplos');
    }else {
        console.log('Uno de los numeros no es multiplo');
    }
};


esMultiploDe5(150,200);
esMultiploDe5(150,203);



const multiplo5 = (n1,n2) => {
    if(n1%5 == 0 && n2%5 == 0){
        console.log('Los numeritos si son multiplos')
    }else{
        console.log('Uno de esos numeritos no es multiplo')
    }
}

multiplo5(1,2)