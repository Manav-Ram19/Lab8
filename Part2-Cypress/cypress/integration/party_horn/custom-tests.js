describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el) {
      expect($el).to.have.value(75);
    })
  });

  it('Volume input changes when Slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(function($el) {
      expect($el).to.have.value(33);
    })
  });

  it("Audio Element's volume changes when slider changes", () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('volume', 0.33);
    })
  });
  // Test if the image and sound sources change when you select the party horn radio button
  it("Image and sound change to Car Horn when Carn Horn is selected", () => {
    cy.get("#radio-car-horn").click();
    cy.get('#sound-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/car.svg');
    })
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/car-horn.mp3');
    })
  });
  it("Image and sound change to Party Horn when Party Horn is selected", () => {
    cy.get("#radio-party-horn").click();
    cy.get('#sound-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg');
    })
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3');
    })
  });
  it("Image and sound change to Air Horn when Air Horn is selected", () => {
    // Click on a different party horn, because air horn is the default horn
    cy.get("#radio-party-horn").click();
    // Click on air horn for testing
    cy.get("#radio-air-horn").click();
    cy.get('#sound-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/air-horn.svg');
    })
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/air-horn.mp3');
    })
  });
  // Test if the volume image changes when increasing volumes (you must test for all 3 cases)
  it("Volume image changes to level 0 when volume input is 0", () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg');
    })
  });

  it("Volume image changes to level 1 when volume input is 1", () => {
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');
    })
  });

  it("Volume image changes to level 1 when volume input is 33", () => {
    cy.get('#volume-number').clear().type('33');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');
    })
  });

  it("Volume image changes to level 2 when volume input is 34", () => {
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');
    })
  });

  it("Volume image changes to level 2 when volume input is 66", () => {
    cy.get('#volume-number').clear().type('66');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');
    })
  });

  it("Volume image changes to level 3 when volume input is 67", () => {
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');
    })
  });

  it("Volume image changes to level 3 when volume input is 100", () => {
    cy.get('#volume-number').clear().type('100');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');
    })
  });
  // Test if the honk button is disabled when the textbox input is a empty or a non-number
  it("Honk button is disabled when textbox input is empty", () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(function($el) {
      expect($el).to.have.prop('disabled', true);
    });
  });

  it("Honk button is disabled when textbox input is not a number", () => {
    cy.get('#volume-number').clear().type('Not a number');
    cy.get('#honk-btn').then(function($el) {
      expect($el).to.have.prop('disabled', true);
    });
  });
  // Test if an error is shown when you type a number outside of the given range for the volume textbox input
  it("Error is thrown when the volume text box has input -1", ()=> {
    cy.get('#volume-number').clear().type('-1');
    cy.get('#honk-btn').click();
    cy.get('#volume-number').then(function($el) {
      expect($el).to.match(":invalid");
    })
  });
  it("Error is thrown when the volume text box has input 101", ()=> {
    cy.get('#volume-number').clear().type('101');
    cy.get('#honk-btn').click();
    cy.get('#volume-number').then(function($el) {
      expect($el).to.match(":invalid");
    })
  });
});
