/* JAVASCRIPT LINK INÍCIO */

function showModalImagem(idModal){ 
    //idModalImg é usado para avisar que há um parâmetro lá no html, o texto pode ser qualquer coisa para avisar que o parâmetro será um texto.
    const modal = document.querySelector(idModal)
    modal.style.display = "flex"
}

function hideModalImagem(idModal, event) {
    if(event.target.className === 'modal'){
        const modal = document.querySelector(idModal)
        modal.style.display = 'none'
    }
}

//forçar o fechamento após receber a mensagem de alerta
function closeAllModalImagem() {
    const modais = document.querySelectorAll('.modal') // irá pegar todas as classes modal.
    modais.forEach(modal => { //ele irá passar como se fosse um laço um por um, ou seja, se tiver 5 modais ele irá rodar 5 vezes.
        modal.style.display = 'none'
    })
}

//toda a resposta através do servidor:
async function insertImagem(event) {
    event.preventDefault() //tira a forma padrão, e não recarrega a página.
    const formData = new FormData(event.target)
    const response = await fetch('backend/insert-img.php', { //await informa que tem que aguardar.
        method: 'POST',
        body: formData
    })
    const result = await response.json() //await informa que tem que aguardar.
    if (result?.success) {
        closeAllModalImagem() 
        alert('Sua imagem '+result.data.titulo+' foi cadastrada com sucesso!')
        loadImagens()
    }
}

async function loadImagens(){
    const response = await fetch("backend/list-img.php")
    const result = await response.json()
    if (result?.success) {
        const listImagens = document.querySelector('#imagens')
        listImagens.innerHTML = ''
        const imagens = result.data
        imagens.map((img) => {
            listImagens.innerHTML += `
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
                        <img src="assets/img/delete.svg" alt="Apagar"   onclick="deleteImagem(${img.id})">
                        <img src="assets/img/edit.svg" alt="Editar"    onclick="loadImagemData(${img.id})">
                    </div>
                </div>
            </div>`
        })
    } else {
        alert('Erro ao carregar as imagens')
    }
}

async function deleteImagem(id){
    const response = await fetch('backend/delete-img.php?id='+id)
    const result = await response.json()
    if (result?.success) {
        alert('Sua imagem foi deletada com sucesso!')
        loadImagens()
    }
}

async function loadImagemData(id){
    const response = await fetch('backend/get-imagem-by-id.php?id='+id)
    const result = await response.json()
    if (result?.success) {
        showModalImagem("#modal-editar")
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

async function editImagem(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/edit-img.php',{
        method: 'POST', 
        body: formData
    })
    const result = await response.json()
    if (result?.success) {
        closeAllModalImagem()
        alert('Sua imagem '+result.data.titulo+' foi editada com sucesso!')
        loadImagens()
    }
}

function clearFormImagem(idModal) {
    const cover = document.querySelector(`${idModal} input [name=cover]`)
    cover.value=''
    const titulo = document.querySelector(`${idModal} input [name=titulo]`)
    titulo.value=''
    const legenda = document.querySelector(`${idModal} input [name=legenda]`)
    legenda.value=''
    const autor = document.querySelector(`${idModal} input [name=autor]`)
    autor.value=''
}

/* JAVASCRIPT LINK TEXTO */

function showModalTexto(idModal){ 
    //idModal é usado para avisar que há um parâmetro lá no html, o texto pode ser qualquer coisa para avisar que o parâmetro será um texto.
    const modal = document.querySelector(idModal)
    modal.style.display = "flex"
}

//forçar o fechamento após receber a mensagem de alerta
function closeAllModalTexto() {
    const modais = document.querySelectorAll('.modal') // irá pegar todas as classes modal.
    modais.forEach(modal => { //ele irá passar como se fosse um laço um por um, ou seja, se tiver 5 modais ele irá rodar 5 vezes.
        modal.style.display = 'none'
    })
}

function hideModalTexto(idModal, event) {
    if(event.target.className === 'modal'){
        const modal = document.querySelector(idModal)
        modal.style.display = 'none'
    }
}

//toda a resposta através do servidor:
async function insertTexto(event) {
    event.preventDefault() //tira a forma padrão, e não recarrega a página.
    const formData = new FormData(event.target)
    const response = await fetch('backend/insert-text.php', { //await informa que tem que aguardar.
        method: 'POST',
        body: formData
    })
    const result = await response.json() //await informa que tem que aguardar.
    if (result?.success) {
        closeAllModalTexto() 
        alert('Seu texto '+result.data.titulo+' foi cadastrado com sucesso!')
        loadTextos()
    }
}

async function loadTextos(){
    const response = await fetch("backend/list-text.php")
    const result = await response.json()
    if (result?.success) {
        const listTextos = document.querySelector('#imagens')
        listTextos.innerHTML = ''
        const texto = result.data
        texto.map((text) => {
            listTextos.innerHTML += `
            <div class="card-text">
                <div>
                    <div>
                        <h2>${text.titulo}</h2>
                        <p>${text.texto}</p>
                        <p>${text.dia}</p>
                    </div>
                    <div>
                        <img src="assets/img/delete.svg" alt="Apagar"   onclick="deleteTexto(${text.id})">
                        <img src="assets/img/edit.svg" alt="Apagar"    onclick="loadTextoData(${text. id})">
                    </div>
                </div>
            </div>`
        })
    } else {
        alert('Erro ao carregar as imagens')
    }
}

async function deleteTexto(id){
    const response = await fetch('backend/delete-text.php?id='+id)
    const result = await response.json()
    if (result?.success) {
        alert('Seu texto foi deletado com sucesso!')
        loadTextos()
    }
}

async function loadTextoData(id){
    const response = await fetch('backend/get-texto-by-id.php?id='+id)
    const result = await response.json()
    if (result?.success) {
        showModalTexto("#modal-editar")
        const titulo = document.querySelector('#modal-editar input[name=titulo]')
        titulo.value = result.data.titulo
        const texto = document.querySelector('#modal-editar input[name=texto]')
        texto.value = result.data.texto
        const dia = document.querySelector('#modal-editar input[name=dia]')
        dia.value = result.data.dia
        const id = document.querySelector('#modal-editar input[name=id]')
        id.value = result.data.id
    }
}

async function editTexto(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/edit-text.php',{
        method: 'POST', 
        body: formData
    })
    const result = await response.json()
    if (result?.success) {
        closeAllModalTexto()
        alert('Seu texto '+result.data.titulo+' foi editado com sucesso!')
        loadTextos()
    }
}

function clearFormTexto(idModal) {
    const titulo = document.querySelector(`${idModal} input [name=titulo]`)
    titulo.value=''
    const texto = document.querySelector(`${idModal} input [name=texto]`)
    texto.value=''
    const dia = document.querySelector(`${idModal} input [name=dia]`)
    dia.value=''
}