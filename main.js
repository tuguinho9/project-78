var images = [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVYkd3ylzL0YswW1TYyOVpZoQ2_YjI1JQw91mhO1YlICvSlm_AoKZyuOCC8oTMLfu6Uw&usqp=CAU" , 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGvSmzbiwnvf91X20mDIwl9yty973MpdQERSLnKX6BBZwEu-AOfpYbWURHSDrTEECQDM&usqp=CAU" , 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUVgUNG0YNDYVwUXB0RrKy3zox0v00abahZA&usqp=CAU" , 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTB9gksKwAgokYQio5sLkK375dBZIrfsJi5Q&usqp=CAU"];
var names = ["Rodrigo Ramos" , "Amanda Braga" , "Pedro Braga", "Valentina Ramos"];
var i = 0;
function update() {
    i++
    var valordosnomes = 3;
    if (i>valordosnomes) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedNames = names[i];
    document.getElementById("imagem").src=updatedImage;
    document.getElementById("nome").innerHTML=updatedNames;
}