import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBr'
})
export class CurrencyBrPipe implements PipeTransform {
  transform(value: number, currencyCode: string = 'BRL', digitsInfo: string = '3.2-2'): string {
    // Multiplica o valor pelo câmbio antes de formatar
    const valorConvertido = value * 4.85; // Substitua 'taxaDeCambio' pelo valor desejado

    // Formatação manual
    const [integerPart, decimalPart] = valorConvertido.toFixed(2).split('.');

    const formattedIntegerPart = String(Number(integerPart)); // Remove zeros à esquerda
    const formattedDecimalPart = decimalPart ? decimalPart : '00';

    // Adiciona ponto separador de milhares se necessário
    const parts = formattedIntegerPart.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `R$ ${parts.join(',')},${formattedDecimalPart}`;
  }
}
