document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn');

    btn.addEventListener('mouseover', () => {
        btn.classList.add('hover');
    });

    btn.addEventListener('mouseout', () => {
        btn.classList.remove('hover');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        document.querySelector('.menu').classList.toggle('active');
    });
});