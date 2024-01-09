import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ConstantsService {
    //TODO - Can be set it from enviroment file
    public readonly API_BASE_URL: string = 'http://localhost:5799/api/news/v1/'
}