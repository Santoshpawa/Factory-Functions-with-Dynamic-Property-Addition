function createInventoryItem(name,category,price){
    obj = {};
    obj.name = name;
    obj.category = category;
    obj.price = price;

    obj.describeItem = function(){
        console.log(`Item: ${obj.name}, Category: ${obj.category}, Price: ${obj.price}`)
        
    }
    return obj;

}

function addItemDiscount(discountPercent){
    this["discountPercent"] = discountPercent
    applyDiscount(this.price,discountPercent);
}
function applyDiscount(price,discount){
    console.log("Discounted Price for Item:",Math.floor(price*(1-discount/100)))
}

let obj1 = createInventoryItem("Laptop", "Electronics", 15000)



addItemDiscount.call(obj1,20);

obj1.describeItem();