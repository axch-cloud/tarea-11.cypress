/// <reference types="Cypress" />

const URL = '127.0.0.1:8080';

context('Formulario', () => {

  beforeEach(() => {
    cy.visit(URL);
  });

  describe('primer pagina', () => {
    it('cargar', () => {
      cy.get('#valorMiembros').should('be.visible');
      cy.get('#botonProcesarMiembros').should('be.visible');
    }); 
  });

  describe('segunda pagina', () => {
    it('cargar', () => {
        cy.get('#valorMiembros').invoke('val', '3').then((valor) => {
          cy.get('#botonProcesarMiembros').click();
          cy.get('#botonReset').should('be.visible');
          cy.get('.miembros').should('have.length', 3); 
        }); 
    }); 
  });

  describe('ultima pagina', () => {
      it('cargar', () => {
            cy.get('#valorMiembros').invoke('val', '3').then((valor) => {
              cy.get('#botonProcesarMiembros').click();
              cy.get('#botonReset').should('be.visible');
              cy.get('.miembros').should('have.length', 3); 
            }); 
            
            for (let i = 0; i < 3; i++) {
              cy.get('input.valorEdades').eq(i).invoke('val', i);
            }
                
            cy.get('#botonCalcularEdad').click();
            cy.get('#mensajeValor').should('be.visible');  
      });
  
      it('volver a primer pagina', () => {
            cy.get('#valorMiembros').invoke('val', '3').then((valor) => {
              cy.get('#botonProcesarMiembros').click();
              cy.get('#botonReset').should('be.visible')
              cy.get('.miembros').should('have.length', 3); 
            }); 
            
            for (let i = 0; i < 3; i++) {
              cy.get('input.valorEdades').eq(i).invoke('val', i);
            }
                
            cy.get('#botonCalcularEdad').click();
            cy.get('#mensajeValor').should('be.visible');
      
            cy.get('#botonReset').click();
            cy.get('#valorMiembros').should('be.visible');
            cy.get('#botonProcesarMiembros').should('be.visible'); 
      });
  });
});
