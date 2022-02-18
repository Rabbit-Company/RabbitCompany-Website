let html = "";

for(let i = 0; i < Object.keys(products).length; i++){
  let productID = Object.keys(products)[i];
  let color = Object.keys(products[productID].variants)[0];
  let size = Object.keys(products[productID].variants[color].size)[0];
  html += "<div class='group relative bg-gray-800 border border-gray-700 rounded-lg flex flex-col overflow-hidden'><div class='aspect-w-3 aspect-h-4 bg-gray-600 group-hover:opacity-75 sm:aspect-none sm:h-96'><img src='" + products[productID]["variants"][color].image + "' alt='" + products[productID].name + "' class='w-full h-full object-center object-cover sm:w-full sm:h-full'></div><div class='flex-1 p-4 space-y-2 flex flex-col'><h3 class='text-sm font-medium text-gray-300'><a href='product.html?id=" + productID + "&color=" + color + "&size=" + size + "'><span aria-hidden='true' class='absolute inset-0'></span>" + products[productID].name + "</a></h3><p class='text-sm text-gray-400'>" + products[productID].description + "</p><div class='pt-2 flex-1 flex flex-col justify-end'><p class='text-base font-medium text-gray-300'>" + products[productID].price + "</p></div></div></div>";
}

document.getElementById("products").innerHTML = html;