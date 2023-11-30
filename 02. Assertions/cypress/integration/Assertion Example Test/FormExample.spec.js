 
describe('Fill a form with various types of data', ()=>{
    beforeEach(()=>{
        // Cuando queremos correr el test, nos tira un exception, por eso agregamos esta linea de
        // código para que la ignore 
        cy.visit("/demo-form/")

        Cypress.once('uncaught:exception', () => false)
    })

    
        it('Try to submitwith any field filled', ()=>{
         Cypress.once('uncaught:exception', () => false)
         cy.get('#contact-form-4072 > form')
         .submit()
        
         .get('.form-error')
         .should('contain', 'Error')


        })

        it('Try to click on submit button without any fields filled', ()=>{
            Cypress.once('uncaught:exception', () => false)
            cy.get('#contact-form-4072 > form > div.wp-block-jetpack-button.wp-block-button > button')
            .click()
        })

        it('Write the full user name in "Full Name" text box', ()=>{
            //
        })

        it('Write the email in "email" text box and catch an error', ()=>{
            //
        })

})