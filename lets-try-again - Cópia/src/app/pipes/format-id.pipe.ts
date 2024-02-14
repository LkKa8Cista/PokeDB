import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatId'
})
export class FormatIdPipe implements PipeTransform {
  transform(value: number): string {
    const paddedId = value.toString().padStart(4, '0');
    return `#${paddedId}`;
  }
}
