// create a custom pipes:
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myUppercase",
})
export class MyUppercasePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // what is transform method return will be the output of pipe:
    // return value in uppercase:
    return value.toUpperCase();
  }
}
