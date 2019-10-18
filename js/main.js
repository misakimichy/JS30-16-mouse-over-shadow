(function(){
    const hero = document.querySelector('.hero');
    const text= document.querySelector('h1');

    const handleShadow = (e) => {
        const { offsetWidth: width, offsetHeight: height } = hero;
        let { offsetX: x, offsetY: y } = e;
        // e is pointing the hero class but if the hero has a child,
        // e points the child when hover over the child element.
        // Offset the child element x and y:
        if (e.currentTarget !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
        }
        console.log(x, y);
    };

    hero.addEventListener('mousemove', handleShadow);
}());