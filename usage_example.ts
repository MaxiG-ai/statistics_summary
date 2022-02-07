import { ArrayProperties } from "./mod.ts";

const randomNumbers: number[] = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]

// Console log every function with sample array
console.log(ArrayProperties.getMean(randomNumbers))
console.log(ArrayProperties.getVariancePopulation(randomNumbers))
console.log(ArrayProperties.getVarianceSample(randomNumbers))
console.log(ArrayProperties.getStdevPopulation(randomNumbers))
console.log(ArrayProperties.getStdevSample(randomNumbers))

ArrayProperties.printSummary(randomNumbers)