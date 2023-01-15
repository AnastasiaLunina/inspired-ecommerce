import card from '../../img/card.jpg';


export const renderProducts = () => {
    const products = document.querySelector('.goods');

    products.innerHTML = `
        <div class="container">
            <h2 class="goods__title">New</h2>

            <ul class="goods__list">
            <li class="goods__item">
                <article class="product">
                <a href="#" class="product__link">
                    <img class="product__image" src="${card}" alt="Microfiber Balconette-Bra Wien">
                    <h3 class="product__title">Microfiber Balconette-Bra Wien</h3>
                </a>
                <div class="product__row">
                    <p class="product__price">$129</p>
                    <button class="product__btn-favorite product__btn-favorite_active" aria-label="add to favorites"></button>
                </div>
                <ul class="product__color-list">
                    <li class="product__color-item">
                    <div class="color color-red color-check"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-white"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-black"></div>
                    </li>
                </ul>
                </article>
            </li>

            <li class="goods__item">
                <article class="product">
                <a href="#" class="product__link">
                    <img class="product__image" src="${card}" alt="Microfiber Balconette-Bra Wien">
                    <h3 class="product__title">Microfiber Balconette-Bra Wien</h3>
                </a>
                <div class="product__row">
                    <p class="product__price">$129</p>
                    <button class="product__btn-favorite" aria-label="add to favorites"></button>
                </div>
                <ul class="product__color-list">
                    <li class="product__color-item">
                    <div class="color color-red color-check"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-white"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-black"></div>
                    </li>
                </ul>
                </article>
            </li>

            <li class="goods__item">
                <article class="product">
                <a href="#" class="product__link">
                    <img class="product__image" src="${card}" alt="Microfiber Balconette-Bra Wien">
                    <h3 class="product__title">Microfiber Balconette-Bra Wien</h3>
                </a>
                <div class="product__row">
                    <p class="product__price">$129</p>
                    <button class="product__btn-favorite" aria-label="add to favorites"></button>
                </div>
                <ul class="product__color-list">
                    <li class="product__color-item">
                    <div class="color color-red color-check"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-white"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-black"></div>
                    </li>
                </ul>
                </article>
            </li>

            <li class="goods__item">
                <article class="product">
                <a href="#" class="product__link">
                    <img class="product__image" src="${card}" alt="Microfiber Balconette-Bra Wien">
                    <h3 class="product__title">Microfiber Balconette-Bra Wien</h3>
                </a>
                <div class="product__row">
                    <p class="product__price">$129</p>
                    <button class="product__btn-favorite" aria-label="add to favorites"></button>
                </div>
                <ul class="product__color-list">
                    <li class="product__color-item">
                    <div class="color color-red color-check"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-white"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-black"></div>
                    </li>
                </ul>
                </article>
            </li>

            <li class="goods__item">
                <article class="product">
                <a href="#" class="product__link">
                    <img class="product__image" src="${card}" alt="Microfiber Balconette-Bra Wien">
                    <h3 class="product__title">Microfiber Balconette-Bra Wien</h3>
                </a>
                <div class="product__row">
                    <p class="product__price">$129</p>
                    <button class="product__btn-favorite" aria-label="add to favorites"></button>
                </div>
                <ul class="product__color-list">
                    <li class="product__color-item">
                    <div class="color color-red color-check"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-white"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-black"></div>
                    </li>
                </ul>
                </article>
            </li>

            <li class="goods__item">
                <article class="product">
                <a href="#" class="product__link">
                    <img class="product__image" src="${card}" alt="Microfiber Balconette-Bra Wien">
                    <h3 class="product__title">Microfiber Balconette-Bra Wien</h3>
                </a>
                <div class="product__row">
                    <p class="product__price">$129</p>
                    <button class="product__btn-favorite" aria-label="add to favorites"></button>
                </div>
                <ul class="product__color-list">
                    <li class="product__color-item">
                    <div class="color color-red color-check"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-white"></div>
                    </li>
                    <li class="product__color-item">
                    <div class="color color-black"></div>
                    </li>
                </ul>
                </article>
            </li>
            </ul>
        </div>
    `
} 