import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static BASE_URL: string = 'http://localhost:3000';

  constructor() { 
  }

  static async get(endpoint: string):Promise<any> {
    if(endpoint === "questions"){
      return await this.questions()
    }
    if(endpoint === "options"){
      return await this.options()
    }
  } 
  static async questions(){
    axios.defaults.baseURL = this.BASE_URL;
    let result = await axios.get('/questions')
    return result;
  }
  static async options(){
    axios.defaults.baseURL = this.BASE_URL;
    let result = await axios.get('/options')
    return result;
  }
  static async createAnswer(payload: any){
    axios.defaults.baseURL = this.BASE_URL;
    
    await axios.post('/answers', {
      payload
    }).then(response => {
        // Respuesta del servidor
        return response;

    }).catch(e => {
        console.log(e);
        return e
    });
  }
}
