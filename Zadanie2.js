//Assumptions
//Function takes as first argument string value and as a second argument array with non-alphanumeric values (separators)
//Correct alphanumeric string is single letter or word separated by separator (e.g. "JedenDwa" is not correct)


const reverse = (input, separators) => {
    const inputCoppy = [...input];
    let inputLength = inputCoppy.length;
    const tmp = [];
    let outputString = '';

    //loop for extracting alphanumeric values from input string
    for (let i = 0; i < inputLength; i++) {
        if (!separators.includes(inputCoppy[i])) {
            outputString += inputCoppy[i]
            if (separators.includes(inputCoppy[i + 1]) || i === inputLength - 1) {
                tmp.push(outputString);
                outputString = '';
            }
        }
    }

    // let tmpLength = tmp.length - 1;

    //loop for reversing and concatenating string with omitting position changing of non-alphanumeric values 
    for (let i = 0; i < inputLength; i++) {
        if (!separators.includes(inputCoppy[i]) && i === 0) {
            // outputString += tmp[tmpLength--];
            outputString += tmp.pop();
        } else if (separators.includes(inputCoppy[i])) {
            outputString += inputCoppy[i];
            if (separators.includes(inputCoppy[i + 1])) {
                continue;
            } else if (inputLength - 1 === i) {
                break;
            } else {
                // outputString += tmp[tmpLength--];
                outputString += tmp.pop();
            }
        }
    }
    return outputString;
}


console.log(reverse("_Jeden..Dwa...Trzy;;;;Cztery_Pięć_", ['_', '.', ";"]));
console.log(reverse("_Jeden..Dwa...Trzy;;;;Cztery_Pięć", ['_', '.', ";"]));
console.log(reverse("Jeden..Dwa...Trzy;;;;Cztery_Pięć", ['_', '.', ";"]));
console.log(reverse("Jeden..Dwa...Trzy;;;;Cztery_Pięć_", ['_', '.', ";"]));
console.log(reverse("_Jeden..Dwa...Trzy;;;;Cztery_Pięć___Sześć...Siedem_O", ['_', '.', ";"]));
console.log(reverse(".Trzy;;;;Cztery_Pięć_", ['_', '.', ";"]));
console.log(reverse("_Jeden..Dwa...Trzy;;;;Cztery_Pięć_._..", ['_', '.', ";"]));


