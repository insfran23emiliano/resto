import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
	data:any;
	//pedido
	agregarPlatos:string = '-';
	arrayPlatosPedidos=[];
	masPedido:boolean=false;
	idRestoChat:any;
	restoCliente:any;
	restoClienteCodigo:string;
	servicePedido:number=0;
	callService:boolean = true;
	typeLogin:boolean = false //si es qr es false y me logie con codigo es true
	codigoMesa:string;
	callServiceEstado:number=0;
	private header = new HttpHeaders({ 'content-type': 'application/json','Access-Control-Allow-Origin':'*' });
	constructor(private http: HttpClient) { }

	setData(data){
		this.data = data;
	}

	getData(){
		return this.data;
	}

	setTypeLogin(data){
		this.typeLogin = data;
	}

	getTypeLogin(){
		return this.typeLogin;
	}

	//pedidos
	setMessageTotal(data){
		console.log('data-->**',data);

		this.agregarPlatos = data;
	}

	getMessageTotal(){
		console.log('-->**',this.agregarPlatos);
		return this.agregarPlatos;
	}

	//-

	setPlatosPedidos(data){
		this.arrayPlatosPedidos.push(data);
	}

	eliminarPlato(data,id){
		this.arrayPlatosPedidos.splice(this.arrayPlatosPedidos.indexOf(data),id);
	}

	resetArrayPedido(){
		this.arrayPlatosPedidos = [];
	}

	getPlatosPedidos(){
		return this.arrayPlatosPedidos;
	}

	//service

	getConfig(url) {
		return this.http.get(url);
	}

	postConfig(url,obj) {
		console.log("url",url);
		console.log("obj",obj);
		return this.http.post<any>(url,obj);
	}

	putConfig(url,obj) {
		console.log("url",url);
		console.log("obj",obj);
		return this.http.put<any>(url,obj);
	}

	deleteConfig(url,data:any={}) {
		console.log("url",url);
		console.log("data",data);
		return this.http.delete(url,data );
	}

	urlDev(){
		//return 'http://localhost:3000/'; 
		return 'https://serviceresto.herokuapp.com/';
	}

	urlProd(){
		return 'https://serviceresto.herokuapp.com/';
	}
	//maspedidos

	getMasPedidos(){
		return this.masPedido;
	}

	setMasPedidos(data){
		this.masPedido = data;
	}
	//maspedidos restoCliente

	getIdResto(){
		console.log("utils2",this.idRestoChat);
		return this.idRestoChat;
	}

	setIdResto(data){
		this.idRestoChat = data;
		console.log("utils",this.idRestoChat);
	}

	//maspedidos restoCliente

	getIdRestoCliente(){
		return this.restoCliente;
	}

	setIdRestoCliente(data){
		this.restoCliente = data;
	}
	getIdRestoClienteCodigo(){
		return this.restoClienteCodigo;
	}

	setIdRestoClienteCodigo(data){
		this.restoClienteCodigo = data;
	}

	callServicePedidoInit(){//evita que se sume el time y se llame cada vez mas rapido
		return this.servicePedido;
	}
	setCallServicePedidoInit(data){
		this.servicePedido = this.servicePedido +data
	}

	isCallservicePedido(){
		return this.callService
	}
	
	setIsCallservicePedido(data){
		this.callService = data
	}

	//entre por codigo resto y ahora tengo que ingresar el codigo de mesa para comletar el codigo  ej 100.100.1
	setCodigoMesa(data){
		this.codigoMesa = data
	}
	getCodigoMesa(){
		return this.codigoMesa;
	}

	getActiveEstado(){
		return this.callServiceEstado;
	}

	setActiveEstado(data){
		this.callServiceEstado = data;
	}




}
