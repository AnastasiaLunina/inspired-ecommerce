export const renderHero = (gender) => {
    const hero = document.querySelector('.hero');

    if (!gender) {
        hero.style.display = 'none';
        return;
    }

    hero.style.display = '';

    hero.className = `hero hero__${gender}`;

    hero.innerHTML = `
        <div class="container">
            <div class="hero__content">
            <h2 class="hero__title">New collection Balconette-Bra</h2>
            <a href="#" class="hero__link">Go</a>
            </div>
        </div>
    `
} 