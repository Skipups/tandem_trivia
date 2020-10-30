const questionData= [
  {
    "question": "What was Tandem previous name?",
    "incorrect": ["Tandem", "Burger Shack", "Extraordinary Humans"],
    "correct": "Devmynd"
  },
  {
    "question": "In Shakespeare's play Julius Caesar, Caesar's last words were...",
    "incorrect": ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana"],
    "correct": "Et tu, Brute?"
  },
  {
    "question": "A group of tigers are referred to as:",
    "incorrect": ["Chowder", "Pride", "Destruction"],
    "correct": "Ambush"
  },
  {
    "question": "What is the top speed an average cat can travel?",
    "incorrect": ["42 mph", "13 mph", "9 mph"],
    "correct": "31 mph"
  },
  {
    "question": "A cat can jump to _____ times its own height:",
    "incorrect": ["3", "9", "7"],
    "correct": "5"
  },
  {
    "question": "What is the only letter that doesn't appear in a US state name?",
    "incorrect": ["M", "Z", "X"],
    "correct": "Q"
  },
  {
    "question": "What is the name for a cow-bison hybrid?",
    "incorrect": ["Cowson", "Bicow", "Mooson"],
    "correct": "Beefalo"
  },
  {
    "question": "What is the largest freshwater lake in the world?",
    "incorrect": ["Lake Baikal", "Lake Michigan", "Lake Victoria"],
    "correct": "Lake Superior"
  },
// added an additionl incorrect answer to this question
  {
    "question": "In a website address bar, what does WWW stand for?",
    "incorrect": ["Wild Wild West", "War World Web", "Wide Web World"],
    "correct": "World Wide Web"
  },
  {
    "question": "In a game of bingo, what number is represented by the name two little ducks?",
    "incorrect": ["20", "55", "77"],
    "correct": "22"
  },
  {
    "question": "According to Greek mythology, who was the first woman on Earth?",
    "incorrect": ["Lilith", "Eve", "Hera"],
    "correct": "Pandora"
  },
  {
    "question": "In which European city would you find Orly airport?",
    "incorrect": ["London", "Belgium", "Munich"],
    "correct": "Paris"
  },
  {
    "question": "Where would you find the Sea of Tranquility?",
    "incorrect": ["California", "Siberia", "China"],
    "correct": "The Moon"
  },
  {
    "question": "Which artist painted 'Girl with a Pearl Earrin'?",
    "incorrect": ["Van Gogh", "Picasso", "Da Vinci"],
    "correct": "Vermeer"
  },
  {
    "question": "What is the official name for the 'hashtag' symbol?",
    "incorrect": ["Number sign", "Hash Sign", "Pound"],
    "correct": "Octothorpe"
  },
  {
    "question": "Not American at all, where is apple pie from?",
    "incorrect": ["Japan", "Ethiopia", "Canada"],
    "correct": "England"
  },
  {
    "question": "What is the national animal of Scotland?",
    "incorrect": ["Bear", "Rabbit", "Seal"],
    "correct": "Unicorn"
  },
  {
    "question": "Where in the world is the only place where Canada is *due south*",
    "incorrect": ["Alaska", "Russia", "Washington"],
    "correct": "Detroit"
  },
  {
    "question": "Approximately how many grapes go into a bottle of wine?",
    "incorrect": ["500", "200", "1000"],
    "correct": "700"
  },
  {
    "question": "How much does a US One Dollar Bill cost to make?",
    "incorrect": ["$0.25", "$1", "$5"],
    "correct": "$0.05"
  },
  {
    "question": "The Vatican bank has the only ATM in the world that allows users to do what?",
    "incorrect": [
      "Receive withdrawls in rosary beads",
      "Vote for the Pope",
      "Purchase indulgences"
    ],
    "correct": "Perform transactions in Latin"
  }
]
//return only 10 questions out of the 21 possible

//shuffle function to shuffle order of questions
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


const random10Questions4incorrect = (n = 10) => {
  const random10Questions =shuffle(questionData).slice(0, n)

  //add correct answer to the 3 incorrect options, added questionId
  const random10Questions4incorrect=[]

  for( let i=0; i<random10Questions.length; i++){
    let questionObj=random10Questions[i]
    let [question, correct, incorrect]=[questionObj.question,questionObj.correct, questionObj.incorrect]
    let fourIncorrect= [...incorrect,correct];

 const shuffledIncorrect =shuffle(fourIncorrect);
const result={question:question, correct:correct, incorrect: shuffledIncorrect, questionId: i }
random10Questions4incorrect.push(result)
  }

    
  return   Promise.resolve(random10Questions4incorrect)
}


  export default random10Questions4incorrect