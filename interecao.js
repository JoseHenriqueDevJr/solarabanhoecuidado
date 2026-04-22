const items = document.querySelectorAll('.item');
let current = 1;

function update() {
    items.forEach(item => {
        item.classList.remove('active', 'prev', 'next');
    });

    items[current].classList.add('active');

    let prev = (current - 1 + items.length) % items.length;
    let next = (current + 1) % items.length;

    items[prev].classList.add('prev');
    items[next].classList.add('next');
}

function move(direction) {
    current = (current + direction + items.length) % items.length;
    update();
}
update();
