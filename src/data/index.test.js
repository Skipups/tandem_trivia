import random10Questions4incorrect from './index.js'


const list=[
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
  {
    question: "A",
    incorrect: ["a", "b", "c"],
    correct: "d",
  },
];

test('always return only 10 questions', ()=>{
 expect(random10Questions4incorrect(list)).toHaveLength(10)
})

test('incorrect options now include the correct option', ()=>{
  let result =random10Questions4incorrect(list)
  expect(result).toEqual(
    expect.arrayContaining([
     expect.objectContaining({questionId: 0} &&{questionId:9})
    ])
  )
  
 })

