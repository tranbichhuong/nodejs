import ProductApi from "../api/ProductApi.js";
import { reRender } from "../utils.js";
import CountNews from "./component/CountNews.js";
import ListNews from "./component/ListNews.js";
const DashboardNews = {
  async render() {
    const { data: news } = await ProductApi.getAllNews();
    const { id, name } = news;
    const { data: cate } = await ProductApi.getAllCate();
    const reducer = (accumulator, currentValue) => {
      return accumulator + +currentValue.quantity;
    };
    const reducer_cate = (accumulator, currentValue) => {
      return accumulator + +currentValue.cateID;
    };
    return /*html*/ `
    <head>
    <title>Quản lý tin tức</title></head>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion " id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <div class="sb-sidenav-menu-heading">Core</div>
                        <a class="nav-link" href="http://localhost:1111/#/dashboard">
                        <div class="sb-nav-link-icon"></div>
                        <i class="fas fa-globe-asia"></i> Product
                    </a>
                    <a class="nav-link" href="http://localhost:1111/#/dashboardnew">
                        <div class="sb-nav-link-icon"></div>
                        <i class="fas fa-globe-asia"></i>News
                    </a>
                    <a class="nav-link" href="http://localhost:1111/#/dashboardcate">
                    <div class="sb-nav-link-icon"></div>
                    <i class="fas fa-globe-asia"></i>Category
                </a>
                        <div class="sb-sidenav-menu-heading">Interface</div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                            Layouts
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                            Pages
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                    Authentication
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="login.html">Login</a>
                                        <a class="nav-link" href="register.html">Register</a>
                                        <a class="nav-link" href="password.html">Forgot Password</a>
                                    </nav>
                                </div>
                                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                    Error
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="401.html">401 Page</a>
                                        <a class="nav-link" href="404.html">404 Page</a>
                                        <a class="nav-link" href="500.html">500 Page</a>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                       
                    </div>
                </div>
                <div class="sb-sidenav-footer">
                    <div class="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid">
                    <h1 class="mt-4">Dashboard</h1>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> <i class="fas fa-plus-square"></i> &nbsp
        THÊM BÀI VIẾT
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <form action="">
      <div class="row">
      <div class="col-8">
      <div>
      <div class="col-12">
      <label for="inputAddress" class="form-label">Title</label>
      <input type="text" class="form-control" id="form-new-title" placeholder="title">
    </div>
    
    <div class="col-12 form-floating mt-2">
    <textarea class="form-control" placeholder="Leave a comment here" style="height:200px" id="form-new-content"></textarea>
    <label for="floatingTextarea">Content</label>
  </div>
    
      </div>
      </div>
      <div class="col-4">
      <div class="col-12">
      <label for="inputAddress" class="form-label">ID</label>
      <input type="text" class="form-control"  placeholder="ID" id="form-new-id">
    </div>
      <div class="col-12">
      <label for="inputAddress" class="form-label">Image</label>
      <input type="text" class="form-control" placeholder="image" id="form-new-image">
    </div>
    <div class="d-flex justify-content-center mt-2">
    <button id="btn-add-new" class="btn btn-info">Thêm bài viết</button>
    </div>
      </div>
      </div>
      </form>
      </div>
    </div>
  </div>
</div>
                    <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                    
                    ${await CountNews.render()}
                    
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-table mr-1"></i>
                            DataTable Example
                        </div>
                       
                        <div class="card-body" id="list-products">
                            <div class="table-responsive">
                            <div id="dataList">
                            ${await ListNews.render()}
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
    return `${await ListNews.afterRender()}
    `;
  },
};
export default DashboardNews;
