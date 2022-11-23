class Form {
  constructor() {
    this.input = createInput("nome");
    this.buttonImg = createImg("./assets/images/start.png");
    this.greetings = createElement("h2");
  }

  elementsPosition(){
    this.input.position(500,180)
    this.input.size(180,30)
    this.buttonImg.position(525,250)
    this.buttonImg.size(150,50)
    this.input.class('customInput')
  }

  display() {
    this.elementsPosition()
  }

}
