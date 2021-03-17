
import ProductApi from "../api/ProductApi"
import {$} from '../utils';

const Contact = {
    render(){
        return /*html*/`
        <head>
    <title>Liên hệ</title></head>
        <div class="container contact-form">
       
        <form>
            <h3>Chúng tôi giúp gì cho bạn?</h3>
           <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text" name="txtName" 
                        id="contact-name"   
                        class="form-control" placeholder="Your Name *" value="" />
                    </div>
                    <div class="form-group">
                        <input type="text" name="txtEmail" 
                        id="contact-email"
                        class="form-control" placeholder="Your Email *" value="" />
                    </div>
                    <div class="form-group">
                        <input type="text" name="txtPhone" class="form-control"
                        id="contact-number-phone"
                        placeholder="Your Phone Number *" value="" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-danger" id="btn-submit-contact">Submit</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <textarea name="txtMsg" class="form-control" placeholder="Your Message *" 
                        id="contact-content"
                        style="width: 100%; height: 150px;"></textarea>
                    </div>
                </div>
            </div>
        </form>
</div>`
    },
    async afterRender() {      
        return `${await Header.afterRender()}`
      }
    
}
export default Contact;