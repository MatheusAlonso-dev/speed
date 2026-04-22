let personagem = document.getElementById('personagem')
let personagemImg = document.getElementById('personagemImg')
let container = document.getElementById('container')
let rodando = true
let pontos = 0
let dificuldade = 1
let spanPontuação = document.getElementById('pontuacao')
let spanNivel = document.getElementById('nivel')
let camada0 = document.getElementById('camada0')

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowUp'){
        if(personagem.classList.contains('personagemSubir')){

        }else{
            personagem.classList.add('personagemSubir')
            personagem.classList.remove('personagemDescer')
            personagemImg.src = 'img/personagemSubindo.png'
            setTimeout(() => {
                personagemImg.src = "img/personagem.png";
            }, 200);
        }

    }
    if(event.key === 'p'){
        personagem.classList.add('personagemCapote')
        setTimeout(() => {
                personagem.classList.remove('personagemCapote')
            }, 1000);
    }
    if(event.key === 'ArrowDown'){
        if(personagem.classList.contains('personagemDescer')){

        }else{
            personagem.classList.add('personagemDescer')
            personagem.classList.remove('personagemSubir')
            personagemImg.src = 'img/personagemDescendo.png'
            setTimeout(() => {
                personagemImg.src = "img/personagem.png";
            }, 200);

        }
    }
});



function play(){
    if(pontos == 20) dificuldade = 2
    if(pontos == 40) dificuldade = 3
    if(pontos == 60) dificuldade = 4
    if(pontos == 80) dificuldade = 5
    if(pontos == 100) dificuldade = 6
    if(pontos == 150) dificuldade = 7


    pontos++

    document.getElementById('pontuacao').textContent = pontos

    spanNivel.textContent = dificuldade
    spanPontuação.textContent = pontos
    let novo = document.createElement('div');
    let novoImg = document.createElement('img')
    novoImg.src = 'img/nave3.png'
    novoImg.classList.add('nave')
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
    }
}

play()

function gerarFrequenciaObstaculo(max){
    return Math.floor(Math.random() * max) + 1;
}

function gerarLocalObstaculo(){
    return Math.floor(Math.random() * 2) + 1;
}