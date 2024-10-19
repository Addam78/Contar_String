console.log('CONTAR QUANTAS LETRAS EXISTEM NA PALAVRA E SE EXISTEM')
//DEVE PERCORRER A PALAVRA
//VERIFICAR SE A LETRA EXISTE E QUANTAS LETRAS EXISTEM
let contar = 0
let acumula = 0

function detecta (x,y){
    for (n of y){
        if(x.includes(y[contar])){
            contar ++
            acumula ++
        }
        else{
            contar ++  
        }
    }
    console.log(`Contem a letra '${x}' ${acumula} vezes`)
}

detecta('a','maturidade')

