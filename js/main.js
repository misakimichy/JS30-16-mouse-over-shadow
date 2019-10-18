(function(){
    const hero = document.querySelector('.hero');
    const text = document.querySelector('h1');
    const walk = 100;

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
        
        // Handle how far the shadow goes (range will be between -50 to 50)
        const xWalk = Math.round((x / width * walk)) - (walk / 2);
        const yWalk = Math.round((y / height * walk)) - (walk / 2);
        
        // Single shadow
        text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.3)`;
        
        // Multiple shadows
        // text.style.textShadow = `
        //     ${xWalk}px ${yWalk}px 0 rgba(255, 0, 0, 0.4),
        //     ${xWalk * -1}px ${yWalk}px 0 rgba(102, 51, 153, 0.3),
        //     ${yWalk}px ${xWalk * -1}px 0 rgba(255, 165, 0, 0.3),
        //     ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.3)
        // `;
    };

    hero.addEventListener('mousemove', handleShadow);
}());