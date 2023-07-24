import React from 'react'
import {
    Radio, 
    Select, 
    NumericOnly  } from '../../components'
import { HeadLine } from '../../components'
const Questions2 = ({question, id}) => {
  return (
    <div
    style={{
        width: "100%", 
        display: "flex", 
        flexDirection: "column",
        borderRadius: "10px",
        gap:"1rem"
    }}
>
    <div
        style={{
            width: "100%",
            display: "flex", 
            flexDirection: "column",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            border: "1px solid #D4D2D8",
            borderRadius: "10px",
        }}
    
    >
        <HeadLine
            fontSize={"16px"}
            width={"100%"}
            color={"#1E1E1E"}
            padding={"0.5rem 1rem"}
            fontWeight={"700"}
            margin={"0"}
        >
          {question?.description}
        </HeadLine>
        <div
        style={{
            width: "100%",
            display: "flex", 
            flexDirection: "column",
            gap: "1rem",
            padding:"0.5rem 1rem"
        }}
        >
        {  
        question?.question_type === "single" && 
        <Radio
            options={question.answer_options}
            question={question.description}
            questionId={question.id}
            questionType={question.question_type}
            idSection={id}
        />
        }
        {  
        question?.question_type === "select" && 
        <Select
            optionsAnswer={question.answer_options}
            question={question.description}
            questionId={question.id}
            questionType={question.question_type}
            idSection={id}
            placeholder={"Ingrese respuesta"}
        />
        }
        {  
        question?.question_type === "short_answer" && 
        <NumericOnly
            options={question.answer_options}
            question={question.description}
            questionId={question.id}
            questionType={question.question_type}
            idSection={id}
        />
        }
        {  
        question?.question_type === "lineal_scale" && 
        <NumericOnly
            options={question.answer_options}
            question={question.description}
            questionId={question.id}
            questionType={question.question_type}
            idSection={id}
        />
        }
        </div>            
    </div>
</div>
  )
}

export default Questions2