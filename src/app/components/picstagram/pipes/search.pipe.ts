// create a custom pipe:
// Implement search pipe:
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const query = args[0];
    if (typeof query === "undefined") return value;
    return value.filter((post) => {
      // if search matches then return value:
      // use toUpperCase() for matching characters which are in uppercase:
      return post.caption.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
  }
}
