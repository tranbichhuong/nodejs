import ProductApi from "../../api/ProductApi.js";
const Top10News ={
   async render(){
    const {data : product } = await ProductApi.getAll();
    let i = product;
    let result;
    for (i = 0; i <= 10; i++) {
        result += `<div class="card  mt-2"><a href="/#/products/${product[i].id}">
        	
        	<img src="${product[i].image}" class="card-img-top img-fluid" width=300 alt="...">
        	<div class="card-body">
        	  <h5 class="card-title">${product[i].name}</h5>
        	  <p class="card-text">${product[i].price} VNĐ</p>
        	</div>
        </a>
      </div>`;
    }
    return `${result}`
    }
    ,afterRender(){
        
    }
}
export default Top10News