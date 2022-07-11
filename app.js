let originalStory= 'My three-year-old daughter was trying to roast a marshmallow for the first time. Her first and second attempts ended in flames. Both times, I took the scorched marshmallow off of the roasting stick and threw it into the fire. The third time, I helped her a lot more and, together, we achieved a perfectly toasty golden brown. Once it was cool, I handed her the marshmallow which she promptly threw into the fire. No one had told her she was supposed to eat it.';
let userInputes = [];


console.log (`My ${userInputes[3]}-year-old ${userInputes[1]} was trying to roast a ${userInputes[4]} for the first time. Her first and second attempts ended in flames. Both times, I took the scorched ${userInputes[4]} off of the roasting stick and threw it into the fire. The third time, I helped her a lot more and, together, we achieved a perfectly toasty ${UserInputs[5]} ${UserInputs[6]}. Once it was cool, I handed her the ${userInputes[4]} which she promptly threw into the fire. No one had told her she was supposed to ${userInputes[2]} it.`);

// 1 noun   2 eat   3 three    4 marshmallow   5 golden  6 brown
let numberOfQuestions = 6
let questionArray = ["add the name of your story girl-hero", "add a verb", "add the age of the girl", "add an object", "add an adjective  that describes your object in its best shape", "add an other adjective"];

let questionCounter = 0 
for (let i=numberOfQuestions; i>=0; i--) {
    console.log (i);
    console.log (questionCounter);
    console.log(questionArray[questionCounter]);
    questionCounter ++;
}






/*
My three-year-old daughter was trying to roast a marshmallow for the first time. Her first and second attempts ended in flames. Both times, I took the scorched marshmallow off of the roasting stick and threw it into the fire. The third time, I helped her a lot more and, together, we achieved a perfectly toasty golden brown. Once it was cool, I handed her the marshmallow which she promptly threw into the fire. No one had told her she was supposed to eat it.
*/