import { createElement } from "../createElement";
import { searchController } from "../controller/searchController";

export const search = createElement('div', 
{
    className: 'search'
});

export const searchToggle = () => {
    search.classList.toggle('search_show');
};

const container = createElement('div', 
{
    className: 'container',
},
{
    parent: search,
});

const form = createElement('form', 
{
    className: 'search__form',
}, 
{
    parent: container,
    cb: searchController,
});

createElement('input', 
{
    className: 'search__input',
    type: 'search',
    name:'search',
    placeholder: 'Search...',
}, 
{
    parent: form,
});

createElement('button', 
{
    className: 'search__btn',
    type: 'submit',
    textContent:'Search',
}, 
{
    parent: form,
});