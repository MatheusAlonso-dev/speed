let personagem = document.getElementById('personagem')
let personagemImg = document.getElementById('personagemImg') 

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