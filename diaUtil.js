function verificarDiaUtil(dia){
    if(dia < 1 || dia > 31){
        return 'dia invalido'
    }
    const diasDaSemanaNoMes = listarDiasDaSemana()
    for(let nomeDoDiaDaSemana in diasDaSemanaNoMes){
        for(let diaDaSemana of diasDaSemanaNoMes[nomeDoDiaDaSemana]){
            if(dia === diaDaSemana){
                if(nomeDoDiaDaSemana === 'domingo' || nomeDoDiaDaSemana === 'sabado'){
                    return `${nomeDoDiaDaSemana} não é dia útil`
                }else{
                    return `${nomeDoDiaDaSemana} é dia útil`
                }
            }
        }
    }
}

function listarDiasDaSemana(){
    const diasDaSemana = {
        domingo: [],
        segunda: [],
        terca: [],
        quarta: [],
        quinta: [],
        sexta: [],
        sabado: []        
    }
    let dia = 1
    while(dia <= 7){
        for(let i = dia; i <= 31; i += 7){
            switch(dia){
                case 1:
                    diasDaSemana.domingo.push(i)
                    break
                case 2:
                    diasDaSemana.segunda.push(i)
                    break
                case 3:
                    diasDaSemana.terca.push(i)
                    break
                case 4:
                    diasDaSemana.quarta.push(i)
                    break
                case 5:
                    diasDaSemana.quinta.push(i)
                    break
                case 6:
                    diasDaSemana.sexta.push(i)
                    break
                case 7:
                    diasDaSemana.sabado.push(i)
                    break
            }
        }
        dia++
    }
    return diasDaSemana
}

console.log(listarDiasDaSemana())
console.log(verificarDiaUtil(1))