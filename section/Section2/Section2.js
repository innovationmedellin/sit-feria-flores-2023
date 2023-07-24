import PropTypes from 'prop-types';
import {HeadLine} from "../../components";
import Questions2 from '../../components/Questions2/Questions2';
import { useDispatch, useSelector } from 'react-redux';
const Section = ({id, title, description, questions, questions_temporal}) => {
  const statesection2 =  useSelector((state) => state.statesection2);
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
        <Questions2 question={questions[0]} id={id}/>
        {statesection2.question_1 &&<Questions2 question={questions[1]} id={id}/>}
        {statesection2.question_2 &&<Questions2 question={questions[2]} id={id}/>}
        {statesection2.question_3 &&<Questions2 question={questions[3]} id={id}/>}
        {statesection2.question_4 &&<Questions2 question={questions[4]} id={id}/>}
        {statesection2.question_5 &&<Questions2 question={questions[5]} id={id}/>}
        {statesection2.question_6 &&<Questions2 question={questions[6]} id={id}/>}
        {statesection2.question_7 &&<Questions2 question={questions[7]} id={id}/>}
        {statesection2.question_8 &&<Questions2 question={questions[8]} id={id}/>}
        {statesection2.question_9 &&<Questions2 question={questions[9]} id={id}/>}
        {statesection2.question_10 &&<Questions2 question={questions[10]} id={id}/>}
        {statesection2.question_11 &&<Questions2 question={questions[11]} id={id}/>}


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