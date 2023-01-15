import './index.html';
import './index.scss';

import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';
import { mainPage } from './modules/mainPage/mainPage';
import { womenMainPage } from './modules/mainPage/womenMainPage';
import { menMainPage } from './modules/mainPage/menMainPage';
import { router } from './modules/router';

router.on('*', () => {
    renderHeader();
    renderFooter();
});

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

router.resolve();

