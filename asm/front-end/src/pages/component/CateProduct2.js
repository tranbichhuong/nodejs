
import ProductApi from '../../api/ProductApi.js';
const CateProduct = {
   async render (){

        const {data : product} = await ProductApi.getAll();
        const cateResult = product.filter(product =>{
            return product.cateID == 2;
        })
        const cateResult_Product = cateResult.map(product =>{
            return `
            
            <div class="card-product col-3 mt-2 p-3">
            <a href="/#/products/${product.id}" class="text-decoration-none">
                <img class="card-img-top" src="${product.image}" height="250" alt="Card image cap">
                </a>
                <div class="card-body">
                  <h5 class="card-title"><a href="/#/products/${product.id}" class="text-decoration-none">${product.name}</a></h5>
                  <h4 class="card-text text-danger">${product.price}</h4>
                  <button class="btn btn-primary btn-view"><a href="/#/products/${product.id}" class="text-decoration-none text-white"><i class="fas fa-info-circle"></i> &nbsp;XEM CHI TIẾT</a></button>
                </div>
            </div>`
        }).join("");
        
        return cateResult_Product
    },
    afterRender(){
    
    }
}

export default CateProduct;