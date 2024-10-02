export function clearAllChild(element) {
    while (element.firstChild) { element.removeChild(element.firstChild); }
}