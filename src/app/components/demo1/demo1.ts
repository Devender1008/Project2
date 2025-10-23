import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css'
})
export class Demo1 {
   add(a: number, b: number) {
    return a + b;
  }
  mul(a: number, b: number) {
    return a * b;
  }
  //     sumOfDigits(n: number): number {
  //   n = Math.abs(n); 
  //   let sum = 0;
  //   while (n > 0) {
  //     sum += n % 10;
  //     n = Math.floor(n / 10);
  //   }
  //   return sum;
  // }
sumOfDigits(n: number): number { 
  let sum = 0; 
  let temp = n < 0 ? -n : n;
  while (temp > 0) {
 const digit = temp % 10; 
 sum += digit; 
 temp = (temp / 10) | 0; 
 } 
 return sum;  
}
  }
