import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform 
// tslint:disable-next-line:one-line
{
    transform(value: string, character: string): string {
        return value.replace('-', ' ');
    }
}
