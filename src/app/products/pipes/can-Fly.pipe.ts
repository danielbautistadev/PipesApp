import { Pipe, PipeTransform } from '@angular/core';

// El objetivo de este pipe es transformar el valor de una propiedad de un objeto en un mensaje personalizado. Si el valor de la propiedad es 'true', el mensaje será 'Can fly!', de lo contrario, será 'Cannot fly.'.

@Pipe({
    name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean): String {

        return value ? 'Can fly!' : 'Cannot fly.';
    } // El parámetro 'value' representa el valor de la propiedad que se está evaluando. Si es 'true', se devuelve 'Can fly!', de lo contrario, se devuelve 'Cannot fly.'
}