const productosDe = [
    { id: 1,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639628864/WikyApp/Productos/OldN7_ahaspi.png" ,title:"Jack Daniels|Old Nº7",precio: 5000, categ: "wisky",descripcion: "La presentación Old Nº 7 es de color ámbar; en nariz es de intensidad media, se perciben aromas a maíz, especias (vainilla, nuez moscada, pimienta), miel, notas florales. Detrás, aparecen notas tostadas y torrefactas.", stock:5},
    { id: 2,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639628863/WikyApp/Productos/BarrelRye_hemp9g.png" , title: "Jack Daniels|Single Barrel Rye", precio:6000, categ: "wisky",descripcion: "Este whisky se hace a mano y de una forma muy delicada, usando un 70% de centeno, 18% de maíz y 12% de mezcla de granos de cebada malteada, lo que da al whisky un toque limpio y un sabor dulce, ligeramente más corto en la boca que otras ofertas de único barril.", stock:5},
    { id: 3,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639628864/WikyApp/Productos/BarrelStrength_q5mc4t.png" , title: "Jack Daniels|Single Barrel Strength", precio:3000, categ: "wisky",descripcion: "Sabor complejo llena de especias de cañón y rica roble tostado. Matices de plátano a la plancha, el ron y pasas helado, canela caliente, y el chocolate derretido. El acabado es cálido y persistente, con grosella roja y rosa granos de pimienta.", stock:5},
    { id: 4,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639628864/WikyApp/Productos/GentlemanJack_b5c1yv.png" , title: "Jack Daniels|Gentleman Jack", precio:6000, categ: "wisky",descripcion: "Jack Daniel's Gentleman Jack es de color ámbar oscuro. En nariz notas dulzonas de azúcar moreno acompañadas de un buen ahumado y tostados, todo en muy buena armonía. En boca se siente calidez y suavidad de notas almibaradas, se intuye alguna especia picante y matices de regaliz.", stock:6},
    { id: 5,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639628864/WikyApp/Productos/TenneseeHoney_ebvhko.png" , title: "Jack Daniels|Tennesee Honey", precio:8000, categ: "wisky",descripcion: "Jack Daniel's Tennesse Honey está elaborado con el auténtico Jack Daniel Nº 7 al cual se añade un licor de miel. Así, se convierte en un whiskey con un suave aroma a miel perfecto para tomar bien frío o como base en combinados y para los amantes de destilados suaves y amables.", stock:10},
    { id: 6,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639628865/WikyApp/Productos/TennesseeRye_wfvryj.png" , title: "Jack Daniels|Tennessee Rye", precio:13000, categ: "wisky",descripcion: "Jack Daniel's Tennessee Rye se elabora con un 70 % de centeno, un 18 % de maíz y un 12 % malta de cebada. Es el proceso de elaboración de Tennessee Rye el que aporta un final inconfundiblemente Jack, y gracias a su contenido de centeno del 70 %, esta nueva expresión realza un sabor especiado muy suave en el paladar.", stock:5},
    { id: 7,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639672663/WikyApp/Productos/beefeaterLondon_emipz9.png" , title: "Beefeater|London Dry", precio:8000, categ: "Gin",descripcion: "Beefeater London Dry Gin es una de las ginebras más vendidas del mundo, se destila al estilo London Dry tradicional. Su sabor es extraordinariamente limpio, con un intenso toque de enebro, equilibrado con fuertes matices cítricos.", stock:3},
    { id: 8,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639672663/WikyApp/Productos/pinkStrawberry_ww2tae.png" , title: "Beefeater|Pink Strawberry", precio:5000, categ: "Gin",descripcion: "Beefeater Pink Strawberry es la nueva ginebra rosa fabricada con la receta original de Beefeater London Dry más el aroma de fresa natural para darle un intenso y delicioso sabor a fresa. Añade a Beefeater un matiz cítrico punzante y de acidez. Nota aromática y floral con un matiz de Violeta de Parma.", stock:4},
    { id: 9,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639673000/WikyApp/Productos/24_zzxdz5.png" , title: "Beefeater|24", precio:5000, categ: "Gin",descripcion: "Beefeater 24 contiene una compleja mezcla de 12 extractos naturales, como piel de pomelo, té Sencha japonés y té verde chino, que infusionan en el líquido durante 24 horas. Procedente de las laderas del Monte Fuji, en Japón.", stock:8},
    { id: 10,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639672662/WikyApp/Productos/absolut_ocj0cm.png" , title: "Absolut|Vodka Original", precio:5000, categ: "vodka",descripcion: "Absolut Vodka Original, a diferencia de lo que ocurre con muchos otros vodkas, no contiene azúcar añadido, lo que lo hace tan puro como puede ser el vodka. Tiene un sabor rico, con cuerpo y complejo, pero suave y maduro con el carácter distintivo del grano de trigo, seguido de un toque a frutas secas.", stock:5},
    { id: 11,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639672662/WikyApp/Productos/absolutevoices_s3h4n3.png" , title: "Absolut|Voices", precio:6000, categ: "vodka",descripcion: "Absolut Voices, edición limitada que representa las ondas de voz expandiéndose en la icónica botella, plasmando la iniciativa de aquellas personas que buscan un cambio en el mundo, empoderando los valores como la solidaridad, el amor y la unión que busca provocar en los círculos más cercanos.", stock:5},
    { id: 12,imagen: "https://res.cloudinary.com/dlvolch1i/image/upload/v1639672662/WikyApp/Productos/absolut100_dfjxuo.png" , title: "Absolut|100", precio:8000, categ: "vodka",descripcion: "ABSOLUT 100 es un vodka súper premium intenso, aunque excepcionalmente suave. Basta incluso con una pequeña cantidad para disfrutar de una experiencia ABSOLUT 100 total. La elegante botella negra destaca sobre el resto, realzando el trato de lujo. Absolut 100 son 50° ALC/VOL ( 100 PROOF ) del mejor vodka.", stock:5}
]

export default productosDe