export const renderFooter = () => {
    // const footer = document.querySelector('.footer');

    // navigation.textContent = '';

    // const container = createElement('div', 
    // {
    //     className: 'footer',
    // },
    // {
    //     parent: footer,
    // });

   
   
    `
    <div class="container">
        <div class="footer__container">
        <div class="footer-item footer__item-category footer-category">
            <h2 class="footer__title footer-category__title">Catalog</h2>

            <ul class="footer-category__list">
            <li class="footer-category__item">
                <h3 class="footer-category__subtitle">
                <a href="#" class="footer__link">Women</a>
                </h3>

                <ul class="footer-category__sublist">
                <li class="footer-category__subitem">
                    <a href="#" class="footer__link">Bra</a>
                </li>
                <li class="footer-category__subitem">
                    <a href="#" class="footer__link">Underwear</a>
                </li>
                <li class="footer-category__subitem">
                    <a href="#" class="footer__link">Socks</a>
                </li>
                <li class="footer-category__subitem">
                    <a href="#" class="footer__link">Gowns</a>
                </li>
                <li class="footer-category__subitem">
                    <a href="#" class="footer__link">Thermo</a>
                </li>
                <li class="footer-category__subitem">
                    <a href="#" class="footer__link">Pajamas</a>
                </li>
                </ul>

            </li>

            <li class="footer-category__item">
                <h3 class="footer-category__subtitle">
                <a href="#" class="footer__link">Men</a>
                </h3>
                <ul class="footer-category__sublist">
                <li class="footer-category__subitem">
                    <a href="#" class="footer__link">Underwear</a>
                </li>
                <li class="footer-category__subitem">
                    <a href="#" class="footer__link">Socks</a>
                </li>
                <li class="footer-category__subitem">
                    <a href="#" class="footer__link">Robes</a>
                </li>
                <li class="footer-category__subitem">
                    <a href="#" class="footer__link">Thermo</a>
                </li>
                </ul>
            </li>
            </ul>
        </div>

        <div class="footer-item footer__item-social footer-social">
            <h2 class="footer__title footer-social__title">Contact us</h2>
            <p class="footer-social__subtitle">You can find us here:</p>
            <ul class="footer-social__list">
            <li class="footer-social__item">
                <a href="#" class="footer-social__link footer-social__link-vk footer__link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37281 0 0 5.37256 0 12C0 18.6274 5.37281 24 12 24C18.6272 24 24 18.6274 24 12C24 5.37256 18.6272 0 12 0ZM18.087 13.2978C18.6463 13.8441 19.2381 14.3583 19.7402 14.961C19.9626 15.2277 20.1723 15.5034 20.3319 15.8135C20.5597 16.2557 20.354 16.7406 19.9582 16.7669L17.4997 16.7664C16.8648 16.8189 16.3595 16.5628 15.9335 16.1287C15.5935 15.7828 15.278 15.4133 14.9505 15.0556C14.8167 14.9087 14.6757 14.7705 14.5078 14.6617C14.1726 14.4437 13.8815 14.5105 13.6895 14.8606C13.4938 15.2169 13.4491 15.6117 13.4304 16.0082C13.4037 16.5879 13.2288 16.7394 12.6472 16.7666C11.4044 16.8248 10.2251 16.6362 9.12908 16.0097C8.16221 15.457 7.41385 14.677 6.76174 13.7938C5.49189 12.0722 4.51937 10.1826 3.64554 8.23881C3.44888 7.80104 3.59276 7.56681 4.0757 7.55773C4.87808 7.54226 5.68045 7.54423 6.48282 7.55699C6.80937 7.56215 7.02543 7.74899 7.1509 8.05713C7.58449 9.12393 8.11605 10.1389 8.78216 11.0803C8.95967 11.3309 9.14087 11.5809 9.39892 11.7579C9.68372 11.9534 9.90077 11.8888 10.0351 11.5708C10.121 11.3688 10.1581 11.1527 10.1767 10.9361C10.2406 10.1944 10.2482 9.45293 10.1377 8.71415C10.069 8.25183 9.80894 7.95327 9.34809 7.86586C9.11337 7.82142 9.14774 7.73451 9.26191 7.60045C9.46005 7.36868 9.64567 7.22529 10.0167 7.22529L12.7943 7.2248C13.232 7.31073 13.3303 7.50715 13.3897 7.94811L13.3921 11.0348C13.387 11.2055 13.4778 11.7113 13.7842 11.823C14.0297 11.904 14.1918 11.7071 14.3386 11.5517C15.0047 10.8448 15.4793 10.0105 15.9043 9.14701C16.0919 8.7662 16.2537 8.37213 16.4108 7.97733C16.5277 7.6854 16.7094 7.54177 17.0389 7.54668L19.7136 7.54987C19.7924 7.54987 19.8725 7.55061 19.9506 7.56411C20.4014 7.64121 20.5248 7.83517 20.3854 8.27491C20.1659 8.96581 19.7394 9.54132 19.3225 10.1183C18.8757 10.736 18.3991 11.3322 17.9567 11.9526C17.5501 12.5198 17.5822 12.8053 18.087 13.2978Z"/>
                </svg>                  
                </a>
            </li>
            <li class="footer-social__item">
                <a href="#" class="footer-social__link footer-social__link-fb footer__link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.0703 24 12.1406 24 12.2109 23.9953V14.6578H9.63281V11.6531H12.2109V9.44062C12.2109 6.87656 13.7766 5.47969 16.0641 5.47969C17.1609 5.47969 18.1031 5.55938 18.375 5.59688V8.27813H16.8C15.5578 8.27813 15.3141 8.86875 15.3141 9.73594V11.6484H18.2906L17.9016 14.6531H15.3141V23.5359C20.3297 22.0969 24 17.4797 24 12Z"/>
                </svg>                                   
                </a>
            </li>
            </ul>
        </div>

        <div class="footer-item footer__item-contacts footer-contacts">
            <a class="footer__link" href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
            <a class="footer__link" href="tel:89304902620">8 930 490 26 20</a>
        </div>

        <div class="footer-item footer__item-copyright footer-copyright">
            <p>© INSPIRED, 2023</p>
        </div>

        <div class="footer-item footer__item-development footer-development">
            <ul class="footer-development__list">
            <li class="footer-development__item">
                Designer: <a href="#" class="footer__link">Anastasia Ilina</a>
            </li>
            <li class="footer-development__item">
                Developer: <a href="#" class="footer__link">Anastasia Lunina</a>
            </li>
            </ul>
        </div>
        </div>
  </div>  
    `;
}