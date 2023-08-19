document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click' , () => {
            console.log('Added To Cart');
        });

    });