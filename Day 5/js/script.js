const panelElements = document.querySelectorAll('.panel');

function setActive() {
    panelElements.forEach(ele => ele === this ? this.classList.toggle('active') : ele.classList.remove('active'));
}

function setTranslate(e) {
    if (e.propertyName.includes('flex')) this.querySelector('p').classList.toggle('active');
}

panelElements.forEach(ele => ele.addEventListener('click', setActive));
panelElements.forEach(ele => ele.addEventListener('transitionend', setTranslate));