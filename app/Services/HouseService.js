import House from "../Models/House.js"
import _store from "../store.js"



 class HouseService{
  addHouse(newHouse){
    newHouse = new House(newHouse)
    _store.State.houses.push(newHouse)
  }
  constructor(){

  }
}

const HOUSESERVICE = new HouseService()
export default HOUSESERVICE 