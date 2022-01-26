import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"

import { ArrayProperties } from "./ArrayProperties.ts"


Deno.test("should yield correct values for mean/variance/stdev", async () => {

    assertEquals(ArrayProperties.getMean([4, 5, 6]), 5)

    assertEquals(ArrayProperties.getVariancePopulation([4, 5, 6]), 2/3)

    assertEquals(ArrayProperties.getVarianceSample([4, 5, 6]), 1)

    assertEquals(ArrayProperties.getStdevPopulation([4, 5, 6]), Math.sqrt(2/3))

    assertEquals(ArrayProperties.getStdevSample([4, 5, 6]), 1)

})