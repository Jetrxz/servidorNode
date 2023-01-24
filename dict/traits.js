const enlace = "http://localhost:4200/products";
module.exports = async () => {
    return {
        "trato_ayuda": {
            "catering_general": {
                "saludo": "Le recomendamos realizar pedido de bocaditos para catering segun el tamaño de evento. Digame si necesito algo pequeño grande o mediano para ayudarle.",
            },
            "catering_grande": {
                "saludo": "Para eventos grandes recomendamos pedir a partir de 3 cientos de cada bocadito. Le podemos recomendar pie de piña, manzana, enrrollados, empanadas de nuestros productos de la pagina. si quiere algo mas personalizado puedo contactarse al siguiente numero: 966230010",
            },
            "catering_mediano": {
                "saludo": "Para eventos medianos recomendamos pedir minimo desde 2 ciento de cada bocadito. Le podemos recomendar los bocaditos de nuestra pagina como enrrollados, empanadas, pies entre otros.",
            },
            "catering_peque": {
                "saludo": "Para eventos pequeños o familiares recomendamos pedir 1 ciento por bocadito. le recomendamos los bocaditos de nuestra pagina web.",
            },
        },
        "trato_info_adicional": {
            "reclamo": {
                "saludo": "Sentimos los inconvenientes, le recordamos que los envios de catering son con 1 dia de anticipacion. El envio no deberia tardaar mas de un dia desde el pedido. Si tiene problemas por favor contactese con el siguiente numero: 966530010",
            },
            "informacion": {
                "saludo": "Somos una empresa que se dedica a la preparacion y comercializacion de bocaditos, tortas y postres. Utilizamos productos sin conservantes ni preservantes y nuestro sabor es como hecho en casa. Si me escribe puedo ayudarle a la orientacion de catering de su evento.",
            },
            "agradecimiento":{
                "saludo": "Gracias pro comunciarte con nosotros si tienes alguna pregunta no dudes en avisarnos"
            },
            "bienvenida-dia":{
                "saludo": "Buenos dias soy un chatbot creado por la empresa Dlicia digame en que puedo ayudarle."
            },
            "bienvenida-tarde":{
                "saludo": "Buenas tardes soy un chatbot creado por la empresa Dlicia digame en que puedo ayudarle."
            },
            "bienvenida-noches":{
                "saludo": "Buenas noches soy un chatbot creado por la empresa Dlicia digame en que puedo ayudarle."
            },                        
        },
        "trato_productos": {
            "compra": {
                "saludo": `Si claro puede encontrar nuestros productos en esta pagina en la seccion de productos o haciendo click a este enlace: ${enlace}`,
            } 
        }
    }
};