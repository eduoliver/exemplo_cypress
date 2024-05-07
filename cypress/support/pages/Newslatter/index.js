//Ações de interação com a página

//Acessar página
//Preencher campo e-mail
//Clicar submeter
const el = require('./elements').ELEMENTS;

class Newslatter {

    acessarPagina(){
        cy.visit('/')
    }

    preencherEmail(){
        cy.get(el.campoEmail).type('eduardo@teste.com.br')
    }

    submeterAssinaturaBotao(){
        cy.get(el.botaoSubmmit).click()
    }

    validarModalSucesso(){
        cy.get(el.modal)
            .should('be.visible')
            .should('have.text', 'Success')
    }

    preencherEmailEnter(){
        cy.get(el.campoEmail).type('eduardo@teste.com.br{Enter}')
    }

    fecharModal(){
        cy.get(el.okModal).click()
        cy.wait(50)

    }

    validarModalFechada(){
        cy.get(el.modal).should('not.exist')
    }


}

export default new Newslatter();