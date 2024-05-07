const el = require("./elements").ELEMENTS;

class Cadastro {

    acessarPaginaCadastro() {
        cy.get('.fa.fa-lock').click()
    }
    
    preencherFormulario() {
        cy.get(el.user).type('Eduardo')
        cy.get(el.email).type('edu@gmail.com')
        cy.get(el.password).type('123456') 
    }

    submeterCadastro(){
        cy.get(el.submmitButton).click()
    }

    validarModalSucesso() {
        cy.get(el.modal)
        .should('be.visible')
    }
}

export default new Cadastro();