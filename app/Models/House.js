export default class House{
  // careful with names!
  constructor(data){
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }


get Template(){
  return `

          <div class="col-3">
              <h3>${this.model}</h3>
              <p>${this.year}</p>
              <p>${this.price}</p>
              <p>${this.description}</p>
              <img src="${this.imgUrl}" alt="">
          </div>
  `
}
}