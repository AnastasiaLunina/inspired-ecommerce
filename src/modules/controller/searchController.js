import { router } from '../../modules/router';

export const searchController = formSearch => {
    formSearch.addEventListener('submit', (e) => {
        e.preventDefault();
        router.navigate(`search?value=${formSearch.search.value}`)
    })
}