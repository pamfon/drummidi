function playSound (audioSelector) {
    const element = document.querySelector(audioSelector);

    if (element != null && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('Element not find, or invalid selector');
    }
}

const listOfKeys = document.querySelectorAll('.key');

for (let i = 0; i < listOfKeys.length; i++){

    const key = listOfKeys[i];
    const sound = key.classList[1];
    const idAudio = `#sound_${sound}`;

    key.onclick = function () {
        playSound(idAudio);
    };

    key.onkeydown = function (event) {
        
        if (event.code === 'Space' || event.code === 'Enter'){
            key.classList.add('ativa');
        }
        
    }
    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
    
}




