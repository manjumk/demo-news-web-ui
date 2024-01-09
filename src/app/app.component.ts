import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { NewsService } from './news.service';
import { Story } from './models/story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'demo-news-web-ui';
  showclear: boolean = false;
  search: string = '';
  rowData: Story[] = [];
  gridApi: any;

  colDefs: ColDef[] = [
    {
      field: "id",
      hide: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      flex: 1
    },
    {
      field: "url",
      headerName: 'Url',
      flex: 1,
      onCellClicked: (event: any) =>{
        let url = event.data.url;
        if (url != null && url != "")
          window.open(url, "_blank");
      }
        
    },
  ];

  constructor(private newService: NewsService) { }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.showLoadingOverlay();
    this.newService.getTopStories().subscribe(response => {
      this.rowData = response;
    })
  }
}
