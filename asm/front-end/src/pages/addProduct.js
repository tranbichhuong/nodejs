import axios from "axios"; 
import ProductApi from "../api/ProductApi.js"; 

const AddProduct ={
    async render(){
        const  {data : cate } = await ProductApi.getAllCate();
        return `  <form action="">
        <div class="row g-3">
    <div class="col">
      <input type="text" class="form-control" id="form-add-id" disabled placeholder="Auto ID" aria-label="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" id="form-add-name" placeholder="NAME" aria-label="Last name">
    </div>
    <div class="col">
      <input type="text" class="form-control" id="form-add-image" placeholder="IMAGE" aria-label="Last name">
    </div>
    <div class="col">
      <input type="text" class="form-control" id="form-add-price" placeholder="PRICE" aria-label="Last name">
    </div>
    <div class="col">
    <select class="form-select" id="form-add-status" aria-label="Default select example">
    <option selected>Chọn trạng thái</option>
    <option value="đã bán">Đã bán</option>
    <option value="chưa bán">Chưa bán</option>
    <option value="đang xử lý">Đang xử lý</option>
  </select>
    </div>
    <div class="col">
    <select class="form-select" id="form-add-cateid" aria-label="Default select example">
    <option selected>Chọn danh mục</option>
    ${cate.map((cate) => {
        return `<option value="${cate.id}">${cate.name}</option>`;
      })}
  </select>
    </div>
    <div class="col">
      <input type="text" class="form-control" id="form-add-quantity" placeholder="QUANTITY" aria-label="Last name">
    </div>
    <div class="row mt-2">
    <div class="col-12">
    <div class="form-floating">
    <textarea class="form-control" id="form-add-description" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
    <label for="floatingTextarea2">DESCRIPTION</label>
  </div>
    </div>
    </div>
  </div>
  <div class="row mt-3">
  <button class="btn btn-primary" type="button" id="add-product"><i class="fas fa-plus-square"></i> THÊM SẢN PHẨM</button></div>
        </form>`
    },
    afterRender(){
        document
      .querySelector("#add-product")
      .addEventListener("click", function (e) {
        e.preventDefault();
        const $ = document.querySelector.bind(document);
        if($("#form-add-name").value =="" || $("#form-add-image").value == ""){
          alert("vui lòng nhập sản phẩm");
        }else{
          const product = {
            id: $("#form-add-id").value,
            name: $("#form-add-name").value,
            image: $("#form-add-image").value,
            price: $("#form-add-price").value,
            status: $("#form-add-status").value,
            quantity: $("#form-add-quantity").value,
            cateID: parseInt($("#form-add-cateid").value),
            description: $("#form-add-description").value,
            createdAt  : Date.now()
          };
          const data_URL = "http://localhost:3000/products";
          const method_SEVER = {
            method: "POST",
            headers: { "content-type": "application/json" },
            data: JSON.stringify(product),
            url: data_URL,
          };
          axios(method_SEVER, product);
          alert("thêm thành công" + $("#form-add-name").value)  
        }
      });

    }
}
export default AddProduct;