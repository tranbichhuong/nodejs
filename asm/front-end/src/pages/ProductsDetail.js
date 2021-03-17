import ProductApi from "../api/ProductApi";
import { parseRequestUrl } from "../utils";
import AddToCart from "./AddToCart";
import SearchBox from "./component/SearchBox";

const ProductDetail = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: product } = await ProductApi.get(id);
    return `
    <head>
    <title>${product.name}</title></head>
        <div class="container">
        	<div class="row">
        	<div class="col-4">
        	<img src="${product.image}
        	" width="350"class="img-fluid"/>
        	</div>
        	<div class="col-8">
        	
        	<h1>
        	${product.name}
            </h1>
            <h2>
        	${product.price}
            </h2>
            <p>${product.description}</p>
            
            <button class="btn btn-primary"  id="btn-add-to-cart">Add To Card</button>
            </div>
        </div>
        </div>
            `;
  },
  async afterRender(){
    return `${await SearchBox.afterRender()}${await AddToCart.afterRender()}`
  }
};

export default ProductDetail;
