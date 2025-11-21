# 🧪 Estudos Cypress - Page Object Model (POM)

Projeto de estudos de automação de testes E2E usando **Cypress** com o padrão **Page Object Model (POM)**.

## 🎯 Objetivo

Implementar testes automatizados para a funcionalidade de login do site [SauceDemo](https://www.saucedemo.com/) seguindo as melhores práticas de Clean Code e arquitetura de testes.

## 📁 Estrutura do Projeto

```
estudos-cypress-pc/
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js           # Testes de login
│   ├── fixtures/                  # Dados de teste
│   ├── support/
│   │   ├── pages/
│   │   │   └── LoginPage.js      # Page Object da tela de login
│   │   ├── commands.js           # Comandos customizados
│   │   └── e2e.js                # Configurações globais
├── node_modules/
├── cypress.config.js              # Configuração do Cypress
├── package.json
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (LTS) instalado
- Git instalado

### Instalação

```bash
# Clonar o repositório (se aplicável)
git clone <url-do-repositorio>

# Entrar na pasta do projeto
cd estudos-cypress-pc

# Instalar dependências
npm install
```

### Executar os Testes

```bash
# Abrir interface gráfica do Cypress
npm run cy:open

# Executar todos os testes em modo headless
npm test

# Executar apenas os testes de login
npm run test:login

# Executar no Chrome
npm run cy:run:chrome

# Executar no Edge
npm run cy:run:edge
```

## 📋 Page Object Model (POM)

### O que é?

O **Page Object Model** é um padrão de design que cria uma camada de abstração entre os testes e a interface do usuário, tornando o código mais:

- ✅ **Reutilizável**: Métodos podem ser usados em múltiplos testes
- ✅ **Manutenível**: Mudanças na UI exigem alterações apenas no Page Object
- ✅ **Legível**: Testes ficam mais semânticos e fáceis de entender
- ✅ **Escalável**: Facilita a adição de novos testes e páginas

### Estrutura da LoginPage

```javascript
class LoginPage {
  // 1. Mapeamento dos elementos
  elements = {
    usernameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('#login-button')
  }

  // 2. Métodos de ação
  acessar() { ... }
  preencherLogin(usuario, senha) { ... }
  submeter() { ... }

  // 3. Métodos de validação
  validarLoginSucesso() { ... }
}
```

### Exemplo de Uso

```javascript
import LoginPage from '../support/pages/LoginPage'

describe('Login', () => {
  const loginPage = new LoginPage()

  it('Deve realizar login com sucesso', () => {
    loginPage
      .acessar()
      .preencherLogin('standard_user', 'secret_sauce')
      .submeter()
      .validarLoginSucesso()
  })
})
```

## 🧪 Casos de Teste Implementados

1. ✅ Login com credenciais válidas
2. ✅ Login com method chaining
3. ✅ Login com credenciais inválidas
4. ✅ Login sem preencher usuário
5. ✅ Login sem preencher senha

## 🛠️ Tecnologias Utilizadas

- **Cypress** v15.7.0 - Framework de testes E2E
- **Node.js** v24.11.1 - Ambiente de execução JavaScript
- **JavaScript (ES6+)** - Linguagem de programação

## 📚 Conceitos Aplicados

- ✨ Page Object Model (POM)
- ✨ Clean Code
- ✨ Method Chaining
- ✨ Padrão AAA (Arrange, Act, Assert)
- ✨ DRY (Don't Repeat Yourself)
- ✨ Single Responsibility Principle

## 📝 Credenciais de Teste (SauceDemo)

| Usuário | Senha | Descrição |
|---------|-------|-----------|
| `standard_user` | `secret_sauce` | Usuário padrão |
| `locked_out_user` | `secret_sauce` | Usuário bloqueado |
| `problem_user` | `secret_sauce` | Usuário com problemas |
| `performance_glitch_user` | `secret_sauce` | Usuário com lentidão |

## 🎓 Autor

Projeto desenvolvido para estudos de automação de testes com Cypress.

---

⭐ **Dica**: Explore o código, adicione novos testes e pratique o padrão POM!

