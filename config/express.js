//JESUS CONDE VIDEO .- CURSO DE ANGULARJS. EL SISTEMA DE CONFIGURACION DE EXPRESS
var config=require('./config'),
	session=require('express-session'),
	express=require('express'),
	morgan=require('morgan'),
	compress=require('compression'),
	bodyParser=require('body-parser'),
	methodOverride=require('method-override');

module.exports=function(){
var app=express();

//JESUS CONDE VIDEO .- CURSO DE ANGULARJS. EL SISTEMA DE CONFIGURACION DE EXPRESS
if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'));
}else if(process.env.NODE_ENV === 'production'){
	app.use(compress());
}

app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(bodyParser.json());
app.use(methodOverride());
//JESUS CONDE VIDEO .- CURSO DE ANGULARJS. EL SISTEMA DE CONFIGURACION DE EXPRESS

app.use(session({
	saveUninitialized:true,
	resave:true,
	secret:config.sessionSecret

}));


//JESUS CONDE VIDEO 56 2:44
app.set('views','./app/views');
app.set('view engine','ejs');
//JESUS CONDE VIDEO 56 2:44

require('../app/routes/index.server.routes.js')(app);
app.use(express.static('./public'));
return app;
};