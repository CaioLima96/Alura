const BotaoDeleta = () => {
    const BotaoDeleta = document.createElement('button')
    BotaoDeleta.innerText = 'deletar'
    BotaoDeleta.addEventListener('click', deletarTarefa)
    
    return BotaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target

    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta
}

export default BotaoDeleta