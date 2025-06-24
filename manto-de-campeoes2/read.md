Manto de Campeões - E-commerce de Camisas de Futebol
Bem-vindo ao Manto de Campeões! Este é um projeto de e-commerce completo, focado na venda de camisas de futebol, desenvolvido para demonstrar as funcionalidades essenciais de uma loja virtual moderna. O sistema foi construído com Node.js, Express e MySQL, utilizando Handlebars para a renderização das páginas.


✨ Funcionalidades
O sistema conta com as seguintes funcionalidades implementadas:

Autenticação de Usuários:

Cadastro de novos clientes com validação de campos.

Login seguro com sistema de sessão.

Recuperação de senha através de perguntas de segurança.

Gerenciamento de Sessão:

Controle de acesso a páginas restritas (home, carrinho, etc.).

Middleware para verificar se o usuário está logado.

Função de Logout para encerrar a sessão.

Catálogo de Produtos:

Exibição dinâmica de produtos a partir do banco de dados.

Layout em grelha responsivo.

Carrinho de Compras:

Adição de produtos ao carrinho diretamente do catálogo.

Criação de carrinho persistente no banco de dados.

Atualização da quantidade caso o produto já exista no carrinho.

Visualização dos itens, quantidades e cálculo do subtotal.

🛠️ Tecnologias Utilizadas
Backend: Node.js, Express.js

Banco de Dados: MySQL

Frontend: HTML5, CSS3, JavaScript (Vanilla)

Template Engine: Express Handlebars

Gerenciamento de Sessão: express-session

Servidor de Desenvolvimento: Nodemon

json server

IA: gemini e gpt


🚀 Como Rodar o Projeto
Siga os passos abaixo para executar o projeto em seu ambiente local.

Pré-requisitos
Node.js (versão 16 ou superior)

npm (geralmente instalado com o Node.js)

Um servidor MySQL (como XAMPP, WAMP ou MySQL Community Server)

Passos de Instalação
Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Instale as dependências do projeto:

npm install

Configure o Banco de Dados:

Certifique-se de que seu servidor MySQL está a funcionar.

Crie um novo banco de dados chamado MantoDeCampeoes.

Execute o script SQL abaixo para criar todas as tabelas necessárias:

-- Script para criação do banco de dados
CREATE TABLE CATEGORIA (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE CLIENTE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    pergunta1 VARCHAR(255),
    resposta1 VARCHAR(255),
    pergunta2 VARCHAR(255),
    resposta2 VARCHAR(255)
);

CREATE TABLE PRODUTO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10,2),
    estoque INT,
    imagem VARCHAR(255),
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES CATEGORIA(id)
);

CREATE TABLE PEDIDO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status_pedido VARCHAR(50),
    FOREIGN KEY (id_cliente) REFERENCES CLIENTE(id)
);

CREATE TABLE CARRINHO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em DATETIME,
    FOREIGN KEY (id_cliente) REFERENCES CLIENTE(id)
);

CREATE TABLE ITENSPEDIDO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    preco_unitario DECIMAL(10,2),
    FOREIGN KEY (id_pedido) REFERENCES PEDIDO(id),
    FOREIGN KEY (id_produto) REFERENCES PRODUTO(id)
);

CREATE TABLE ITENSCARRINHO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_carrinho INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    subtotal DECIMAL(10,2),
    FOREIGN KEY (id_carrinho) REFERENCES CARRINHO(id),
    FOREIGN KEY (id_produto) REFERENCES PRODUTO(id)
);

Configure a conexão:

No ficheiro principal do servidor (index.js ou app.js), ajuste os dados de conexão com o banco de dados se necessário:

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Sua senha do MySQL, se houver
    database: 'MantoDeCampeoes'
});

Inicie o servidor:

npm start

Ou, para desenvolvimento com reinicialização automática:

nodemon

Abra o seu navegador e aceda a http://localhost:3000.

