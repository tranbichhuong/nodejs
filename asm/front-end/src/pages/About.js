import Header from "./component/header";

const About ={
    render(){
        return `
        <head>
    <title>Về chúng tôi</title></head>
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>

<div class="aboutus-section">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <div class="aboutus col-12">
                        <h2 class="aboutus-title">Về Chúng tôi</h2>
                        <p class="aboutus-text">- Py Cosmetics chuyên phân phối sỉ và lẻ các sản phẩm mỹ phẩm đến từ Hàn, Nhật, Mỹ,... Với sự đảm bảo về chất lượng và nguồn gốc sản phẩm, Lam Thảo Cosmetic cam kết chỉ phân phối các sản phẩm chính hãng, được nhập trực tiếp tại hãng và không qua trung gian.</p>
                        <p class="aboutus-text">- Chúng mình mong muốn đem đến cho khách hàng nhiều sự lựa với những sản phẩm hot nhất, liên tục được cập nhật cùng mức giá hợp lý nhất nhằm mang đến cho bạn những trải nghiệm tốt hơn. Đồng thời, Lam Thảo luôn có các chương trình khuyến mãi, tích điểm và các chính sách chăm sóc khách hàng diễn ra thường xuyên để tri ân khách hàng đã lựa chọn và đồng hành cùng Py Cosmetics </p>
                       
                    </div>
                    <div class="col-md-12 col-sm-5 col-xs-12">
                    <div class="aboutus-banner">
                        <img src="https://saokimdecor.com/wp-content/uploads/2019/08/thiet-ke-noi-that-shop-my-pham-5.jpg" alt="" class="img-fluid">
                    </div>
                </div>
                
                    
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Chi Nhánh 1</h4>
                                    <img src="https://bloganchoi.com/wp-content/uploads/2019/03/mp-cover-1.jpg" alt="" width="200">
                                    <p>Số 15 THủ Đức, TP Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Chi Nhanh 2</h4>
                                    <img src="https://bloganchoi.com/wp-content/uploads/2019/03/mp-cover-1.jpg" alt="" width="200">
                                    <p>Địa Chỉ: số 10 nguyễn cơ thạch, Hà Nội</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Chi nhánh 3</h4>
                                    <img src="https://bloganchoi.com/wp-content/uploads/2019/03/mp-cover-1.jpg" alt="" width="200">
                                    <p> Địa Chỉ: Số 20 Hai Bà Trưng ,Hà Nội</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    },
    async afterRender() {
        return `${await Header.afterRender()}`
      }
}
export default About;