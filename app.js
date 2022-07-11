let userInputes = [];

// 0 noun   1  marshmallow      2 eat        3 golden  4 brown
let numberOfQuestions = 5
let questionArray = ["add the name of your story girl-hero", "add an object", "add a verb describes what you do with the object",  "add an adjective that describes your object in its best shape", "add an other adjective"];

let questionCounter = 0 
for (let i=numberOfQuestions; i>0; i--) {
    //console.log (i);
    //console.log (questionCounter);
    userInputes.push(prompt(questionArray[questionCounter]+ `! \n ${i-1} questions left \n`));
    console.log(userInputes);
    questionCounter += 1;
}

alert("And now\n the sotry is readyyy!");

let originalStory= (`${userInputes[0]} was trying to roast a ${userInputes[1]} for the first time. Her first and second attempts ended in flames. Both times, I took the scorched ${userInputes[1]} off of the roasting stick and threw it into the fire. The third time, I helped her a lot more and, together, we achieved a perfectly toasty ${userInputes[3]} ${userInputes[4]} ${userInputes[1]} . Once it was cool, I handed her the ${userInputes[1]} which she promptly threw into the fire. No one had told her she was supposed to ${userInputes[2]} it.`);
console.log(originalStory);




/*
My three-year-old daughter was trying to roast a marshmallow for the first time. Her first and second attempts ended in flames. Both times, I took the scorched marshmallow off of the roasting stick and threw it into the fire. The third time, I helped her a lot more and, together, we achieved a perfectly toasty golden brown. Once it was cool, I handed her the marshmallow which she promptly threw into the fire. No one had told her she was supposed to eat it.
*/