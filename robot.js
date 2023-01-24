let traits = require("./dict/traits");
const enlace = "http://localhost:4200/products";

module.exports = async (rWit, indexChat) => {
    let robotRes = "Disculpe no le entendi.";
    let resJson = {};
    let localTraits = await traits();
    localTraits["trato_eventos"] = {
        "eventos": {
            "saludo": "Tenemos pie de piña y manzana, enrrollados, alfajores entre muchos mas. Si son eventos pequeños sugerimos comprar desde medio ciento, para eventos medianos pida desde un ciento y si son eventos grandes a partir de dos cientos a mas, ademas sii necesita ayuda con acomodar bocaditos y decoraciones en su evento llame al siguiente numero: 966530010",
        },
    }
    localTraits["trato_productos"] = {
        "compra": {
            "saludo": `Si claro puede encontrar nuestros productos en esta pagina en la seccion de productos o haciendo click a este enlace: ${enlace}`,
        },
    }
    for(var i=0; rWit["traits"].length>i; i++) {
        let nameTrait = rWit["traits"][i];
        if ( localTraits[nameTrait] ) {
            let single = localTraits[nameTrait];
            for(let u=0; rWit["wit"]["traits"][nameTrait].length>u; u++) {
                resJson = localTraits[nameTrait]
                    [rWit["wit"]["traits"][nameTrait][u]["value"]];
            }
        }
    }

    if ( Object.keys(resJson).length !== 0 ) {
            robotRes = resJson["saludo"];
    }

    return robotRes;
};