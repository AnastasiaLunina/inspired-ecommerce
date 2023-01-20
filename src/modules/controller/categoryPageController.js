import { renderHero } from '../render/renderHero';
import { renderProducts } from '../render/renderProducts';
import { renderNavigation } from '../render/renderNavigation';
import { DATA } from '../const';

export const categoryPageController = (routerData) => {
    const { gender, category } = routerData.data;
    const params = { gender, category };

    if (routerData.params?.page) {
        params.page = routerData.params.page;
    }

    const { title } = DATA.navigation[gender].list
                      .find(
                        (item) => item.slug === category,
                      );

    renderNavigation(gender, category);
    renderHero(false);
    renderProducts(title, params);
}