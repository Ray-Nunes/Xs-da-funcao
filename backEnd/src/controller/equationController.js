function resolverEquacao(req, res){
    try{
        const { equation } = req.body;

        let metade = equation.split('=')[0];
        let qtdX = (metade.match(/x/g) || []).length

        let valorA = 1, valorEquacao, valorB, ValorResultado, valorX

        if(qtdX == 1){
            const partes = equation.split('=');
            valorA = partes[0].split('x')[0]
            valorEquacao = partes[0].split('x')[1].split('')[0]
            valorB = partes[0].split('x')[1].split(valorEquacao)[1]
            ValorResultado = partes[1]
            
            if(valorA === ''){
                    valorA = 1
                }

            if(valorEquacao === '+'){
                
                valorX = (Number(-valorB) + Number(ValorResultado)) / valorA
            } else {
                valorX = (Number(valorB) + Number(ValorResultado)) / valorA
            }
        } else if (qtdX == 2){
            const partes = equation.split('=')
            valorA = partes[0].split('x')[0]
            valorEquacao = partes[0].split('x')[1].split('')[0]
            valorB = partes[0].split(valorEquacao)[1].split('x')[0]
            ValorResultado = partes[1]

            if(valorA == ''){
                valorA = 1
            }

            if(valorB == ''){
                valorB = 1
            }

            if(valorEquacao == '+'){
                valorX = ValorResultado / (Number(valorA) + Number(valorB)) 
            } else{
                 valorX = ValorResultado / (Number(valorA) - Number(valorB)) 
            }

            
        }
        

        res.json({
            message: 'Equação resolvida  ok',
            equation,
            valorX
            
        })
    } catch (erro){
        res.status(400).json({message: 'Erro ao resolver a equação', erro: erro.message});
    }
}

module.exports = { resolverEquacao };


/*
if(partes[1] === '+'){
            resultado = Number(partes[0]) + Number(partes[2])
        }else if(partes[1] === '-'){
            resultado = Number(partes[0]) - Number(partes[2])
        }else if(partes[1] === '/'){
            resultado = Number(partes[0]) / Number(partes[2])
        }else if(partes[1] === '*'){
            resultado = Number(partes[0]) * Number(partes[2])
        }

        valorA = partes[0]
        valorB = partes[3]
        valorEquacao = partes[2]
        
        ValorResultado = [partes[5] + partes[6]]

        let resultado = Number(-valorB) + Number(ValorResultado)
        resultado = resultado / valorA

        const partes = equation.split('+');
        valorA = partes[0].split('x')[0]
        valorB = partes[1].split('=')[0]
        ValorResultado = partes[1].split('=')[1]

*/