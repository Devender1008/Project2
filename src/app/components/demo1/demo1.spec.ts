import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1 } from './demo1';
describe('Test Suite for Demo-1 Component', () => {  
  it('Should test add function', () => {
    const demo1 = new Demo1();
    expect(demo1.add(10, 20)).toBe(30);
    expect(demo1.add(-10, 20)).toBe(10);
    expect(demo1.add(10, -20)).toBe(-10);
    expect(demo1.add(-10, -20)).toBe(-30);
  })
  it('Should test multiplication function', () => {
    const demo1 = new Demo1();
    expect(demo1.mul(10, 20)).toBe(200);
    expect(demo1.mul(-10, 20)).toBe(-200);
    expect(demo1.mul(10, -20)).toBe(-200);
    expect(demo1.mul(-10, -20)).toBe(200);
  })
   it('Should test sumOfDigits function', () => {
    const demo1 = new Demo1();
    expect(demo1.sumOfDigits(123)).toBe(6);  
    expect(demo1.sumOfDigits(9876)).toBe(30);   
    expect(demo1.sumOfDigits(1005)).toBe(6);    
    expect(demo1.sumOfDigits(-456)).toBe(15);   
    expect(demo1.sumOfDigits(0)).toBe(0);
  });
});