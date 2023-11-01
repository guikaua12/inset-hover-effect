const ul = document.querySelector('ul');
const selection = document.querySelector('.selection');

let current;

ul.addEventListener('pointermove', ({x, y}) => {
    const onPointer = document.elementFromPoint(x, y).closest('.item');

    if (!onPointer || onPointer === current) return;

    current = onPointer;

    const computedStyle = window.getComputedStyle(onPointer, null);

    const paddingTop = parseFloat(computedStyle.paddingTop);
    const paddingRight = parseFloat(computedStyle.paddingRight);
    const paddingBottom = parseFloat(computedStyle.paddingBottom);
    const paddingLeft = parseFloat(computedStyle.paddingLeft);

    const top = onPointer.offsetTop + paddingTop;
    const left = onPointer.offsetLeft + paddingLeft;
    const right = left + onPointer.offsetWidth - (paddingRight * 2);
    const bottom = top + onPointer.offsetHeight - (paddingBottom * 2);

    selection.style.setProperty('--selection-top', `${top}`);
    selection.style.setProperty('--selection-bottom', `${bottom}`);
    selection.style.setProperty('--selection-left', `${left}`);
    selection.style.setProperty('--selection-right', `${right}`);
});