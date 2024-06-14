let menu, bebida;
menu = prompt("Titpo de menu: pollo, tacos,encalada")
switch (menu){
    case 'pollo':
        bebida = "¿Desea beber cocacola?";
        break;
    case 'tacos':
        bebida = "¿Desea beber agua de sabor?";
        break;
    case 'encalada':
        bebida = "¿Desea agua?";
        break;
    default:
        bebida = "Elija pollo tacos o encalada";
    }
alert(bebida);