import {browser, element, by } from 'protractor';
 
describe('Test 2', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //creación de prueba 1
    it("El Css del login funciona correctamente", ()=>{
        expect(element(by.css(".tct ion-card-title")).getText()).toContain("Save Planet");
    });  


});


 















