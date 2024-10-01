document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const colorBox = document.getElementById('color-box');
    const submitBtn = document.getElementById('submit-btn');

    function toggleMode() {
        // Altera o modo no body
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            toggleBtn.textContent = 'Alternar Modo Claro';
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            toggleBtn.textContent = 'Alternar Modo Escuro';
        }
    }

    toggleBtn.addEventListener('click', toggleMode);

    function redirectToFlamengo() {
        window.location.href = 'https://sociogigante.com';
    }

    submitBtn.addEventListener('click', redirectToFlamengo);
});
