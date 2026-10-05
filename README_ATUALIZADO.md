# 🚀 Portfólio Angular - Emanuel Pinheiro

Portfólio profissional desenvolvido com **Angular 20**, apresentando projetos, habilidades e experiência em desenvolvimento Front-End e Back-End.

## ✨ Características

- 🎨 **3 Temas Dinâmicos**: Light, Dark e Matrix (com efeito Matrix no background)
- 🎭 **Componentização Angular**: Arquitetura modular e escalável
- 🎬 **Animações Suaves**: Transições e efeitos visuais modernos
- 📱 **Design Responsivo**: Otimizado para todos os dispositivos
- ⚡ **Performance**: SSR (Server-Side Rendering) com Angular Universal
- 🎯 **Acessibilidade**: Atenção às boas práticas de a11y

## 🛠️ Tecnologias Utilizadas

- **Angular 20.3** - Framework principal
- **TypeScript 5.9** - Tipagem estática
- **SCSS** - Estilização avançada
- **Angular Router** - Navegação SPA
- **RxJS** - Programação reativa
- **Angular SSR** - Renderização no servidor

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── component/              # Componente raiz
│   ├── core/                   # Componentes principais
│   │   ├── header/            # Cabeçalho
│   │   ├── footer/            # Rodapé
│   │   ├── home/              # Página inicial
│   │   ├── sobre/             # Sobre mim
│   │   ├── projetos/          # Projetos
│   │   ├── contatos/          # Contatos
│   │   ├── skills-impact/     # Habilidades
│   │   ├── cursos-certificacoes/ # Certificações
│   │   └── services/          # Serviços (tema)
│   ├── matrix-canvas/         # Efeito Matrix background
│   ├── shared/                # Componentes compartilhados
│   │   └── ui/
│   │       └── theme-switcher/ # Seletor de temas
│   └── styles/                # Estilos globais
│       ├── themes/            # Temas (light, dark, matrix)
│       └── _mixins.scss       # Mixins SCSS
├── assets/                    # Imagens, ícones, certificados
└── styles.scss               # Estilos globais
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js 20.x ou superior
- npm ou yarn

### Instalação

1. Clone o repositório ou navegue até a pasta:
```bash
cd projeto_portifolio-main
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Abra o navegador em: `http://localhost:4200`

### Outros Comandos

```bash
# Build de produção
npm run build

# Executar testes
npm test

# SSR - Server-Side Rendering
npm run serve:ssr:y
```

## 🎨 Temas Disponíveis

### 🌟 Light Theme
- Design limpo e moderno
- Cores suaves e elegantes
- Ideal para ambientes claros

### 🌙 Dark Theme
- Visual premium e contrastado
- Cores vibrantes sobre fundo escuro
- Confortável para visualização prolongada

### 💚 Matrix Theme
- Efeito Matrix animado no background
- Visual futurista neon verde
- Inspirado no filme Matrix

## 📱 Responsividade

O portfólio é totalmente responsivo e se adapta a:
- 📱 Mobile (375px+)
- 📱 Mobile Landscape (844px+)
- 💻 Desktop (1024px+)

## 🎯 Funcionalidades

- ✅ Navegação fluida entre páginas
- ✅ Troca de temas em tempo real
- ✅ Efeito Matrix animado no background
- ✅ Cards de projetos interativos
- ✅ Formulário de contato
- ✅ Links para redes sociais
- ✅ Visualização de certificados em modal
- ✅ Animações ao scroll

## 🔧 Personalização

### Alterar Informações Pessoais

Edite os seguintes arquivos:
- `src/app/core/home/home.html` - Informações da página inicial
- `src/app/core/sobre/sobre.html` - Texto "Sobre Mim"
- `src/app/core/header/header.html` - Nome e título no header
- `src/app/core/projetos/projetos.html` - Seus projetos

### Trocar Cores do Tema

Edite as variáveis CSS em:
- `src/app/styles/themes/_light.scss`
- `src/app/styles/themes/_dark.scss`
- `src/app/styles/themes/_matrix.scss`

### Adicionar Novos Componentes

```bash
ng generate component core/nome-do-componente
```

## 📦 Deploy

### Netlify (Recomendado)

1. Build do projeto:
```bash
npm run build
```

2. Configure o `netlify.toml` (já incluído)

3. Deploy via Netlify CLI ou interface web

### Outras Plataformas

- **Vercel**: Suporte nativo para Angular
- **Firebase Hosting**: Configuração via Firebase CLI
- **GitHub Pages**: Via `angular-cli-ghpages`

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! 

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**Emanuel Pinheiro**
- LinkedIn: [in/emppinheiro](https://www.linkedin.com/in/emppinheiro/)
- GitHub: [@Messias-emp](https://github.com/Messias-emp)
- WhatsApp: +55 (98) 98529-6911

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

🚀 Desenvolvido com Angular 20 e muito ☕
