const keys = document.querySelectorAll('.key');

keys.forEach(function (key) {
    key.addEventListener('click', function () {
        const keyData = this.getAttribute('data-key');
        console.log(keyData);
        const audio = document.querySelector(`audio[data-key="${keyData}"]`);
        audio.play();
    })

});

