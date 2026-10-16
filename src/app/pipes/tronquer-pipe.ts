import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tronquer',
})
export class TronquerPipe implements PipeTransform {
  transform(texte: string, longueur: number): string {
    if (texte.length <= longueur) {
      return texte;
    }

    return `${texte.slice(0, longueur)}…`;
  }
}
