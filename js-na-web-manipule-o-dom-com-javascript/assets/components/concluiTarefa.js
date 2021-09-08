const BotaoConclui = () => {
    const BotaoConclui = document.createElement('button')
    BotaoConclui.classList.add('check-button')
    BotaoConclui.innerText = 'concluir'

    BotaoConclui.addEventListener('click', concluirTarefa)

    return BotaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}


export default BotaoConclui