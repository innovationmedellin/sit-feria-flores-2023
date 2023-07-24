
export const add_answer = (answerGeneral, question, questionId, questionType, idSection, answerLocal, answer_id) => {
    const objectanswer  = answerGeneral.filter((item) => item.section_id === idSection);
    const isElementInArray = objectanswer[0].answer.some((item) => item.question === question);
    switch(isElementInArray){
        case true :
            const objetoRepetido = objectanswer[0].answer.filter((item) => item.question === question)
            const longitufArrayRepetido = objetoRepetido.length;
            if( longitufArrayRepetido === 1){
                objetoRepetido[0].answer = answerLocal;
                objetoRepetido[0].answer_id = answer_id;
                console.log("He entrado en el if")
                break;
            } else {
            objectanswer[0].answer = [{
                "answer": answerLocal,
                "question": question,
                "answer_id": answer_id,
                "question_id": questionId,
                "question_type": questionType
            }]
            console.log("He entrado en el else")
            break;
            }
            
        case false: 
            objectanswer[0].answer.push({
                "answer": answerLocal,
                "question": question,
                "answer_id": answer_id,
                "question_id": questionId,
                "question_type": questionType
            });
            break;
        default: 
            break
    }
}