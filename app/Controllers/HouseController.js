import _houseService from "../Services/HouseService.js"
import _store from "../store.js"







function draw(){
  let houses = _store.State.houses
  let houseElem = document.getElementById("houses")
  let template = ' '
// ref the parameters
  houses.forEach(house => {
    template += house.Template
    
  })

  houseElem.innerHTML = template
}
export default class HouseController{
constructor(){

}
addHouse(event){
  event.preventDefault()
  let formData = event.target

  let newHouse = {
    model: formData.model.value,
    year: formData.year.value,
    price: formData.price.value,
    description: formData.description.value,
    imgUrl: formData.imgUrl.value

  }
  
  console.log(newHouse);
  
 _houseService.addHouse(newHouse)

  // @ts-ignore
  $('#house-form').modal('toggle');
  draw()
  console.log("oi mate");
  
}
}
