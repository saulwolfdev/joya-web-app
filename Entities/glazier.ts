import { getDatabase, onValue, ref, set } from "firebase/database";
import initializeFirebase from '../utils/firebaseConfig.ts';

const firebaseapp = initializeFirebase();
const db = getDatabase(firebaseapp);

//El codigo del vidrerista es el celular del mismo.
export default class Glazier {
    public email: string;
    public apellido: string;
    public nombre:string; 
    public estado:string; //Postulante o Plantilla
    public celular: string; 
    public recorridos:Array<string>;
 
    constructor(email:string,apellido:string,nombre:string,estado:string,celular:string,recorridos:Array<string>){
        this.email = email;
        this.apellido = apellido;
        this.nombre = nombre;
        this.estado = estado;
        this.celular = celular;
        this.recorridos = recorridos;
    }
    //export function addCliente(clienteMock: Cliente){
      //  set(ref(db, 'clientes/' + clienteMock.codigo), clienteMock);
    //}
    Insert (data:Glazier){
        set(ref(db, 'glazier/' + data.celular), data);
    }
  
  }

