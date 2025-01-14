'use strict'

const productDetails = document.getElementById('product_info')
const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'))
console.log(productDetails)


if (selectedProduct) {
	const left = document.createElement('div')
	const right = document.createElement('div')
	left.classList.add('left')
	right.classList.add('right')
	left.innerHTML = `
		<div class="big-img">
			<img src="${selectedProduct.image}" />
		</div>
	`
	right.innerHTML = `		
				<div class="pname">${selectedProduct.name}</div>
				<div class="ratings">
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star-half-alt"></i>
				</div>
				<div class="price">${selectedProduct.price}</div>
				<div class="size">
					<p>Size :</p>
					<div class="psize active">M</div>
					<div class="psize">L</div>
					<div class="psize">XL</div>
					<div class="psize">XXL</div>
				</div>
				<div class="quantity">
					<p>Quantity :</p>
					<input type="number" min="1" max="5" value="1" />
				</div>
	`
	productDetails.appendChild(left);
	productDetails.appendChild( right);
}
