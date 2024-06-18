const keys = document.querySelectorAll('.key');

keys.forEach(function (key) {
    key.addEventListener('click', function () {
        const keyData = this.getAttribute('data-key');
        console.log(keyData);
        const audio = document.querySelector(`audio[data-key="${keyData}"]`);

        audio.play();
        this.classList.add("playing");

        function removeTransition(event) {
            if (event.propertyName !== 'transform') return;
            this.classList.remove('playing');
        }
        const keysWithTransition = document.querySelectorAll('.key');
        keysWithTransition.forEach(function (key) {
            key.addEventListener('transitionend', removeTransition)

        })



    })

});