const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInfomacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo=document.createElement("p")
    paragrafo.classList
    
    console.log(dados);    
}
visualizarInfomacoesGlobais()