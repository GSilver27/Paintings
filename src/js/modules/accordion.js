const accordion = (selectorTarget) => {
    const btns = document.querySelectorAll(selectorTarget);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            btns.forEach(btn => {
                if (!this.classList.contains('active-style')) {
                    btn.classList.remove('active-style');
                    btn.nextElementSibling.classList.remove('active-content');
                    btn.nextElementSibling.style.maxHeight = 0 + 'px';
                }
             });

            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }

        });
    });
};

export default accordion;