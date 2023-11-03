async function fetchData() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
  
      // Get all the countries from the Asia continent/region using the filter function
      const asiaCountries = data.filter(country => country.region === 'Asia');
      console.log("Countries in Asia:", asiaCountries);
  
      // Get all the countries with a population of less than 200,000 using the filter function
      const lowPopulationCountries = data.filter(country => country.population < 200000);
      console.log("Countries with population less than 2 lakhs:", lowPopulationCountries);
  
      // Print the details (name, capital, flag) using forEach function
      data.forEach(country => {
        console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
      });
  
      // Calculate the total population of countries using the reduce function
      const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
      console.log("Total population of all countries:", totalPopulation);
  
      // Find the country that uses US dollars as currency
      const usDollarCountry = data.find(country => country.currencies && country.currencies.USD);
      if (usDollarCountry) {
        console.log("Country that uses US dollars as currency:", usDollarCountry.name.common);
      } else {
        console.log("No country uses US dollars as currency.");
      }
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  }
  
  fetchData();
  