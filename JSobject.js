const car = {
    Name: "Ferrari",
    Model: "La Ferrari",
    HP: 1200,
    FullName : function()
{
    console.log("Name is Scuderia Ferrari HP");
}
};
const obj2 = new Object();
const obj3 = {};
obj2.Address= "ABES Engineering College";
obj2.Contact= "9456xxxxxx";

console.log(car);
console.log(obj2);
console.log(obj3);
console.log(obj2.Address);
console.log(obj2.Contact);
delete car.Model;

(car.FullName());
