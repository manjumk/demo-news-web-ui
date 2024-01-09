import { Injectable } from '@angular/core';
import { ApiHttpService } from './core/services/api-http.service';
import { ConstantsService } from './config/constants.service';
import { catchError, map } from 'rxjs/operators';
import { Story } from './models/story';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private apiHttpService: ApiHttpService,
    private constants: ConstantsService
  ) { }

  getTopStories() {
    return this.apiHttpService
      .getWithType<Story[]>(this.constants.API_BASE_URL + 'stories')
      .pipe(
        map(data => { return data }),
        catchError(error => {
          return error;
        })
      )
  }
}
