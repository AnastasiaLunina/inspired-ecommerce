import './index.html';
import './index.scss';
import { createElement } from './modules/utils/createElement';
import { API_URL, DATA } from './modules/const';

import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';
import { mainPageController } from './modules/controller/mainPageController';
import { router } from './modules/utils/router';
import { getData } from './modules/getData';
import { categoryPageController } from './modules/controller/categoryPageController';
import { createCssColors } from './modules/createCssColors';
import { searchPageController } from './modules/controller/searchController';

const init = async () => {
    try {
      router.on('*', () => {
            renderHeader();
            renderFooter();
        });

        DATA.navigation = await getData(`${API_URL}/api/categories`);
        DATA.colors = await getData(`${API_URL}/api/colors`);

        createCssColors(DATA.colors);
        
        router.on('/', () => {
            mainPageController();
        });

        router.on('search', (data) => {
            console.log(data.params.value);
        });
        
        router.on('women', () => {
            mainPageController('women');
        });
        
        router.on('men', () => {
            mainPageController('men');
        });

        router.on('/:gender/:category', categoryPageController);

        router.on('search', searchPageController)
        
        // setTimeout(() => {
        //     router.navigate('men');
        // }, 3000)
        
        // setTimeout(() => {
        //     router.navigate('women');
        // }, 6000)
        
    } catch(e) {
        console.warn(e);
        createElement('h2', 
        {
            textContent: 'Something went wrong. Try again later.'
        },
        {
            parent: document.querySelector('main'),
            cb(h2) {
                h2.style.textAlign = 'center'
            }
        })
    } finally {
        router.resolve();
    }
}

init();


