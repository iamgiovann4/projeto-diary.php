function showModal(idModal){ 
    //idModal é usado para avisar que há um parâmetro lá no html, o texto pode ser qualquer coisa para avisar que o parâmetro será um texto.
    const modal = document.querySelector(idModal)
    modal.style.display = "flex"
}

function hideModal(idModal, event) {
    if(event.target.className === 'modal'){
        const modal = document.querySelector(idModal)
        modal.style.display = 'none'
    }
}
//forçar o fechamento após receber a mensagem de alerta
function closeAllModal() {
    const modais = document.querySelectorAll('.modal') // irá pegar todas as classes modal.
    modais.forEach(modal => { //ele irá passar como se fosse um laço um por um, ou seja, se tiver 5 modais ele irá rodar 5 vezes.
        modal.style.display = 'none'
    })
}

//toda a resposta através do servidor:
async function insert(event) {
    event.preventDefault() //tira a forma padrão, e não recarrega a página.
    const formData = new FormData(event.target)
    const response = await fetch('backend/insert.php', { //await informa que tem que aguardar.
        method: 'POST',
        body: formData
    })
    const result = await response.json() //await informa que tem que aguardar.
    if (result?.success) {
        closeAllModal() 
        alert('Sua imagem '+result.data.titulo+' foi cadastrada com sucesso!')
        loadProductions()
    }
}

async function loadProductions(){
    const response = await fetch("backend/list.php")
    const result = await response.json()
    if (result?.success) {
        const listProductions = document.querySelector('#productions')
        listProductions.innerHTML = ''
        const imagens = result.data
        imagens.map((img) => {
            listProductions.innerHTML += `
            <div class="card-img">
                <a href="imagem">
                    <div class="mask"></div>
                    <img src="${img.cover}" alt="${img.titulo}" style="min-height:353px">
                </a>
                <div>
                    <a href="imagem">
                        <h2>${img.titulo}</h2>
                    </a>
                    <div>
                        <p>${img.legenda}</p>
                    </div>
                    <div>
                        <p>${img.autor}</p>
                        <img src="assets/img/delete.svg" alt="Apagar"   onclick="deleteProduction(${img.id})">
                        <img src="assets/img/edit.svg" alt="Apagar"    onclick="loadProductionData(${img. id})">
                    </div>
                </div>
            </div>`
        })
    } else {
        alert('Erro ao carregar as imagens')
    }
}

async function deleteProduction(id){
    const response = await fetch('backend/delete.php?id='+id)
    const result = await response.json()
    if (result?.success) {
        alert('Sua imagem foi deletada com sucesso!')
        loadProductions()
    }
}

async function loadProductionData(id){
    const response = await fetch('backend/get-production-by-id.php?id='+id)
    const result = await response.json()
    if (result?.success) {
        showModal("#modal-editar")
        const cover = document.querySelector('#modal-editar input[name=cover]')
        cover.value = result.data.cover
        const titulo = document.querySelector('#modal-editar input[name=titulo]')
        titulo.value = result.data.titulo
        const legenda = document.querySelector('#modal-editar input[name=legenda]')
        legenda.value = result.data.legenda
        const autor = document.querySelector('#modal-editar input[name=autor]')
        autor.value = result.data.autor
        const id = document.querySelector('#modal-editar input[name=id]')
        id.value = result.data.id
    }
}

async function edit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/edit.php',{
        method: 'POST', 
        body: formData
    })
    const result = await response.json()
    if (result?.success) {
        closeAllModal()
        alert('Sua imagem '+result.data.titulo+' foi editada com sucesso!')
        loadProductions()
    }
}

function clearForm(idModal) {
    const cover = document.querySelector(`${idModal} input [name=cover]`)
    cover.value=''
    const titulo = document.querySelector(`${idModal} input [name=titulo]`)
    titulo.value=''
    const legenda = document.querySelector(`${idModal} input [name=legenda]`)
    legenda.value=''
    const autor = document.querySelector(`${idModal} input [name=autor]`)
    autor.value=''
}