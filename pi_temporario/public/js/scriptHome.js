function gerenciarVisibilidadeNavBar() {
    // Assumindo que os links a serem gerenciados estão dentro de um elemento <nav>
    // e que o link de login/logout tem uma classe específica para ser ignorado.
    const navLinks = document.querySelectorAll('nav a:not(.login-link)'); // Ajuste o seletor se necessário
    const path = window.location.pathname;

    // Páginas onde os links devem estar escondidos
    const paginasPublicas = ['/', '/login.html', '/register.html', '/index.html']; // Adicione as URLs exatas

    const estaEmPaginaPublica = paginasPublicas.some(p => path.endsWith(p));

    navLinks.forEach(link => {
        if (estaEmPaginaPublica) {
            link.style.display = 'none'; // Esconde os links
        } else {
            link.style.display = ''; // Mostra os links (restaura o padrão)
        }
    });
}

function setupLogoutButton() {
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            // Em uma aplicação real, aqui você limparia tokens ou sessões.
            alert('Você foi desconectado.');
            window.location.href = '/'; // Redireciona para a página de login
        });
    }
}


function setupcarrinho(){
    const carrinho = document.getElementById('carrinho-link')

    carrinho.addEventListener('click', (e) =>{
        e.preventDefault()
        if(!carrinho){
            console.log('carrinho não encontrado')
            return
        }
        window.location.href = ('/carrinho')
    })
}
function setupcatalogo(){
    const catalogo = document.querySelector('btn btn-primary')

    catalogo.addEventListener('click', (e) =>{
        e.preventDefault()
        if(!catalogo){
            console.log('catalogo não encontrado')
            return
        }
        window.location.href = ('/catalogo')
    })
}
