
// Test 1
test("Test 1: It adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

// Test 2
const letterCount = require("../"); // same as ../index.js
test("Test 2: Count a letter in given word", () => {
    expect(letterCount("awesome", "e")).toBe(2);
  });

// Test 3
test("Test 3: Arithmetic < >", function() {
    expect(4 + 4).toBeGreaterThan(7);
    expect(4 + 4).toBeLessThan(9);
  });
  
// Test 4
test("Test 4: Array references", function() {
    var arr = [1, 2, 3];
    expect(arr).toEqual([1, 2, 3]);
    expect(arr).not.toBe([1, 2, 3]); // since === doesn't do deep comparison!
    expect(arr).toContain(1);
  });