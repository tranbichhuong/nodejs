import ProductApi from "../../api/ProductApi";
const Header = {
  async render() {
    const { data: cate } = await ProductApi.getAllCate();
    return /*html*/ ` 
        
        
        <nav class="navbar fixed-top navbar-expand-lg navbar-waring  fixed-top">
        <div class="container">
         <a class="mb-50" href="http://localhost:1111/"><img src="../../../src/public/images/logo1.png" width="50"/></a>
         
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav mr-auto ml-5">
            <li class="nav-item">
                <a class="nav-link" href="http://localhost:1111/">Trang Chủ</a>
              </li>
            <li>
           
              <li class="nav-item nav-product">
                <a class="nav-link" href="http://localhost:1111/#/products">Sản phẩm</a>
                <ul id="cate_item">
                ${cate
                  .map((cate) => {
                    return `<a href="#/category/${cate.id}"><li>${cate.name}</li></a>`;
                  })
                  .join("")}
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:1111/#/dashboard">Quản lý</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:1111/#/news">Tin tức</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:1111/#/about">
                  Về chúng tôi
                </a>
               
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://localhost:1111/#/contact">
                Liên hệ
                </a>
          
              </li>
              </ul>
             
          </div>
          <form class="d-flex ml-auto">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
        <div class="btn-group mr-5 " role="group">
        <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fas fa-align-justify"></i>
        </button>
        <ul class="dropdown-menu  " style="margin-left:-50px; background-color: pink  " aria-labelledby="btnGroupDrop1">
          <li><a class="dropdown-item" href="#">Đăng Nhập</a></li>
          <li><a class="dropdown-item" href="#">Đăng Kí</a></li>
        </ul>
      </div>
    </div>
      </nav>`;
  },
  async afterRender() {},
};

export default Header;
