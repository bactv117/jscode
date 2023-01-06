function Mainarray(name, model, cost, quantity) {
  this.name = name;
  this.model = model;
  this.cost = cost;
  this.quantity = quantity;
  this.luutru = function inventoryarray() {
    return "lưu trữ";
  };
}

Mainarray["túi xách"] = new Mainarray("Chanel", "Túi đeo chéo", 12.0, 100);
Mainarray["Dày"] = new Mainarray("Adidas", "Air fox one", 2000, 1000);
Mainarray["Laptop"] = new Mainarray("HP", "Máy tính xách tay", 4000, 10000);

document.write("Tên Sản phẩm 1: " + Mainarray["túi xách"].name + "<br>");
