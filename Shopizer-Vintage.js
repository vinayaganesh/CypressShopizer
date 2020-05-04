describe('Test av Shopizer', function () {
    this.beforeAll('open shopizer', function(){
        cy.visit('http://localhost:8080/shop/');
    });
 
    it ('As a customer, I want to Contact us feature', function(){
        cy.get('a').contains("Contact us").click({ force: true });
        cy.get('[id="name"]').type('Team Yellow');
        cy.get('[id="email"]').type('teamyellow@gmail.com');
        cy.get('[id="subject"]').type('Wrong Size');
        cy.get('[id="comment"]').type('Team Yellow received Wrong size of Bag with ID 2020-001');
        //cy.get('[id="recaptcha-anchor"]').contains("recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox recaptcha-checkbox-checked").click;

   // cy.get('class').contains("recaptcha-checkbox-border").click({force: true});
        cy.get('[id="submitContact"]').click({ force: true });
        //cy.contains('Team Yellow');
    });

    xit ('As a customer, I want to buy a laptop bag without login', function(){
        //cy.get('a').contains("dropdown-toggle").click({ force: true });
        cy.get('a').contains("Laptop Bags").click({ force: true });
        cy.get('a').contains("Add to cart").click;
       
        //cy.get('[class="hidden-xs"]').contains("Shopping cart").click;
        //cy.get('[class="hidden-xs"]').contains("Shopping cart").click;
        cy.get('a').contains("Checkout").click({ force: true });
        cy.get('a').contains("Proceed to checkout").click;
      
       // cy.get('[id="submitContact"]').click({ force: true });
       
    });
});
 