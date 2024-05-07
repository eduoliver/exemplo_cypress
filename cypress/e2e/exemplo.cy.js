import Newslatter from "../support/pages/Newslatter";
import Cadastro from "../support/pages/Cadastro";


context('Actions', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.wait(50)
      })

describe("Assinar Newslatter", () => {
    it("Assinar newslatter com sucesso via Botão", () => {
        Newslatter.preencherEmail();
        Newslatter.submeterAssinaturaBotao();
        Newslatter.validarModalSucesso();
    })

    it("Assinar newslatter com sucesso via Enter", () => {
        Newslatter.preencherEmailEnter();
        Newslatter.validarModalSucesso();
    })

    it("Verificar fechar do modal de assinatura", () => {
        Newslatter.preencherEmail();
        Newslatter.submeterAssinaturaBotao();
        Newslatter.validarModalSucesso();
        Newslatter.fecharModal();
        Newslatter.validarModalFechada();
    })
})

describe("Cadastro de usuário", () =>{
    it("Realizar cadastro com sucesso", () => {
        Cadastro.acessarPaginaCadastro();
        Cadastro.preencherFormulario();
        Cadastro.submeterCadastro();
        Cadastro.validarModalSucesso();
    })
})
})