import axios from "axios";
import ProductApi from "../api/ProductApi";
import { parseRequestUrl } from "../utils";
const UpdateCate = {
  async render() {
    const request = parseRequestUrl();
    const { data: news } = await ProductApi.getAllNews();
    const { data: cate } = await ProductApi.getAllCate();
    const idResult = cate.filter((cate) => {
      return cate.id == request.id;
    });

    const printProduct = idResult.map((cate) => {
      return /* html*/ `
      <head>
    <title>Cập nhật || ${cate.name}</title></head>
        <div class="container">
        <div>
        <h3>CẬP NHẬT : ${cate.name}</h3>
        </div>
            <div class="row mt-2">
                <div class="col-12">
                <label for="">ID</label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name" id="update-id" value="${cate.id
        }" disabled>
                </div>
            </div>
           
      <div class="row mt-2">
          <div class="col-12">
          <label for="">Name</label>
            <input type="text" class="form-control" placeholder="First name" aria-label="First name" id="update-title" value="${cate.name
        }">
        
          </div>
      </div>
      <div class="row mt-2">
    <div class="row">
    <div class="col-12 d-flex justify-content-center mt-2 mb-4">
    <a href="http://localhost:1111/#/dashboard"><button class="btn btn-danger w-100" id="btn-update-product">Cập nhật</button>
    </div>
    </div>
    
    </a>
        </div>
`;
    });
    return printProduct;
  },
  async afterRender() {
    document
      .querySelector("#btn-update-product")
      .addEventListener("click", function () {
        const request = parseRequestUrl();
        const id = request.id;
        const data = {
          id: document.querySelector("#update-id").value,
          title: document.querySelector("#update-title").value,
          image: document.querySelector("#update-image").value,
          content: document.querySelector("#update-content").value,
        };
        const data_URL = "http://localhost:3000/news/";
        axios.put(data_URL + id, data);
      });

  }
}
export default UpdateCate;