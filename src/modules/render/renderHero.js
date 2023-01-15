import { createElement } from "../createElement";

const container = createElement('div', 
{
    className: 'container',
});

const content = createElement('div', 
{
    className: 'hero__content',
}, 
{
    parent: container,
});

const titleHero = createElement('h2', 
{
    className: 'hero__title',
}, 
{
    parent: content,
});

const linkHero = createElement('a', 
{
    className: 'hero__link',
    textContent: 'Перейти'
}, 
{
    parent: content,
})

export const renderHero = (gender) => {
    const hero = document.querySelector(`.hero`);

    if (!gender) {
        hero.style.display = 'none';
        return;
    }

    hero.style.display = '';

    hero.className = `hero hero__${gender}`;

    hero.append(container)

    titleHero.textContent = gender === 'women' ? 'New collection Balconette-Bra' : 'New collection of boxers';

} 