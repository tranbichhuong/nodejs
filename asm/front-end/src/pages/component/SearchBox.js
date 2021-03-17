import ProductApi from "../../api/ProductApi";
import { $ } from '../../utils.js'


const SearchBox = {
    async render() {
        return /*html*/`<div class="input-group flex-nowrap">
       >`
    },
    async afterRender() {
        const { data: product } = await ProductApi.getAll();
        $("#btn-empty-input").style.display = "none"
        const btn_empty = $("#btn-empty-input").addEventListener('click', function () {

            $('#inputSearch').value = "";
            $('#show-search-products').style.display = "none";
            $("#btn-empty-input").style.display = "none";
            $("#btn-empty-input").style.transition = "2s";
        })
        document.querySelector("#inputSearch").addEventListener("keyup", function (e) {

            if ($('#inputSearch').value == "") {
                $('#show-search-products').style.display = "none";
                $("#btn-empty-input").style.display = "none"
                $("#btn-empty-input").style.transition = "2s";
            } else {
                const search = product.filter(product => {
                    return product.name.toLowerCase().startsWith(e.target.value);
                })
                if (e.target.value == "") {

                }
                const search_form = search.map(search => {
                    return `<ul class="list-item">
                   
                   <a href="/#/products/${search.id}"><li class="items"><img src="${search.image}" width="100"/> &#160${search.name}</li></a>
                   </ul>`;
                }).join("");
                $('#show-search-products').style.display = "block";
                $("#btn-empty-input").style.display = "block"
                $("#btn-empty-input").style.transition = "2s";
                $('#show-search-products').innerHTML = search_form;

            }
        })



    }
}
export default SearchBox;