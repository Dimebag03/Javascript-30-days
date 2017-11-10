const input = document.querySelector('input[name="theme-color"]');

function updateColor() {
    document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

input.addEventListener('change', updateColor);