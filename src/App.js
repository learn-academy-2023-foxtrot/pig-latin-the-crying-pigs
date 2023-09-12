import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
// Pseudocode:
//input: string
//output: a new string with "way" at the end
//process: take the word and add way to the end, conditional statment to determine if the word contains a vowel at the beginning, .concat to add "way" to the end of each word
// rewritten process: a conditional statement to check if the index of vowelsArray[0] is strictly equal to the index of eachWord[0] and if it is, return the string of eachWord with "way" added to the end by using the .concat method. 
      if(vowelsArray[0] === eachWord[0]) {
        return eachWord.concat("way")
      }
//Psuedocode:
//Input: string
//Output: a new string with "qu" and "ay" added to the end.
//Process: .includes() to refernce where "qu" is being used, .concat to add "ay" to the end of string. Add another conditional statement to check if the first syllable has "qu". .slice() to move "qu" to the end before "ay".
      else if(eachWord.includes("qu")){
        return eachWord.slice(2).concat("quay")
      }
//pseudocode:
// input: string
//output: a new string with "y" added to the front of the word and "ay" to the end.
// process: .concat to add "ay" to the end, another conditional statement, .slice() to take the "y" and move it to the front of the word,
      else if(vowelsArray.length === 0 && eachWord.includes("y")){
        return eachWord.slice(eachWord.indexOf("y")).concat(eachWord.slice(0, eachWord.indexOf("y")) + "ay")
      }
//Pseudocode
//Input: string
//Output: a new string with "ay" added to the end and every letter before the vowel gets put to the end before "ay".
//Process: .concat to add "ay" to the end. .slice() to reference the letters before the vowel and pair it with .concat() to move it to the end. Conditional statement. .indexOf() to reference the vowel. 
      else if(eachWord.indexOf(vowelsArray)){
        return eachWord.slice(eachWord.lastIndexOf(vowelsArray)).concat(eachWord.slice(eachWord.lastIndexOf(vowelsArray)) + "ay")
      }
      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App
