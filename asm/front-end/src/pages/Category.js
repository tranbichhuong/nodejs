import { parseRequestUrl } from "../utils";
import ProductApi from '../api/ProductApi.js';
const Category = {
   async render (){
        const request = parseRequestUrl();
        const {data : product} = await ProductApi.getAll();
        const {data : cate} =await ProductApi.getAllCate();
        const cateResult = product.filter(product =>{
            return product.cateID == request.id;
        })
        const cateShow = cate.filter(cate=>{
            return cate.id == request.id

        })
        const cateResult_Product = cateResult.map(product =>{
            return /*html*/`
            <head>
            <title>${cateShow.map(cate=>{
                return cate.name;
            })}</title>
            </head>
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
            <a href="#/products/${product.id}"> <button class="btn btn-primary">Xem chi tiết</button></a>
           
            </div>
        </div>
            </div>`
        }).join("");
        return cateResult_Product
    },
    afterRender(){
    
    }
}

export default Category;