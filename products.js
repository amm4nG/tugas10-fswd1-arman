const products = [
  {
    nama: "Laptop ASUS ROG",
    harga: 15000000,
    image: "dist/img/avatar.png"
  },
  {
    nama: "Samsung S20",
    harga: 10000000,
    image: "dist/img/avatar.png"
  },
  {
    nama: "Smart TV LG 55 inch",
    harga: 12000000,
    image: "dist/img/avatar.png"
  },
  {
    nama: "Kamera Mirrorless Sony Alpha A7III",
    harga: 20000000,
    image: "dist/img/avatar.png"
  },
  {
    nama: "Headphone Bose QuietComfort 35 II",
    harga: 3000000,
    image: "dist/img/avatar.png"
  },
  {
    nama: "Mouse Gaming Logitech G502 Hero",
    harga: 700000,
    image: "dist/img/avatar.png"
  }
];


let listProducts = document.getElementById('list-products')
for (let index = 0; index < products.length; index++) {
    listProducts.innerHTML +=`
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <h4>${products[index].nama}</h4>
                            <p>Harga : Rp. ${products[index].harga}</p>
                            <p><i class="fab fa-instagram mr-1"></i>Instagram</p>
                        </div>
                        <div class="col-md-4" id="product">
                            <img class="img-fluid" src="${products[index].image}" alt="">
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="" class="float-right btn btn-primary"><i
                            class="fas fa-search mr-1"></i> Serupa</a>
                </div>
            </div>
        </div>
    `
}