# statistics_summary

A simple module to get statistical porperties of an array. Currently the possible properties are mean, stdev and variance.

This module has been implemented for a college subject of mine. However I am open to develop it further, so if you have any ideas, suggestions or contributions please contact me.

## Functionality

### Usage example CLI

You can test the function using the follwing example via CLI.

```
deno run --allow-net https://deno.land/x/array_summary@0.2/usage_example.ts
```

### Usage example code

Alternatively you can implement using the following usage examples:

````
import { ArrayProperties } from "https://deno.land/x/array_summary@0.2/mod.ts";

const randomNumbers: number[] = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]

// Console log every function with sample array
console.log(ArrayProperties.getMean(randomNumbers))
console.log(ArrayProperties.getVariancePopulation(randomNumbers))
console.log(ArrayProperties.getVarianceSample(randomNumbers))
console.log(ArrayProperties.getStdevPopulation(randomNumbers))
console.log(ArrayProperties.getStdevSample(randomNumbers))

// Get the full summary 
// use true to specifiy the array as a sample or false for the population

ArrayProperties.printSummary(randomNumbers, true)
````

## Tests
The module is covered by unit-tests which you can see in "./src/ArrayProperties_test.spec.ts". You can test the module yourself by:

````
deno test --allow-net "https://deno.land/x/array_summary@0.2/src/ArrayProperties_test.spec.ts"
````
