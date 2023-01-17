import './index.html';
import './index.scss';
import { createElement } from './modules/createElement';
import { API_URL, DATA } from './modules/const';

import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';
import { mainPage } from './modules/mainPage/mainPage';
import { womenMainPage } from './modules/mainPage/womenMainPage';
import { menMainPage } from './modules/mainPage/menMainPage';
import { router } from './modules/router';
import { getData } from './modules/getData';
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
        
        router.on('women', () => {
            womenMainPage();
        });
        
        router.on('men', () => {
            menMainPage();
        });
        
        // setTimeout(() => {
        //     router.navigate('men');
        // }, 3000)
        
        // setTimeout(() => {
        //     router.navigate('women');
        // }, 6000)
        
    } catch(e) {
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


