
  function filterByTerm(inputArr, searchTerm) {
    if (!searchTerm) return null
    if (!inputArr.length) throw Error("inputArr cannot be empty"); // Input Array can not be empty
    const regex = new RegExp(searchTerm, "i"); // ignores the case in pattern ( upper and lower case allowed)
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }
  
  
  describe("Filter Test Function", () => {
    test("Filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
          ];
        
        const output = [{ id: 3, url: "https://www.link3.dev" }];
        // Lowercase: Calling filterByTerm fuction to see if expected output is produced
        expect(filterByTerm(input, "link")).toEqual(output);      
        // Uppercase: Calling filterByTerm fuction to see if expected output is produced
        expect(filterByTerm(input, "LINK")).toEqual(output);

        // Excercise: Search for uRl
        const output2 = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" }
        ];
        expect(filterByTerm(input, "uRl")).toEqual(output2); 
        
        //Excercise: Empty search term
        expect(filterByTerm(input, "")).toEqual(null);

    });
  });