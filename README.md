# statistics_summary

A simple module to get statistical porperties of an array. Currently the possible properties are mean, stdev and variance.

You can test the function using the follwing example via CLI.

```
deno run --allow-net https://deno.land/x/array_summary@0.0.4/mod-test.ts
```

or you can implement using the following usage examples:

````
import { ArrayProperties } from "https://deno.land/x/array_summary@0.0.4/mod-test.ts";

const randomNumbers: number[] = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]

// Console log every function with sample array
console.log(ArrayProperties.getMean(randomNumbers))
console.log(ArrayProperties.getVariancePopulation(randomNumbers))
console.log(ArrayProperties.getVarianceSample(randomNumbers))
console.log(ArrayProperties.getStdevPopulation(randomNumbers))
console.log(ArrayProperties.getStdevSample(randomNumbers))

// or get the full summary 
// use true to specifiy the array as a sample or false for the population

ArrayProperties.printSummary(randomNumbers, true)
````

The module is covered by unit-tests which you can see in "./src/ArrayProperties.spec.ts". You can run them by:

````
deno run --allow-net https://deno.land/x/gethighestcommondenominator@v1.0.0/src/getHighestCommonDenominator.spec.ts
````
