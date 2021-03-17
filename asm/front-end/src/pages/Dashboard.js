import ProductApi from "../api/ProductApi.js";
import { reRender } from "../utils.js";
import CountProduct from "./component/CountProduct.js";
import Header from "./component/header.js";
import ListProduct from "./component/ListProduct.js";
const Dashboard = {
  async render() {
    const { data: product } = await ProductApi.getAll();

    const { data: cate } = await ProductApi.getAllCate();
    const reducer = (accumulator, currentValue) => {
      return accumulator + +currentValue.quantity;
    };
    
    return /*html*/`
    <head>
    <title>Quản lý sản phẩm</title></head>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-pink" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <div class="sb-sidenav-menu-heading">MENU</div>
                        <a class="nav-link" href="http://localhost:1111/#/dashboard">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Product
                        </a>
                        <a class="nav-link" href="http://localhost:1111/#/dashboardnew">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            News
                        </a>
                        <a class="nav-link" href="http://localhost:1111/#/dashboardcate">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Category
                        </a>
                        
                </div>
               
            </nav>
        </div>
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid">
                    <h1 class="mt-4">QUẢN LÝ SẢN PHẨM</h1>


                    
                    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <a href="#/addproduct"><button class="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> <i class="fab fa-product-hunt"></i> &nbsp
      THÊM SẢN PHẨM
      </button></a>
    </h2>
    </div>
  </div>
</div>

                   
                    
                    <div class="mt-5">
                      ${await CountProduct.render()}
                    </div>
                    <div class="row">
                    <div class="input-group mb-3">
                  </div>
                  <div>
                  </div>
                    <div class="card mb-4">
                    
                        
                       
                        <div class="card-body" id="list-products">
                            <div class="table-responsive">
                            <div id="dataList">
                            ${await ListProduct.render()}
                            </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Copyright &copy; Your Website 2020</div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>`;
  },
  async afterRender() {
    return `${await ListProduct.afterRender()}
    ${await Header.afterRender()}
    `;
  },
};
export default Dashboard;