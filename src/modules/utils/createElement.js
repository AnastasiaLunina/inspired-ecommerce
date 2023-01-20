export const createElement = (tag, attr, {append, appends, parent, cb} = {}) => {
    const element = document.createElement(tag);

    if (attr) {
        Object.assign(element, attr);
    }

    if (append && append instanceof HTMLElement) {
        element.append(append);
    }

    if (appends && appends.every(item => item instanceof HTMLElement)) {
        element.append(...appends);
    }

    if (parent && parent instanceof HTMLElement) {
        parent.append(element);
    }

    if (cb && typeof cb === 'function') {
        cb(element);
    }

    return element;
}