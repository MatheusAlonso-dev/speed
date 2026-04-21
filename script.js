let personagem = document.getElementById('personagem')
let cenario = document.getElementById('cenario')


let rodando = true

document.addEventListener('keydown', function(event){
    if(event.key === ' '){


        personagem.classList.add('personagem-pular');

        // remove depois que a animação termina
        setTimeout(() => {
            personagem.classList.remove('personagem-pular');

        }, 600);
    }
    if (event.key === "ArrowDown") {
        personagem.classList.add('personagem-abaixar')
    }
});

document.addEventListener("keyup", function(event) {
    personagem.classList.remove('personagem-abaixar');
});



let pontos = 0
let dificuldade = 1
let span = 1.5
let classeObstaculo = 'obstaculo-mover1'
let tipoObstaculo

function gerar() {
    return Math.floor(Math.random() * 2) + 1;
}


function teste() {
    if(!rodando) return
    if(pontos == 10) dificuldade = 2
    if(pontos == 20) dificuldade = 3
    if(pontos == 30) dificuldade = 4
    if(pontos == 40) dificuldade = 5
    if(pontos == 50) dificuldade = 6
    if(pontos == 60) dificuldade = 7
    if(pontos == 70) dificuldade = 8
    if(pontos == 80) dificuldade = 9
    if(pontos == 90) dificuldade = 10
    tipoObstaculo = gerar()

    pontos++
    document.getElementById('pontos').textContent = pontos
    
    switch(dificuldade){
        case 1:
            span = 2
        break;

        case 2:
            span = 1
            classeObstaculo  = 'obstaculo-mover2'
        break;

        case 3:
            span = 0.7
            classeObstaculo  = 'obstaculo-mover3'
        break;

        case 4:
            span = 0.7
            classeObstaculo  = 'obstaculo-mover4'
        break;

        case 5:
            span = 0.7
            classeObstaculo  = 'obstaculo-mover5'
        break;

        case 6:
            span = 0.7
            classeObstaculo  = 'obstaculo-mover6'
        break;

        case 7:
            span = 0.6
            classeObstaculo  = 'obstaculo-mover7'
        break;

        case 8:
            span = 0.5
            classeObstaculo  = 'obstaculo-mover8'
        break;

        case 9:
            span = 0.4
            classeObstaculo  = 'obstaculo-mover9'
        break;

        case 10:
            span = 0.3
            classeObstaculo  = 'obstaculo-mover10'
        break;

    }    
    
    const tempo = Math.floor(Math.random() * 4);

    let nova = document.createElement('div');

    if(tipoObstaculo == 1){
        nova.classList.add('obstaculo', classeObstaculo);
        cenario.appendChild(nova);
        setTimeout(teste, span * 1000);

    }else{
        nova.classList.add('obstaculo', classeObstaculo, 'obstaculo-2');
        cenario.appendChild(nova);
        setTimeout(teste, span * 1000);
    }
    
}

 teste()


// ===== DETECÇÃO DE COLISÃO =====

// função de colisão
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

// loop de verificação (ajuste as classes se necessário)
setInterval(() => {
    const player = document.querySelector(".personagem");
    const obstaculos = document.querySelectorAll(".obstaculo");

    if (!player) return;

    obstaculos.forEach(obs => {
        if (colidiu(player, obs)) {
            console.log("COLIDIU");
            rodando = false

            const elementos = document.querySelectorAll(".obstaculo");

            elementos.forEach(el => {
                el.remove();
            });

        }
    });
}, 50);