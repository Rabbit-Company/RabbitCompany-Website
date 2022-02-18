var get = {}
location.search.substr(1).split("&").forEach(function(item) {get[item.split("=")[0]] = item.split("=")[1]})

if(typeof(products[get.id]) == 'undefined') window.location = "products.html";
if(products[get.id].storeID == 1){
  if(typeof(products[get.id].variants[get.color]) == 'undefined') window.location = "products.html";
  if(typeof(products[get.id].variants[get.color].size[get.size]) == 'undefined') window.location = "products.html";
}

html = "";

//Header
html += "<div class='lg:col-start-8 lg:col-span-5'><div class='flex justify-between'><h1 class='text-xl font-medium text-gray-200'>" + products[get.id].name + "</h1><p class='text-xl font-medium text-gray-200'>" + products[get.id].price + "</p></div></div>";
//Images
html += "<div class='mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3'><h2 class='sr-only'>Images</h2><div class='grid grid-cols-1 lg:grid-cols-1 lg:grid-rows-1 lg:gap-8'><img src='" + products[get.id]["variants"][get.color].image + "' alt='" + products[get.id].name + "' class='lg:col-span-2 lg:row-span-2 rounded-lg'></div></div>";
//Colors
html += "<div class='mt-8 lg:col-span-5'><div><h2 class='text-sm font-medium text-gray-300'>Color</h2><fieldset class='mt-2'><legend class='sr-only'>Choose a color</legend><div class='flex items-center space-x-3'>";
for(let i = 0; i < Object.keys(products[get.id].variants).length; i++){
  let variantColor = Object.keys(products[get.id].variants)[i];
  let borderColor = "border-gray-700";
  if(variantColor == get.color) borderColor = "border-2 border-indigo-400";
  html += "<a href='product.html?id=" + get.id + "&color=" + variantColor + "&size=" + get.size + "' class='border " + borderColor + " -m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'><p class='sr-only'>" + variantColor + "</p><span aria-hidden='true' class='h-8 w-8 " + products[get.id].variants[variantColor].color + " border border-black border-opacity-10 rounded-full'></span></a>";
}
html += "</div></fieldset></div>";
//Size
html += "<div class='mt-8'><div class='flex items-center justify-between'><h2 class='text-sm font-medium text-gray-300'>Size</h2></div><fieldset class='mt-2'><legend class='sr-only'>Choose a size</legend><div class='grid grid-cols-3 gap-3 sm:grid-cols-6'>";
for(let i = 0; i < Object.keys(products[get.id].variants[get.color].size).length; i++){
  let size = Object.keys(products[get.id].variants[get.color].size)[i];
  let backgroundColor = "";
  if(size == get.size) backgroundColor = "bg-gray-600";
  html += "<a href='product.html?id=" + get.id + "&color=" + get.color + "&size=" + size + "' class='border border-gray-700 " + backgroundColor + " rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none'><p class='text-gray-400' id='size-choice-1-label'>" + size + "</p></a>";
}
html += "</div></fieldset></div>";

//Order button
html += "<a href='https://buy.stripe.com/" + products[get.id]["variants"][get.color]["size"][get.size] + "' target='_blank' class='mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Order</a>";

//Description
html += "<div class='mt-10'><h2 class='text-sm font-medium text-gray-300'>Description</h2><div class='mt-4 prose prose-sm text-gray-400'><p>" + products[get.id].description + "</p></div></div>";

//Policies
html += "<section aria-labelledby='policies-heading' class='mt-10'> <h2 id='policies-heading' class='sr-only'>Our Policies</h2> <dl class='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'><div class='bg-gray-800 border border-gray-700 rounded-lg p-6 text-center'> <dt><svg class='mx-auto h-6 w-6 flex-shrink-0 text-gray-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'> <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /></svg><span class='mt-4 text-sm font-medium text-gray-300'> International delivery </span> </dt> <dd class='mt-1 text-sm text-gray-400'>Get your order in 1 month</dd></div><div class='bg-gray-800 border border-gray-700 rounded-lg p-6 text-center'> <dt><svg class='mx-auto h-6 w-6 flex-shrink-0 text-gray-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='1.5' aria-hidden='true'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><circle cx='7' cy='17' r='2' /><circle cx='17' cy='17' r='2' /><path d='M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5' /><line x1='3' y1='9' x2='7' y2='9' /></svg><span class='mt-4 text-sm font-medium text-gray-300'> Free delivery </span> </dt> <dd class='mt-1 text-sm text-gray-400'>Shipping is included</dd></div> </dl></section>";

document.getElementById("product").innerHTML = html;