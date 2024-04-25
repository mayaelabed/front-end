import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plateNumberCaching'
})
export class PlateNumberCachingPipe implements PipeTransform {

  transform(plateNumber: string | undefined): unknown {
    if (plateNumber) {
    const splitParts = plateNumber.split(' ');
    let lastPart = splitParts[splitParts.length -1]
    splitParts[splitParts.length -1] = lastPart.charAt(0)
      +'x'.repeat(lastPart.length - 1);

    return splitParts.join(' ');
    }else {
      return 'xxx'
    }

    }

}
