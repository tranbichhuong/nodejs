import ProductApi from "../api/ProductApi.js";
import SearchBox from "./component/SearchBox.js";

const ProductsPage = {
  async render() {
    const { data: products } = await ProductApi.getAll();
    return /*html*/ `
    <head>
    <title>Sản phẩm</title></head>
    <div class="container-fluid ">
    <div class="row  mt-5">    
    <div class="col-12">
    
    <ul> <div class="card-group">
      <div class="row mt-2">
                      ${products
                        .map(
                          (item) => `
                       
                         <div class="card-product col-4 mt-2 text-center">
                         <a href="/#/products/${item.id}" class="text-decoration-none">
                             <img class="card-img-top" src="${item.image}" height="250" alt="Card image cap">
                             </a>
                             <div class="card-body">
                               <h5 class="card-title"><a href="/#/products/${item.id}" class="text-decoration-none">${item.name}</a></h5>
                               <h4 class="card-text text-danger">${item.price} VNĐ</h4>
                               <button class="btn btn-primary btn-view"><a href="/#/products/${item.id}" class="text-decoration-none text-white"><i class="fas fa-info-circle"></i> &nbsp;XEM CHI TIẾT</a></button>
                             </div>
                         </div>
                      
                         
                      `
                        )
                        .join("")}
                        </div>
                        </div>
                 </ul>
    
    
    </div>
    
    </div>
      
    </div>`;
  },
  async afterRender() {
    return `${await SearchBox.afterRender()}
    `;
  },
};
export default ProductsPage;
