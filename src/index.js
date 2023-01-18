import './index.html';
import './index.scss';
import { createElement } from './modules/createElement';
import { API_URL, DATA } from './modules/const';

import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';
import { mainPage } from './modules/mainPage';
import { router } from './modules/router';
import { getData } from './modules/getData';
import { categoryPage } from './modules/categoryPage';
import { createCssColors } from './modules/createCssColors';

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
            mainPage();
        });

        router.on('search', (data) => {
            console.log(data.params.value);
        });
        
        router.on('women', () => {
            mainPage('women');
        });
        
        router.on('men', () => {
            mainPage('men');
        });

        router.on('/:gender/:category', categoryPage);
        
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


