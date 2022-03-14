import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value :any[],filterString:string,eventName:string): any[] {
    const result:any=[];
    if(!value||filterString===''||eventName===''){
      return value;
    }
    
   value.forEach((a:any)=>{
     if(a[eventName].trim().toLowerCase().include(filterString.toLowerCase())){
       result.push(a);
     }
   });
   return result;
  }

}
