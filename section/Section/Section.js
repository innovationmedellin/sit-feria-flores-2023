import PropTypes from 'prop-types';
import {
    HeadLine, 
    Radio, 
    SelectSingle, 
    NumericOnly,
} from '../../components';

const Section = ({id, title, description, questions, max}) => {
  
  return(
    <div
        style={{
            width: "100%", 
            display: "flex", 
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap:"2rem",
            borderRadius: "10px",
            overflow: "hidden",
        }}
    >   <div
            style={{
                width: "100%", 
                display: "flex", 
                flexDirection: "column",
                borderRadius: "10px",
                border: "1px solid #D4D2D8",
            }}
        > 
            <div
                style={{background:"#00AEEF"}}
            >
            <HeadLine
                fontSize={"16px"}
                width={"100%"}
                color={"white"}
                padding={"0.5rem 1rem"}
                fontWeight={"500"}
                margin={"0"}
            >
              {title}
            </HeadLine>
            </div>
            
            <HeadLine
                fontSize={"16px"}
                margin={"0"}
                color={"#1E1E1E"}
                padding={"0.5rem 1rem "}
            >
                {description}
            </HeadLine>
        </div>

        <div
            style={{
                width: "100%", 
                display: "flex", 
                flexDirection: "column",
                borderRadius: "10px",
                gap:"1rem"
            }}
        >
         {
            questions.map((question, index) => (
            <div key={`${id}-${index}`}
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
                  {question.description}
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
                question.question_type === "single" && 
                <Radio
                    options={question.answer_options}
                    question={question.description}
                    questionId={question.id}
                    questionType={question.question_type}
                    idSection={id}
                />
                }
                {  
                question.question_type === "select" && 
                <SelectSingle
                    optionsAnswer={question.answer_options}
                    question={question.description}
                    questionId={question.id}
                    questionType={question.question_type}
                    idSection={id}
                    placeholder={"Ingrese respuesta"}
                />
                }
                {  
                question.question_type === "short_answer" && 
                <NumericOnly
                    options={question.answer_options}
                    question={question.description}
                    questionId={question.id}
                    questionType={question.question_type}
                    idSection={id}
                    max={max}
                />
                }
                {
                question.question_type === "lineal_scale" && 
                <NumericOnly
                    options={ question.answer_options }
                    question={question.description}
                    questionId={question.id}
                    questionType={question.question_type}
                    idSection={id}
                    max={max}
                />
                }
                </div>            
            </div>
            )
            )
         }  
        </div>
    </div>
  )
}

Section.propTypes = {
    id:              PropTypes.number,
    title:           PropTypes.string, 
    description:     PropTypes.string, 
    questions:       PropTypes.array,
    complete_action: PropTypes.number
}

Section.defaultProps = {
        "id": 1,
        "title": "1. Idioma",
        "questions": [
            {
                "id": "11304b",
                "required": true,
                "description": "¿En que idioma desea responder? / which language do you prefer to answer?",
                "question_type": "single",
                "answer_options": [
                    {
                        "id": "3910bc",
                        "action": 0,
                        "description": "Español"
                    },
                    {
                        "id": "f5e1db",
                        "action": 0,
                        "description": "English"
                    }
                ]
            }
        ],
        "description": "Descripción de la sección",
        "complete_action": 1000
}

export default Section