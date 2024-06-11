function nbYear(p0, percent, aug, p) {
    let currentPopulation = p0;
    let years = 0;
    let growthRate = percent / 100; 
    while (Math.floor(currentPopulation) < p) { 
        currentPopulation = Math.floor(currentPopulation); 
        currentPopulation += (currentPopulation * growthRate) + aug;
        years++;
    }
    return years;
}