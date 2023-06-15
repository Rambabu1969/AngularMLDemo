import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(
    private serviceService: ServiceService
    ) { }

  Area:any = 1000;
  Bedrooms:any = 2;
  Bathrooms:any = 2;
  formValue:any;
  
  onSubmit(form:any){
    this.formValue=form.value;
    console.log(form.value);

    console.log(this.formValue.Area);

    this.getPrice(form.value);
  }

  data:any; 
  getPrice(data: any) {
    return this.serviceService.predictPrice(data).subscribe((response: {}) => {
      let data: any = response;
      this.data=data[0];
      
      console.log(response);
    });
  }

}
