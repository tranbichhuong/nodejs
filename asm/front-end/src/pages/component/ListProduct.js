import ProductApi from "../../api/ProductApi";
import axios from "axios";
import { reRender, $ } from "../../utils";
import CountProduct from "./CountProduct.js";

const ListProduct = {
  async render() {
    const { data: product } = await ProductApi.getAll();
    return /*html*/`
   
    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>IMAGE</th>
                <th>PRICE</th>
                <th>STATUS</th>
                <th>QUANTITY</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody id="list-products">
        ${product
        .map((product) => {
          return /*html*/`<tr class="trContent">
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td><img src="${product.image} "width="200"/></td>
            <td>${product.price}</td>
            <td>${product.status}</td>
            <td>${product.quantity}</td>
            <td class="p-4 action-product">
             
            <div class="row mt-2">
              <div class="">
                <button class="btn btn-danger btn-remove text-white" id="btn-remove-product" data-id="${product.id}"><div class="">
                  <i class="fas fa-trash-alt"></i>
                </div> Xóa</button>
              </div>
            </div>
             <div class="row mt-2">
               <a href="#/update/${product.id}"> <button class="btn btn-success"><div class="">
                 <i class="fas fa-edit"></i>
               </div> Cập nhật</button></a>
             </div>
           </td>
            </tr>`;
        })
        .join("")}
        </tbody>
        
       
    </table>`;
  },
  async afterRender() {
    
    const buttons = document.querySelectorAll(".btn-remove");
    const data_URL = "http://localhost:3000/products/";
    buttons.forEach((buttons) => {
      buttons.addEventListener("click", function (e) {
        e.preventDefault();
        const question = confirm("Are you sure delete ? ");

        if (question) {
          const { id } = this.dataset;
          axios.delete(data_URL + id);
          reRender(ListProduct, "#dataTable");
         
        }
      });
    });
  },
};

export default ListProduct;
