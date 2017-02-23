/**
 * Created by gomes on 22/02/17.
 */
function hasClass(el, cls) {
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(el, cls) {
    if (!hasClass(el, cls)) {
        el.className += " " + cls;
    }
}

function removeClass(el, cls) {
    if (hasClass(el, cls)) {
        let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

export {hasClass, addClass, removeClass};