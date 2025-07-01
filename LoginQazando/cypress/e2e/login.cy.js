// O 'describe' define um grupo de testes.
// É uma forma de organizar seus testes por funcionalidade ou feature.

describe('Login', () => {

  // O 'beforeEach' é um hook do Cypress que executa ANTES de CADA teste (it) dentro deste 'describe'.
  // É ideal para ações repetitivas, como visitar a URL da sua aplicação.

  beforeEach(() => {
    // Comando para visitar a URL da sua aplicação.
    // Você pode colocar a URL completa aqui ou configurar 'baseUrl' no cypress.config.js

    cy.visit('https://automationpratice.com.br/login');
  });

  // O 'it' define um teste individual, um cenário específico que você quer validar.
  it('Login com credenciais válidas', () => {

    // 1. Acessar a página de login
    cy.url().should('eq', 'https://automationpratice.com.br/login')
    
    // 2. Preencher o campo "e-mail" com um email válido
    cy.get('#user').type('kaneki123@gmail.com')

    // 3. Preencher o campo "senha" com uma senha válida
    cy.get('#password').type('tktk123')

    // 4. Clicar no botão de login
    cy.get('#btnLogin').click()

    // cy.get('.mensagem-sucesso').should('be.visible').and('contain', 'Login realizado com sucesso!');
    //cy.pause()
    cy.get('#swal2-title').should('be.visible').and('contain', 'Login realizado')

    //Verificar se acessou a url de minha conta, assim tendo o login realizado com sucesso
    cy.url().should('eq', 'https://automationpratice.com.br/my-account')

  });

  it('Login com e-mail inválido', () => {

    //1. Acessar a página de login
    cy.url().should('eq', 'https://automationpratice.com.br/login')

    //2. Preencher o campo "e-mail" com um email inválido
    cy.get('#user').type('thomastho.com')

    //3. Preencher o campo "senha" com uma senha válida
    cy.get('#password').type('tktk123')

    //4. Clicar no botão de login
    cy.get('#btnLogin').click()

    //Verificar se a mensagem de email inválido está visível
    cy.get('.invalid_input').should('be.visible').and('contain', 'E-mail inválido.')

    //Verificar se permaneceu na página de login
    cy.url().should('eq', 'https://automationpratice.com.br/login')


  })

  it('Login com senha inválida', () => {

    // 1. Acessar a página de login
    cy.url().should('eq', 'https://automationpratice.com.br/login')

    // 2. Preencher o campo "e-mail" com um email válido
    cy.get('#user').type('kaneki123@gmail.com')

    // 3. Preencher o campo "senha" com uma senha inválida
    cy.get('#password').type('123')

    // 4. Clicar no botão de login
    cy.get('#btnLogin').click()

    //Verificar se a mensagem de 'Senha inválida' está visível
    cy.get('.invalid_input').should('be.visible').and('contain', 'Senha inválida.')

    //Verificar se permaneceu na página de login
    cy.url().should('eq', 'https://automationpratice.com.br/login')

  } )

  it('Login com campos vazios', () => {

    // 1. Acessar a página de login
    cy.url().should('eq', 'https://automationpratice.com.br/login')

    // 2. Clicar no botão de login
    cy.get('#btnLogin').click()

    //Verificar se a mensagem de email inválido está visível
    cy.get('.invalid_input').should('be.visible').and('contain', 'E-mail inválido.')

    // Verificar se permaneceu na página de login
    cy.url().should('eq', 'https://automationpratice.com.br/login')
  })

  it('Clicando no botão de criar conta na página de login', () => {

    // 1. Acessar a página de login
    cy.url().should('eq', 'https://automationpratice.com.br/login')

    // 2. Clicar em "Ainda não tem conta?"
    cy.get('#createAccount').click()

    //Verificar se foi redirecionado para a página de cadastro
    cy.url().should('eq', 'https://automationpratice.com.br/register')

    cy.get('.account_form > h3').should('be.visible').and('contain', 'Cadastro de usuário')
  })

});