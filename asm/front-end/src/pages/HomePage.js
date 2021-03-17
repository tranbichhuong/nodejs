// import data from "../data.js";
import ProductApi from "../api/ProductApi.js";
import CateProduct from "./component/CateProduct1.js";
import CateProduct2 from "./component/CateProduct2.js";
import CateProduct3 from "./component/CateProduct3.js";
import Header from "./component/header.js";
import News from "./News.js";
const HomePages = {
  async render() {
    const { data: product } = await ProductApi.getAll();
    return /*html */ `
    <head>
    <title>Trang chủ</title></head>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://nhapkhaumyphamchinhhang.com/wp-content/uploads/2020/04/banner-3ce-min.jpg" height="500" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>

    
    <div class="container">
    
      <ul> <div class="card-group">
      <div class="row mt-2">
      <div class="d-flex justify-content-center">
        <h2>SẢN PHẨM NỔI BẬT</h2>
      </div>
                      ${product
                        .map(
                          (item) => `
                       
                         <div class="card-product col-3 mt-2 p-3">
                         <a href="/#/products/${item.id}" class="text-decoration-none">
                             <img class="card-img-top" src="${item.image}" height="250" alt="Card image cap">
                             </a>
                             <div class="card-body">
                               <h5 class="card-title"><a href="/#/products/${item.id}" class="text-decoration-none">${item.name}</a></h5>
                               <h4 class="card-text text-danger">${item.price}</h4>
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

    <div class="container">
    <div class="space-elm"></div>
    <div class="row">
    <h3>Son MAC</h3>
      ${await CateProduct.render()}
    </div>
    <div class="space-elm"></div>
    <div class="row">
    <h3>Son GUCCI</h3>
      ${await CateProduct2.render()}
    </div>
    <div class="space-elm"></div>

    <div class="row">
    <h3>Son KIKO</h3>
      ${await CateProduct3.render()}
    </div>
      
    
    <div class="space-elm"></div>
    </div>`;
  },
  async afterRender() {
    return `${await Header.afterRender()}`;
  },
};

export default HomePages;
