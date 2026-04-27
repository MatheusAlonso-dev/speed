let personagem = document.getElementById('personagem')
let personagemImg = document.getElementById('personagemImg')
let container = document.getElementById('container')
let rodando = true
let pontos = 0
let dificuldade = 1
let spanPontuacao = document.getElementById('pontuacao')
let spanNivel = document.getElementById('nivel')
let spanPontuacaoGameOver = document.getElementById('scoreGameOver')
let spanNivelGameOver = document.getElementById('nivelGameOver')
let camada0 = document.getElementById('camada0')
let podeColidir = true
let podeMover = true
let vida = 3
let vida1 = document.getElementById('vida1')
let vida2 = document.getElementById('vida2')

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowUp' && podeMover){
        if(personagem.classList.contains('personagemSubir')){

        }else{
            personagem.classList.add('personagemSubir')
            personagem.classList.remove('personagemDescer')
            personagemImg.src = 'img/personagemSubindo.png'
            setTimeout(() => {
                personagemImg.src = "img/personagem.png";
            }, 200);
            podeColidir = false
            setTimeout(() => {
                podeColidir = true;
            }, 70);
        }

    }
    if(event.key === 't'){
       gameover()
    }
    if(event.key === 'ArrowDown' && podeMover){
        if(personagem.classList.contains('personagemDescer')){

        }else{
            personagem.classList.add('personagemDescer')
            personagem.classList.remove('personagemSubir')
            personagemImg.src = 'img/personagemDescendo.png'
            setTimeout(() => {
                personagemImg.src = "img/personagem.png";
            }, 200);
            podeColidir = false
            setTimeout(() => {
                podeColidir = true;
            }, 70);

        }
    }
});



function play(){
    if(rodando === false) return
    if(pontos == 20) dificuldade = 2
    if(pontos == 40) dificuldade = 3
    if(pontos == 60) dificuldade = 4
    if(pontos == 80) dificuldade = 5
    if(pontos == 100) dificuldade = 6
    if(pontos == 150) dificuldade = 7
    if(pontos == 200) dificuldade = 8


    pontos++

    document.getElementById('pontuacao').textContent = pontos

    spanNivel.textContent = dificuldade
    spanPontuacao.textContent = pontos
    spanNivelGameOver.textContent = dificuldade
    spanPontuacaoGameOver.textContent = pontos
    let novo = document.createElement('div');
    let novoImg = document.createElement('img')
    novoImg.src = 'img/nave3.png'
    novoImg.classList.add('obstaculoImg')
    novo.appendChild(novoImg)
    localObstaculo = gerarLocalObstaculo()


    switch(dificuldade){
        case 1:
            frequenciaObstaculo = gerarFrequenciaObstaculo(2)            
            if(frequenciaObstaculo === 1){
                if(localObstaculo === 1){                    
                    novo.classList.add('obstaculo', 'obstaculoNivel1' ,'obstaculoCima')
                    container.appendChild(novo)
                }else{
                    novo.classList.add('obstaculo', 'obstaculoNivel1' ,'obstaculoBaixo')
                    container.appendChild(novo)
                }                
            }
            setTimeout(play, 1 * 1000);
        break;
        case 2:
            camada0.style.backgroundColor = 'rgba(0, 0, 255, 0.106)'
            frequenciaObstaculo = gerarFrequenciaObstaculo(2)
            if(frequenciaObstaculo === 1){
                if(localObstaculo === 1){
                    novo.classList.add('obstaculo', 'obstaculoNivel2' ,'obstaculoCima')
                    container.appendChild(novo)
                }else{
                    novo.classList.add('obstaculo', 'obstaculoNivel2' ,'obstaculoBaixo')
                    container.appendChild(novo)
                }                
            }
            setTimeout(play, 1 * 1000);
        break;
        case 3:
            camada0.style.backgroundColor = 'rgba(0, 13, 255, 0.232)'
            frequenciaObstaculo = gerarFrequenciaObstaculo(2)
            if(frequenciaObstaculo === 1){
                if(localObstaculo === 1){
                    novo.classList.add('obstaculo', 'obstaculoNivel3' ,'obstaculoCima')
                    container.appendChild(novo)
                }else{
                    novo.classList.add('obstaculo', 'obstaculoNivel3' ,'obstaculoBaixo')
                    container.appendChild(novo)
                }                
            }
            setTimeout(play, 1 * 1000);
        break;
        case 4:
            camada0.style.backgroundColor = 'rgba(0, 0, 0, 0.357)'            
            frequenciaObstaculo = gerarFrequenciaObstaculo(1)
            if(frequenciaObstaculo === 1){
                if(localObstaculo === 1){
                    novo.classList.add('obstaculo', 'obstaculoNivel4' ,'obstaculoCima')
                    container.appendChild(novo)
                }else{
                    novo.classList.add('obstaculo', 'obstaculoNivel4' ,'obstaculoBaixo')
                    container.appendChild(novo)
                }                
            }
            setTimeout(play, 1 * 1000);
        break;
        case 5:           
            camada0.style.backgroundColor = 'rgba(0, 0, 0, 0.57)'   
            frequenciaObstaculo = gerarFrequenciaObstaculo(1)
            if(frequenciaObstaculo === 1){
                if(localObstaculo === 1){
                    novo.classList.add('obstaculo', 'obstaculoNivel5' ,'obstaculoCima')
                    container.appendChild(novo)
                }else{
                    novo.classList.add('obstaculo', 'obstaculoNivel5' ,'obstaculoBaixo')
                    container.appendChild(novo)
                }                
            }
            setTimeout(play, 1 * 1000);
        break;
        case 6:
            camada0.style.backgroundColor = 'rgba(0, 0, 0, 0.82)' 
            frequenciaObstaculo = gerarFrequenciaObstaculo(1)
            if(frequenciaObstaculo === 1){
                if(localObstaculo === 1){
                    novo.classList.add('obstaculo', 'obstaculoNivel6' ,'obstaculoCima')
                    container.appendChild(novo)
                }else{
                    novo.classList.add('obstaculo', 'obstaculoNivel6' ,'obstaculoBaixo')
                    container.appendChild(novo)
                }                
            }
            setTimeout(play, 0.5 * 1000);
        break;
        case 7:
            camada0.style.backgroundColor = 'rgba(0, 0, 0, 0.82)' 
            frequenciaObstaculo = gerarFrequenciaObstaculo(1)
            if(frequenciaObstaculo === 1){
                if(localObstaculo === 1){
                    novo.classList.add('obstaculo', 'obstaculoNivel7' ,'obstaculoCima')
                    container.appendChild(novo)
                }else{
                    novo.classList.add('obstaculo', 'obstaculoNivel7' ,'obstaculoBaixo')
                    container.appendChild(novo)
                }                
            }
            setTimeout(play, 0.5 * 1000);
        break;
        case 8:
            camada0.style.backgroundColor = 'rgba(0, 0, 0, 0.82)' 
            frequenciaObstaculo = gerarFrequenciaObstaculo(1)
            if(frequenciaObstaculo === 1){
                if(localObstaculo === 1){
                    novo.classList.add('obstaculo', 'obstaculoNivel8' ,'obstaculoCima')
                    container.appendChild(novo)
                }else{
                    novo.classList.add('obstaculo', 'obstaculoNivel8' ,'obstaculoBaixo')
                    container.appendChild(novo)
                }                
            }
            setTimeout(play, 0.5 * 1000);
        break;
    }
    novo.addEventListener('animationend', () => {
        novo.remove();
    });
}


play()

function gerarFrequenciaObstaculo(max){
    return Math.floor(Math.random() * max) + 1;
}

function gerarLocalObstaculo(){
    return Math.floor(Math.random() * 2) + 1;
}

function colidiu(el1, el2) {
    const a = el1.getBoundingClientRect();
    const b = el2.getBoundingClientRect();

    return (
        a.right >= b.left &&
        a.left <= b.right &&
        a.bottom >= b.top &&
        a.top <= b.bottom
    );
}

setInterval(() => {

    if (!personagem || !podeColidir) return;

    const elementos = document.querySelectorAll('.obstaculo');

    for (let obs of elementos) {
        if (colidiu(personagem, obs)) {
            vida --

            explosao()

            podeColidir = false;
            podeMover = false

            if(vida == 2){
                vida2.remove()
            }
            if(vida == 1){
                vida1.remove()
            }

            

            if(vida <= 0){
                setTimeout(() => {
                    personagem.remove()
                }, 1000);


                gameover()
                document.addEventListener("wheel", function(event) {
                    if (event.ctrlKey) {
                        event.preventDefault();
                    }
                }, { passive: false });

            }else{
                setTimeout(() => {
                    podeMover = true;
                }, 1000);

                setTimeout(() => {
                    podeColidir = true;
                }, 3000);
            }


            break; // para o loop após colisão
        }
    }

}, 70);

function gameover(){
    rodando = false
    let gameOverCima = document.getElementById('camada-2')
    let gameOverBaixo = document.getElementById('camada-3')

    gameOverCima.classList.add('gameOverCima')
    gameOverBaixo.classList.add('gameOverBaixo')

    setTimeout(() => {
        container.style.display = 'none'
    }, 3000);
}

function explosao(){
     personagem.classList.add('personagemCapote')
        personagemImg.src = 'img/personagemExplosao1.png'
        setTimeout(()=>{
            personagemImg.src = 'img/personagemExplosao1.png'
        },60)
        setTimeout(()=>{
            personagemImg.src = 'img/personagemExplosao2.png'
        },60)
        setTimeout(()=>{
            personagemImg.src = 'img/personagemExplosao3.png'
        },60)
        setTimeout(()=>{
            personagemImg.src = 'img/personagemExplosao4.png'
        },60)
        setTimeout(() => {
                personagem.classList.remove('personagemCapote')
                personagemImg.src = 'img/personagem.png'

            }, 1000);
}

function retry(){
    location.reload()
}