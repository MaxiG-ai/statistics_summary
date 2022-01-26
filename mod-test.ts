import { ArrayProperties } from "./mod.ts";

const randomNumbers: number[] = [5,7,16,75,56,78,278,4,5,5,1,2,3,4,5,6,7,8,91,15,43,87]

// Console log every function with sample array
console.log(ArrayProperties.getMean(randomNumbers))
console.log(ArrayProperties.getVariancePopulation(randomNumbers))
console.log(ArrayProperties.getVarianceSample(randomNumbers))
console.log(ArrayProperties.getStdevPopulation(randomNumbers))
console.log(ArrayProperties.getStdevSample(randomNumbers))

ArrayProperties.printSummary(randomNumbers)