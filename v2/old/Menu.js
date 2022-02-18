function myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Milk");
    node.appendChild(textnode);
    document.getElementById("Menu").appendChild(node);
}

for