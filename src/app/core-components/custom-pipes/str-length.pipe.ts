import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'strlength' })

/** Precede the input string with the word "Awesome " */

export class StrLengthPipe implements PipeTransform {
  transform(phrase: string) {
    return phrase ?  phrase.substr(0,150)+'...' : '';
  }
}