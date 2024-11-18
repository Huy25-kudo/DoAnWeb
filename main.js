const images = [
    "https://dlcdnwebimgs.asus.com/gain/55F6B270-7658-48D8-B818-369BFD13A708/fwebp",
    "https://dlcdnwebimgs.asus.com/gain/D20CB020-7776-4FF7-A6EE-81D21CB79468/fwebp",
    "https://dlcdnwebimgs.asus.com/gain/9E81207C-82DF-4253-9B69-66BE84CB27CE/fwebp"
];

const banner = document.getElementById('banner');
let currentIndex = 0;
function updateBanner() {
    banner.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}
updateBanner();
setInterval(updateBanner, 3000);

function taodanhmuc()
{
    var brand = [
        {brandid:'Asus', brandname:'Asus'},
        {brandid:'lenovo', brandname:'Lenovo'},
        {brandid:'acer', brandname:'Acer'},
        {brandid:'dell', brandname:'Dell'},
        {brandid:'HP', brandname:'HP'},
        {brandid:'MSI',brandname:"MSI"},
        {brandid:'macbook',brandname:'Macbook'},
        {brandid:'PhuKien',brandname:'Phu kien'}

    ]
    var s="";
    for(i=0;i<brand.length;i++)
    {
        var a='<a href="#"><li id="'+brand[i].brandid + '"onclick=" hienthisanphamtheotheloai (this)">' + brand[i].brandname + '</li></a>';
            s+=a;
    }
    document.getElementsByClassName("nav")[0].innerHTML=s;
    const navItems = document.querySelectorAll('.nav li');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Xóa lớp active khỏi tất cả các <li>
            navItems.forEach(nav => nav.classList.remove('active'));

            // Thêm lớp active cho phần tử được nhấn
            item.classList.add('active');
        });
    });
}
window.onload = function(e){
    taodanhmuc();
}

const products = [
    { id: "Asus", name: "Laptop gaming ASUS ROG Strix G16 G614JU N3206W", price: "36.990.000₫", image: "https://techspace.vn/wp-content/uploads/2022/09/z3336346652881_aacd526be1f3be432b4a4d96f86ba587-1-600x600.jpg" },
    { id: "Asus", name: "Laptop gaming ASUS ROG Zephyrus G16 GA605WI QR152WS", price: "30.490.000₫", image: "https://techspace.vn/wp-content/uploads/2022/09/z3336346652881_aacd526be1f3be432b4a4d96f86ba587-1-600x600.jpg" },
    { id: "lenovo", name: "Laptop gaming Lenovo LOQ 15IAX9 83GS001QVN", price: "26.490.000₫", image: "https://techspace.vn/wp-content/uploads/2022/09/z3336346652881_aacd526be1f3be432b4a4d96f86ba587-1-600x600.jpg" },
    { id: "lenovo", name: "Laptop gaming Lenovo Legion 7 16IRX9 83FD006JVN", price: "23.490.000₫", image: "https://techspace.vn/wp-content/uploads/2022/09/z3336346652881_aacd526be1f3be432b4a4d96f86ba587-1-600x600.jpg" },
    { id: "macbook", name: "MacBook Air M2 2022 8-core 256GB", price: "26.290.000₫", image: "https://techspace.vn/wp-content/uploads/2022/09/z3336346652881_aacd526be1f3be432b4a4d96f86ba587-1-600x600.jpg" },
    { id: "macbook", name: "MacBook Pro 13\" M2 2022 256GB", price: "38.790.000₫", image: "https://techspace.vn/wp-content/uploads/2022/09/z3336346652881_aacd526be1f3be432b4a4d96f86ba587-1-600x600.jpg" },
    { id: "acer", name: "Laptop gaming Acer Predator Helios Neo 16 PHN16 72 78DQ", price: "27.990.000₫", image: "https://techspace.vn/wp-content/uploads/2022/09/z3336346652881_aacd526be1f3be432b4a4d96f86ba587-1-600x600.jpg" },
    { id: "acer", name: "Laptop gaming Acer Predator Helios Neo 16 PHN16 72 78DQ", price: "34.290.000₫", image: "https://techspace.vn/wp-content/uploads/2022/09/z3336346652881_aacd526be1f3be432b4a4d96f86ba587-1-600x600.jpg" },
    { id: "dell", name: "Laptop Dell Inspiron 15 3520 i5U165W11BLU-FP", price: "42.990.000₫", image: "https://techspace.vn/wp-content/uploads/2022/09/z3336346652881_aacd526be1f3be432b4a4d96f86ba587-1-600x600.jpg" },
    { id: "dell", name: "Laptop Dell Vostro 16 V5630 i5U165W11GRU", price: "74.990.000₫", image: "https://techspace.vn/wp-content/uploads/2022/09/z3336346652881_aacd526be1f3be432b4a4d96f86ba587-1-600x600.jpg" },
];
const itemsPerPage = 8;
let currentPage = 1;
let currentCategory = "all"
function hienthisanphamtheotheloai(obj)
{      currentCategory = obj.id; // Cập nhật loại hiện tại
    currentPage = 1; // Quay về trang đầu tiên
    displayProducts(currentPage); // Hiển thị sản phẩm thuộc loại
    setupPagination(); // Cập nhật phân trang
    var s="";
    for(let i=0;i<products.length;i++)
    {   console.log(products[i].brandid + " - "+ obj.id);
        if(products[i].id==obj.id)
        {   
            s=s+`
                 <div class="product-card">
                    <img src="${products[i].image}" alt="${products[i].name}" width="100%">
                    <h3>${products[i].name}</h3>
                    <p>${products[i].price}</p>
                </div>
           `;
        }
    }
        console.log(s);
        document.getElementById("productGrid").innerHTML=s;
}
// Configuration


function displayProducts(page) {
    const filteredProducts = currentCategory === "all"? products: products.filter(product => product.id === currentCategory);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";
    currentProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productGrid.appendChild(productCard);
    });
}

function setupPagination() {
    const filteredProducts = currentCategory === "all"? products: products.filter(product => product.id === currentCategory);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); 
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.className = i === currentPage ? "active" : "";
        button.addEventListener("click", () => {
            currentPage = i;
            displayProducts(currentPage);
            setupPagination();
        });
        pagination.appendChild(button);
    }
}

// Initialize
displayProducts(currentPage);
setupPagination();
document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'flex';
});
document.getElementById('signup-btn').addEventListener('click', () => {
    document.getElementById('signup-modal').style.display = 'flex';
});
document.getElementById('close-login').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'none';
});
document.getElementById('close-signup').addEventListener('click', () => {
    document.getElementById('signup-modal').style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
// Lấy tất cả các phần tử <li> trong danh sách .nav
const navItems = document.querySelectorAll('.nav li');

// Lặp qua từng phần tử và thêm sự kiện click
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Xóa lớp active khỏi tất cả các <li>
        navItems.forEach(nav => nav.classList.remove('active'));

        // Thêm lớp active cho phần tử được nhấn
        item.classList.add('active');
    });
});
