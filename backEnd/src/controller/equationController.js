function resolverEquacao(req, res){
    try{
        const { equation } = req.body;

        const partes = equation.split(' ');
        let resultado = 0

        if(partes[1] === '+'){
            resultado = Number(partes[0]) + Number(partes[2])
        }else if(partes[1] === '-'){
            resultado = Number(partes[0]) - Number(partes[2])
        }else if(partes[1] === '/'){
            resultado = Number(partes[0]) / Number(partes[2])
        }else if(partes[1] === '*'){
            resultado = Number(partes[0]) * Number(partes[2])
        }

        res.json({
            message: 'Equação resolvida ok',
            equation,
            resultado
        })
    } catch (erro){
        res.status(400).json({message: 'Erro ao resolver a equação', erro: erro.message});
    }
}

module.exports = { resolverEquacao };
