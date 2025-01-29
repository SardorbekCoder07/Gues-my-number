'use strict'

const productDetails = document.getElementById('product_info')
const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'))

console.log(selectedProduct);

if (productDetails && selectedProduct) {
	const left = document.createElement('div')
	const right = document.createElement('div')
	left.classList.add('left')
	right.classList.add('right')

	left.innerHTML = `
		<div class="big-img">
			<img src="${selectedProduct.image}" alt="Product Image" />
		</div>
		<div class="images">
			
			${selectedProduct.additionalImages
			.map(
				(img) =>
					`<div class="small-img">
						<img src="${img}" alt="Additional Image" class="thumbnail" />
					</div>	
					`
			)
			.join('')}
			</div>
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
			${selectedProduct.sizes
				.map((size) => `
					<div class="psize">${size}</div>
				`).join('')}
		</div>
		<div class="quantity">
			<p>Quantity :</p>
			<input type="number" min="1" max="5" value="1" />
		</div>
	`

	productDetails.appendChild(left)
	productDetails.appendChild(right)
}
