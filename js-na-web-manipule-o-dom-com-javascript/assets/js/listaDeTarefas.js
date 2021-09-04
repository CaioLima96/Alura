const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    console.log(valor)
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    lista.appendChild(tarefa)
    input.value = ' '
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

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