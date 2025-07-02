describe('Cadastro', () => {

    beforeEach(() => {

        cy.visit('https://automationpratice.com.br/register')
    })

    it('Cadastro com dados válidos', () => {
        
        //1. Acessar a página de cadastro
        //beforeEach
        
        //2. Preencher todos os campos com dados válidos
        cy.get('#user').type('Jhonny Marr')
        cy.get('#email').type('Johnnymarr@gmail.com')
        cy.get('#password').type('smiths123')

        //3. Clicar no botão "Cadastrar"
        cy.get('#btnRegister').click()

        //Verificar se foi cadastrado com sucesso
        cy.get('#swal2-title').should('be.visible').and('contain', 'Cadastro realizado!')

        //Verificar se foi para a página de "Minha Conta"
        cy.url('eq', 'https://automationpratice.com.br/my-account')
    })

    it('Cadastro com campo nome vazio', () => {

        //1. Acessar a página de cadastro
        //beforeEach

        //2. Preencher o campo de e-mail e o campo de senha com dados válidos
        cy.get('#email').type('Johnnymarr@gmail.com')
        cy.get('#password').type('smiths123')

        //3. Clicar no botão "Cadastrar"
        cy.get('#btnRegister').click()

        //Verificar se exibiu a mensagem de preencher os campos obrigatórios
        cy.get('#errorMessageFirstName').should('be.visible').and('contain', 'O campo nome deve ser prenchido')

        //Verificar se permaneceu na página de cadastro
        cy.url('eq', 'https://automationpratice.com.br/register')
    })

    it('Cadastro com campo e-mail vazio', () => {

        // 1. Acessar a página de cadastro
        // beforeEach

        // 2. Preencher o campo nome e o campo de senha com dados válidos
        cy.get('#user').type('Johnny Marr')
        cy.get('#password').type('smiths123')

        // 3. Clicar no botão "Cadastrar"
        cy.get('#btnRegister').click()

        // Verificar se exibiu a mensagem de preencher os campos obrigatórios
        cy.get('#errorMessageFirstName').should('be.visible').and('contain', 'O campo e-mail deve ser prenchido corretamente')

        // Verificar se permaneceu na página de cadastro
        cy.url().should('eq', 'https://automationpratice.com.br/register')
    })

    it('Cadastro com campo de senha vazio', () => {

        // 1. Acessar a página de cadastro
        // beforeEach

        // 2. Preencher o campo nome e o campo de email com dados válidos
        cy.get('#user').type('Johnny Marr')
        cy.get('#email').type('Johnnymarr@gmail.com')

        // 3. Clicar no botão "Cadastrar"
        cy.get('#btnRegister').click()

        // Verificar se exibiu a mensagem de preencher os campos obrigatórios
        cy.get('#errorMessageFirstName').should('be.visible').and('contain', 'O campo senha deve ter pelo menos 6 dígitos')

        // Verificar se permaneceu na página de cadastro
        cy.url().should('eq', 'https://automationpratice.com.br/register')
    })

    it('Cadastro com todos os campos vazios', () => {

        // 1. Acessar a página de cadastro
        // beforeEach

        // 2. Clicar no botão "Cadastrar"
        cy.get('#btnRegister').click()

        // Verificar mensagens em todos os campos obrigatórios
        cy.get('#errorMessageFirstName').should('be.visible').and('contain', 'O campo nome deve ser prenchido')
        //cy.get('#errorMessageEmail').should('be.visible').and('contain', 'Preencha o campo obrigatório')
        //cy.get('#errorMessagePassword').should('be.visible').and('contain', 'Preencha o campo obrigatório')

        // Verificar se permaneceu na página de cadastro
        cy.url().should('eq', 'https://automationpratice.com.br/register')
    })

    it('Cadastro com senha com menos de 6 caracteres', () => {

        // 1. Acessar a página de cadastro
        // beforeEach

        // 2. Preencher o campo nome e o campo de email com dados válidos
        cy.get('#user').type('Johnny Marr')
        cy.get('#email').type('Johnnymarr@gmail.com')

        // 3. Preencher o campo senha com uma senha com menos de 6 caracteres
        cy.get('#password').type('12345')

        // 4. Clicar no botão "Cadastrar"
        cy.get('#btnRegister').click()

        // Verificar a mensagem de senha inválida
        cy.get('#errorMessageFirstName').should('be.visible').and('contain', 'O campo senha deve ter pelo menos 6 dígitos')

        // Verificar se permaneceu na página de cadastro
        cy.url().should('eq', 'https://automationpratice.com.br/register')
    })



})