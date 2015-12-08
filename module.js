/**
 * Created by noel on 15/11/2015.
 */
(function () {
    var app = angular.module('rodrigo', []);
    var servicios = [
        {
            name:"Entrenamiento Personalizado",
            description:"Las ventajas de tener un entrenador personal (en oposición a ir a un gimnasio cerca de tu casa) son muchas. Las principales son:",
            subtitle:["El entrenador está contigo mientras realizas el entrenamiento, guiando, enseñando y motivándote para la consecución de tus objetivos.",
                "Elaboración de un plan de entrenamiento adecuado a tus necesidades",
                "Contacto permanente con tu entrenador durante la semana.",
                "Corrección de la postura en el desarrollo de los ejercicios.",
                ],
            titleSub2:"El entrenamiento personalizado está ideado para conseguir los objetivos específicos, como pueden ser:",

    	    subtitle2 : ["Adelgazamiento general o específico",
            "Hipertrofia o volumen muscular",
            "Definición ",
            "Elasticidad y potencia",
            "Fuerza y velocidad",
            "Tonificación",
            ]
        },
        {
            name:"Entrenamiento para corredores populares",
            description:"Hoy en día el running es el deporte con más adeptos. Por esta razón, ofrecemos un entrenamiento " +
            "adecuado a tus capacidades físicas e intereses. Este tipo de entrenamiento se puede llevar a cabo individualmente o en grupo. " +
            "En este caso, el entrenamiento se puede llevar a cabo por la calle, en un parque, en la pista de atletismo, etc. " +
            "El entrenador te acompañará en las competiciones más importantes para conseguir tus objetivos."
        },
        {
            name:"Entrenamiento para grupos reducidos",
            description:"Si entrenar de forma individualizada te da vergüenza, o te parece extraño." +
            " Una forma no invasiva es entrenar en grupos reducidos. Puedes entrenar con tu pareja o con un grupo de amigos, " +
            "conocidos o vecinos. De esta forma el entrenamiento es más llevadero y motivante. Otra ventaja de este tipo de" +
            " entrenamiento es que conseguirás un descuento significativo."
        },
        {
            name:"Entrenamiento Preboda",
            description:"Siempre queremos lucir nuestro mejor aspecto en este día tan especial." +
            " Te ofrecemos un servicio personalizado para ti y para tu pareja. " +
            "De esta manera, podréis llegar al día de la boda sin estrés y con una forma física ideal. "
        },
        {
            name:"Preparacion para oposiciones",
            description:"Consigue tu plaza para policía, bombero, guardia civil, oficial del ejército, etc., " +
            "con un entrenador que te planificará el entrenamiento y estará a tu lado para conseguir tus objetivos. " +
            "Nosotros te ayudamos a conseguir la máxima puntuación en las pruebas físicas."
        },
        {
            name:"Test de Lactato",
            description:"Entre todas las pruebas de esfuerzo existentes, la más efectiva es el Test de Lactato. " +
            "Consiste en hacer una carrera continua en cinta o pista de atletismo durante un tiempo determinado para medir el ácido láctico que produce tu cuerpo. " +
            "Con esta prueba conseguimos determinar dónde está tu umbral anaeróbico, en el cual comienzas a producir ácido láctico. " +
            "El ácido láctico en pequeñas cantidades no es contraproducente, " +
            "sin embargo, cuando una persona entrena todos los días produciendo ácido láctico, corre riesgos graves para su salud. " +
            "Al hacer el Test de Lactato determinamos de forma precisa a qué ritmo se debe entrenar para no lesionar ni “quemar” al deportista. "
        }];
    var sections=["inicio","servicios","usuarios","informacion","tarifas","contacto"];
    var images=[{
        path:"1.jpg",
        title: "¡¡Consigue tus objectivos ahora!!",
        description: "Te asesoramos para alcanzar tus metas: adelgazar, mejorar la condicion física, tonificar, hipertrofia"},
        {
            path:"2.jpg",
            title: "¿Corres carreras populares?",
            description: "Mejora tus marcas con una planificacion personalizada"},
        {
            path:"3.png",
            title: "Entrenamiento en grupo",
            description: "Entrena con amigos o familias en grupos reducidos. Consigue un descuento"},
        {
            path:"4.jpg",
            title: "¿Tu sueño es ser policia, bombero, guardia civil?",
            description:"Preparate ya para conseguir tu plaza con un entrenador que te ayudara a conseguirlo"
        }

    ];
    var gems=[{
        name:"prueba",
        price:10,
        description:"something to test for",
        canPurchase:false,
        soldOut:true
    },
        {
            name:"new test",
            price:20,
            description:"some random text",
            canPurchase:true,
            soldOut:false
        }
    ];
    app.controller("RodrigoController", function(){
        this.sections=sections;
        this.tab=0;
        this.images=images;
        this.servicios = servicios;
        this.selected=function(value){
            this.tab=value;
        };
    });
    app.controller("TarifasController",function(){
        this.selected=0;
        this.modules=["Tarifas","Descuentos de Grupos","Formas de Pago"];
        this.change=function(value){
            this.selected=value;
        }
    });
    app.directive("tarifas",function(){
        return{
            restrict:"E",
            templateUrl:"tarifas.html",
            controller:"TarifasController",
            controllerAs:"tarifasCtrl"
        }
    });
})()
