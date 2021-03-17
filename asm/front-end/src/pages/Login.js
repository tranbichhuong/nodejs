import ProductApi from "../api/ProductApi.js";
import { $ } from "../utils.js";
import axios from "axios";

const Login = {
  async render() {
    return /*html*/ `
    <head>
    <title>Login</title>
    </head>
    <div class="container mb-5">
    <div class="row form-login ">
    <div class="text-center">
      <h2 class="title-login">LOGIN</h2>
    </div>
    <div class ='text-danger text-center'>
    <span class="errorLogin"></span>
    </div>

    <div class="col-12">
    <form>
      <div class="container">
        <div class="mb-3">
          <label for="" class="form-label text-white">User name</label>
          <input type="text" class="form-control" id="form-login-username" placeholder="Username">
        
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label text-white">Password</label>
          <input type="password" class="form-control" id="form-login-password" placeholder="Password">
        </div>
        
        <div class="">
        <button type="submit" class="btn btn-primary mb-3 w-100" id="btn-login">Sign In</button></div>
        <div class="text-center">
        <a href="http://localhost:1111/#/registration">Bạn chưa có tài khoản ?</a>
        </div>
       
        </form>
    </div>
    </div>
      
    </div>
      `;
  },
  async afterRender() {
    $("#btn-login").addEventListener("click", async function (e) {
      e.preventDefault();
      const username = $("#form-login-username").value;
      const password = $("#form-login-password").value;
      //start valite đăng nhập 

      if(username == "" || password == ""){
        $(".errorLogin").innerHTML =
          "Vui lòng nhập thông tin tài khoản"
          return false;
      }
      const { data } = await ProductApi.getAccount(username, password);
      if (data.length === 0)
        return ($(".errorLogin").innerHTML =
          "Thông tin tài khoản hoặc mật khẩu không chính xác");
      else {
        data.map(({ id, username,image, email, password,numberphone, role }) => {
          (window.location.hash = "/"),
          localStorage.setItem("id", id);
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("email", email);
          localStorage.setItem("role", role);
          localStorage.setItem("image", image);
          localStorage.setItem("numberphone",numberphone);
          if (role == 0) {
            $("#dashboard-link").classList.add("show");
          } else {
            $("#dashboard-link").classList.add("hide");
          }
        });
      }
    });
   
  },
};
export default Login;
