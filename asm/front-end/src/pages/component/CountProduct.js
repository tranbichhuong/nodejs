import ProductApi from "../../api/ProductApi.js";
const CountProduct = {
   async render(){
        const { data: product } = await ProductApi.getAll();
    const { id, name } = product;
    const { data: cate } = await ProductApi.getAllCate();
    const reducer = (accumulator, currentValue) => {
      return accumulator + +currentValue.quantity;
    };
    const cateResultProduct1 = product.filter(product =>{
        return product.cateID == 1;
    })
    const cateResultProduct2 = product.filter(product =>{
        return product.cateID == 2;
    })
    const cateResultProduct3 = product.filter(product =>{
        return product.cateID == 3;
    })
    const reducer_cate = (accumulator, currentValue) => {
      return accumulator + +currentValue.cateID;
    };
        return `<div class="row">
        <div class="col-xl-3 col-md-6 text-center" >
            <div class="card bg-primary text-white mb-4">
            <div class="card-title"><h4>Tổng số sản phẩm</h4></div>
                <div class="card-body">
                <h2>
                ${product.reduce(reducer, 0)}
                </h2>
                </div>
               
            </div>
        </div>
    </div>`
    }
}

export default CountProduct;