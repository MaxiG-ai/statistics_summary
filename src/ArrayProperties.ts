export class ArrayProperties {
  public static getMean(arr: number[]) {
    var sum = 0;
    //loop and sum all elements in array
    for (var i in arr) {
      sum += arr[i];
    }

    //Get the length of the array
    var n = arr.length;

    //Return the average / mean.
    return (sum / n);
  }

  public static getVariancePopulation(arr: number[]) {
    var mean = this.getMean(arr);
    var sum_squared_differences = 0;
    for (var i in arr) {
      sum_squared_differences += (arr[i] - mean) ** 2;
    }
    var n = arr.length;
    //Return the average / mean.
    return (sum_squared_differences / n);
  }

  public static getVarianceSample(arr: number[]) {
    var mean = this.getMean(arr);
    var sum_squared_differences = 0;
    for (var i in arr) {
      sum_squared_differences += (arr[i] - mean) ** 2;
    }
    var n = arr.length;
    //Return the average / mean.
    return (sum_squared_differences / (n - 1));
  }

  public static getStdevPopulation(arr: number[]) {
    //return sqrt of the population variance
    return Math.sqrt(this.getVariancePopulation(arr));
  }

  public static getStdevSample(arr: number[]) {
    //return sqrt of the sample variance
    return Math.sqrt(this.getVarianceSample(arr));
  }

  public static printSummary(arr: number[], sample = false) {
    if (sample) {
      console.log(`Mean:                  ${this.getMean(arr)}`);
      console.log(`Variance:              ${this.getVarianceSample(arr)}`);
      console.log(`Standard Deviation:    ${this.getStdevSample(arr)}`);
    }
    console.log(`Mean:                  ${this.getMean(arr)}`);
    console.log(`Variance:              ${this.getVariancePopulation(arr)}`);
    console.log(`Standard Deviation:    ${this.getStdevPopulation(arr)}`);
  }
}