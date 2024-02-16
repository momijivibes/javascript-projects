// Part 1 - Add Class Properties
class CrewCandidate {
    constructor(name, mass, scores) {
      this.name = name;
      this.mass = mass;
      this.scores = scores;
    }
  }
  
  // Create objects for candidates
  let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
  let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
  let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
  
  // Print objects to verify
  console.log(bubbaBear);
  console.log(merryMaltese);
  console.log(gladGator);
  
  // Part 2 - Add First Class Method
  CrewCandidate.prototype.addScore = function(newScore) {
    this.scores.push(newScore);
  };
  
  // Test addScore method
  bubbaBear.addScore(83);
  console.log(bubbaBear.scores);
  
  // Part 3 - Add More Methods
  CrewCandidate.prototype.average = function() {
    let sum = this.scores.reduce((total, score) => total + score, 0);
    let average = sum / this.scores.length;
    return Math.round(average * 10) / 10; // Round to 1 decimal place
  };
  
  CrewCandidate.prototype.status = function() {
    let averageScore = this.average();
    if (averageScore >= 90) {
      return 'Accepted';
    } else if (averageScore >= 80) {
      return 'Reserve';
    } else if (averageScore >= 70) {
      return 'Probationary';
    } else {
      return 'Rejected';
    }
  };
  
  // Verify average score of Merry Maltese
  console.log(`Merry Maltese earned an average test score of ${merryMaltese.average()}%.`);
  
  // Test status method on each candidate
  console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
  console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
  console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);
  
  // Part 4 - Play a Bit
  // Boosting Glad Gator's status
  while (gladGator.status() !== 'Reserve') {
    let randomScore = Math.floor(Math.random() * 100) + 1; // Generate a random score between 1 and 100
    gladGator.addScore(randomScore);
  }
  
  console.log(`${gladGator.name} boosted their status to Reserve with an average test score of ${gladGator.average()}%.`);
  
  while (gladGator.status() !== 'Accepted') {
    let randomScore = Math.floor(Math.random() * 100) + 1; // Generate a random score between 1 and 100
    gladGator.addScore(randomScore);
  }
  
  console.log(`${gladGator.name} boosted their status to Accepted with an average test score of ${gladGator.average()}%.`);
  