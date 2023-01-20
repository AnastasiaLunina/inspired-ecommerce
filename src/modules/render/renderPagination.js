import { createElement } from "../utils/createElement";
import { getUrl } from "../utils/getUrl";

export const renderPagination = (wrapperPagination, page, pages, count) => {
    wrapperPagination.textContent = '';

    const paginationList = createElement(
      "ul",
      {
        className: "pagination__list",
      },
      {
        parent: wrapperPagination,
      }
    );
const isNotStart = page - Math.floor(count / 2) > 1;
const isEnd = page + Math.floor(count / 2) > pages;
if(count > pages) {
    count = pages;
}

for ( let i = 0; i < count; i++) {
    let n = i + 1;

    if(isNotStart){
        if(isEnd) {
            n = pages - count + i + 1
        } else {
            n = page - Math.floor(count / 2) + i
        }
    }
createElement(
  "li",
  {
    className: "pagination__item",
  },
  {
    parent: paginationList,
    append: createElement("a", {
      textContent: n,
      href: getUrl({page: n}),
      className: `pagination__link 
        ${page === n ? "pagination__link_active" : ""}`,
    }),
  }
);
}
if (pages > count) {
    createElement(
      "a",
      {
        className: `pagination__arrow pagination__arrow_start 
        ${!isNotStart ? "pagination__arrow_disabled" : ""}`,
        href: getUrl({ page: 1 }),
        textContent: "start",
        ariaLabel: "В начало",
      },
      {
        parent: wrapperPagination,
      }
    );
        createElement(
          "a",
          {
            className: `pagination__arrow pagination__arrow_end
            ${isEnd ? "pagination__arrow_disabled" : ""}`,
            href: getUrl({ page: pages }),
            textContent: "end",
            ariaLabel: "В конец",
          },
          {
            parent: wrapperPagination,
          }
        );
}
};