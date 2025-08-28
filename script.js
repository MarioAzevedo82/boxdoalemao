const menuLinks = document.querySelectorAll('.menu a');

const produtos =document.querySelectorAll('.produto');

menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const categoria = link.getAttribute('href').replace('#','');

        produtos.forEach(prod => {
            if(categoria === 'todos' || prod.dataset.categoria === categoria){
                prod.style.display = 'block';
            } else {
                prod.style.display = 'none'
            }
        })
    })
}) 