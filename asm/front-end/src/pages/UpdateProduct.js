import axios from "axios";
import ProductApi from "../api/ProductApi";

import { parseRequestUrl } from "../utils";

const UpdateProduct = {
  async render() {
    const request = parseRequestUrl();
    const { data: product } = await ProductApi.getAll();
    const { data: cate } = await ProductApi.getAllCate();

    const idResult = product.filter((product) => {
      return product.id == request.id;
    });

    const printProduct = idResult.map((product) => {
      return /* html*/ `
      <head>
    <title>Cập nhật || ${product.name}</title></head>
        <div class="container">
        <div>
        <h3>CẬP NHẬT : ${product.name}</h3>
        </div>
            <div class="row mt-2">
                <div class="col-12">
                <input type="text" class="form-control" placeholder="First name" aria-label="First name" id="update-id" value="${
                  product.id
                }" disabled>
                </div>
            </div>
           
      <div class="row mt-2">
          <div class="col-6">
            <input type="text" class="form-control" placeholder="First name" aria-label="First name" id="update-name" value="${
              product.name
            }">
          </div>
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id="update-image" value="${
              product.image
            }">
          </div>
      </div>
      <div class="row mt-2">
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id="update-price" value="${
              product.price
            }">
          </div>
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id="update-status" value="${
              product.status
            }">
          </div>
      </div>
      <div class="row mt-2">
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id="update-quantity" value="${
              product.quantity
            }">
          </div>
          <div class="col-6">
          <select class="form-select" id="update-cateid" aria-label="Default select example" value="${product.cateID}">
          <option selected>Chọn danh mục</option>
          ${cate.map((cate) => {
            return `<option value="${cate.id}">${cate.name}</option>`;
          })}
        </select>
          </div>
      </div>
      <div class="row mt-2">
      <div class="col-12">
      <div class="form-floating">
      <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id="update-description" value="${
        product.description
      }">
      <label for="floatingTextarea2">DESCRIPTION</label>
    </div>
    </div>
    <div class="row">
    <div class="col-12 d-flex justify-content-center mt-2 mb-4">
    <a href="http://localhost:1111/#/dashboard"><button class="btn btn-danger" id="btn-update-product">Cập nhật</button>
    </div>
    </div>
    
    </a>
        </div>
`;
    });
    return printProduct;
  },
  afterRender() {
    document
      .querySelector("#btn-update-product")
      .addEventListener("click", function () {
        const request = parseRequestUrl();
        const id = request.id;
        const data = {
          id: document.querySelector("#update-id").value,
          name: document.querySelector("#update-name").value,
          image: document.querySelector("#update-image").value,
          price: document.querySelector("#update-price").value,
          status: document.querySelector("#update-status").value,
          quantity: parseInt(document.querySelector("#update-quantity").value),
          cateID: parseInt(document.querySelector("#update-cateid").value),
          description: document.querySelector("#update-description").value,
        };
        const data_URL = "http://localhost:3000/products/";
        axios.put(data_URL + id, data);
      });
  },
};
export default UpdateProduct;
