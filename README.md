Siqueira Contabilidade 📊
Website institucional para a Siqueira Contabilidade, desenvolvido para apresentar os serviços da empresa, transmitir credibilidade e facilitar o contato com potenciais clientes.

🚀 Tecnologias Utilizadas
React — Biblioteca para construção da interface de usuário

Vite — Build tool rápida para frontend

CSS3 — Estilização modular por componentes

ESLint — Padronização e qualidade de código

📁 Estrutura do Projeto
Plaintext
site-contabilidade-main/
├── public/                 # Favicon, ícones e imagens estáticas
├── src/
│   ├── assets/             # Imagens e vetores (hero, logos, SVG)
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Formulario/     # Seção de contato / formulário
│   │   ├── Header/         # Cabeçalho e navegação
│   │   ├── Hero/           # Banner principal da aplicação
│   │   └── Serviços/       # Apresentação dos serviços contábeis
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Ponto de entrada da aplicação
│   └── index.css           # Estilos globais
├── eslint.config.js        # Configurações do linter
├── index.html              # HTML principal
├── package.json            # Dependências e scripts do Node
└── vite.config.js          # Configurações do Vite
🛠️ Como Executar o Projeto
Pré-requisitos: Node.js (versão 18 ou superior) e npm instalados.

Clone o repositório:

Bash
git clone https://github.com/Ph-dev-77/site-contabilidade.git
Acesse o diretório do projeto:

Bash
cd site-contabilidade-main
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
Abra o navegador no endereço exibido no terminal (ex: http://localhost:5173).

⚡ Scripts Disponíveis
npm run dev — Inicia o ambiente de desenvolvimento local

npm run build — Gera a versão otimizada para produção na pasta dist

npm run preview — Visualiza a build de produção localmente

npm run lint — Executa a verificação de código com o ESLint
