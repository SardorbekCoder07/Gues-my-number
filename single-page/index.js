'use strict'
const products = [
	{
		id: 1,
		name: "Blue T-Shirt",
		price: "$10.99",
		image: "./images/blue-shirt.webp",
		description: "This is a comfortable and stylish blue T-shirt.",
		sizes: ["S", "M", "L", "XL"],
		colors: ["Blue", "Black", "White"],
		largeImage: "./images/blue-shirt.webp",
		additionalImages: [
			"./images/blue_1.jpg",
			"./images/blue_2.jpg",
			"./images/blue_3.jpg",
		],
	},
	{
		id: 2,
		name: "Casual Shoes",
		price: "$25.99",
		image: "./images/shoes.jpg",
		description: "High-quality casual shoes for everyday wear.",
		sizes: [38, 39, 40, 41, 42, 43],
		colors: ["Brown", "Black", "Gray"],
		largeImage: "./images/shoes.jpg",
		additionalImages: [
			"./images/shoes_1.avif",
			"./images/shoes2.jpg",
			"./images/shoes3.jpg",
		],
	},
	{
		id: 3,
		name: "Red Jacket",
		price: "$49.99",
		image: "./images/red_jacket.jpg",
		description: "Stay warm and look great in this stylish red jacket.",
		sizes: ["M", "L", "XL", "XXL"],
		colors: ["Red", "Navy Blue", "Black"],
		largeImage: "./images/red_jacket.jpg",
		additionalImages: [
			"./images/red_jacket1.jpg",
			"./images/red_jacket1.jpg",
			"./images/red_jacket1.jpg",
		],
	},
	{
		id: 4,
		name: "Sports Watch",
		price: "$15.00",
		image: "./images/sport_watch.webp",
		description: "A lightweight and durable sports watch.",
		sizes: [],
		colors: ["Black", "Silver", "Blue"],
		largeImage: "./images/sport_watch.webp",
		additionalImages: [
			"./images/sport_watch1.jpg",
			"./images/sport_watch1.jpg",
			"./images/sport_watch1.jpg",
		],
	},
	{
		id: 5,
		name: "Sunglasses",
		price: "$9.99",
		image: "./images/Sunglasses.webp",
		description: "Protect your eyes with these stylish sunglasses.",
		sizes: [],
		colors: ["Black", "Brown", "Gold"],
		largeImage: "./images/Sunglasses.webp",
		additionalImages: [
			"./images/Sunglasses1.jpg",
			"./images/Sunglasses1.jpg",
			"./images/Sunglasses1.jpg",
		],
	},
	{
		id: 6,
		name: "Leather Backpack",
		price: "$39.99",
		image: "./images/Leather_Backpack.jpg",
		description: "A durable leather backpack with plenty of space.",
		sizes: [],
		colors: ["Brown", "Black"],
		largeImage: "./images/Leather_Backpack.jpg",
		additionalImages: [
			"./images/Leather_Backpack1.jpg",
			"./images/Leather_Backpack1.jpg",
			"./images/Leather_Backpack1.jpg",
		],
	},
	{
		id: 7,
		name: "White Sneakers",
		price: "$29.99",
		image: "./images/White_Sneakers.jpg",
		description: "Comfortable white sneakers for all occasions.",
		sizes: [40, 41, 42, 43, 44],
		colors: ["White", "Gray", "Blue"],
		largeImage: "./images/White_Sneakers.jpg",
		additionalImages: [
			"./images/White_Sneakers1.jpg",
			"./images/White_Sneakers1.jpg",
			"./images/White_Sneakers1.jpg",
		],
	},
	{
		id: 8,
		name: "Winter Gloves",
		price: "$7.49",
		image: "./images/Winter_loves.jpg",
		description: "Keep your hands warm with these winter gloves.",
		sizes: ["S", "M", "L"],
		colors: ["Black", "Gray", "Red"],
		largeImage: "./images/Winter_loves.jpg",
		additionalImages: [
			"./images/Winter_Gloves1.jpg",
			"./images/Winter_Gloves1.jpg",
			"./images/Winter_Gloves1.jpg",
		],
	},
]

const productList = document.getElementById("shop-content")

products.forEach((product) => {
	const productCard = document.createElement('div')
	productCard.classList.add('product-box')
	productCard.innerHTML = `
		<img src="${product.image}" alt="${product.name}" class="product-img"/>
		<h2 class="product-title">${product.name}</h2>
		<span class="price">${product.price}</span>
		<i class="bx bx-shopping-bag add-card"></i>
	`
	productList.appendChild(productCard)

	productCard.addEventListener(('click'), (e) => {
		localStorage.setItem('selectedProduct',JSON.stringify(product))
		window.location.href='./product.html'
	})
})