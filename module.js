/**
 * Created by noel on 15/11/2015.
 */
(function () {
    var app = angular.module('rodrigo', []);
    var servicios = [
        {
            name:"Entrenamiento Personalizado",
            description:"Las ventajas de tener un entreador personal en contraposicion a ir a un gimnacion cerca de tu casa son muchas. Las principales son:\n" +
            "El entrenador esta contigo en todo momento \n" +
            "Programacion de un plan de entrenamiento adecuado a tus necesidades \n" +
            "Corrección de la postura en el desarrollo de los ejercicios"
        },
        {
            name:"Entrenamiento para grupos reducidos",
            description:"Si entrenar de forma individualizada te da verguenza, o te parece extraño, una forma no invasiva " +
            "es entrenar en grupos reducidos. Puedes entrenar con tu pareja o con un grupo de amigos. De esta forma el entranmiento es mas llevadero y motivador. " +
            "Una ventaja de este tipo de entrenamiento es que conseguiras un descuento significativo."
        },
        {
            name:"Entrenamiento Preboda",
            description:"Siempre queremos lucir nuestro mejor aspecto en este dia tan especial. Te ofrecemos un servicio personalizado para ti y para tu pareja." +
            "De esta manera podreis llegar al dia de la boda sin estres y con una forma física ideal"
        },
        {
            name:"Preparacion para oposiciones",
            description:"Consigue tu plaza para policía, bombero, guardia civil, oficial del ejército, etc, " +
            "con un entrenador que te planificara un entrenamiento y estará a tu lado para conseguir tus objetivos.\n" +
            "Nostros te ayudamos a conseguir la maxima puntuacion en las pruebas fisicas"
        },
        {
            name:"Test de Lactato",
            description:"Entre todas las pruebas de esfuerzo existentes a dia de hoy, una de las mejores es el test de lactato.\n" +
            "Consiste en hacer una carrera continua en cinta o pista de atletismo durante un tiempo determinado para medir el ácido lactico que produce tu cuerpo.\n" +
            "Con esta prueba conseguimos determinar donde esta tu umbral anaeróbico, en el cual comienzas a producir ácido láctico.\n" +
            "El ácido láctico en pequeñas cantidades no es contraproducente, sin embargo, cuando una persona enterna todos los dias produciendo ácido láctico" +
            "corre riesgos graves para su salud.\n" +
            "Al hacer el Test determinamos de forma precisa a que ritmo debes entrenar para no lesionarte ni quemarte."
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
