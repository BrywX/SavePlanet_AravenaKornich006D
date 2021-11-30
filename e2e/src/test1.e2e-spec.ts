import {browser, element, by } from 'protractor';
 
describe('Test 1', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //creación de prueba 1
    it("El page Login se muestra por defecto", ()=>{
        expect(element(by.css(".tct ion-card-title")).getText()).toContain("Save Planet");
    });  

});


 















