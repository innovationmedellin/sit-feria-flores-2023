import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select, Tag, Form } from 'antd';
import { add_answer } from '../../../services/Add/Add';
import { useSelector, useDispatch } from 'react-redux';
import { setStatesection2, setStatesection } from '../../../store/actions';

const municipiosValleAburra = ["Barbosa", "Bello", "Caldas", "Copacabana", "Envigado", "Girardota", "Itagui", "La Estrella", "Medellín", "Sabaneta"];
const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color="blue"
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};

const App = ({
  optionsAnswer, 
  placeholder,
  question,
  questionId,
  questionType,
  idSection,
}) => {
  const [selectedValue, setSelectedValue] = useState([]);
  const dispatch = useDispatch();
  const answer = useSelector((state) => state.answer);
  const statesection2 = useSelector((state) => state.statesection2); 
  const statesection = useSelector((state) => state.statesection); 
  const Options = optionsAnswer.map((option) => ({value: option.description, id: option.id}))
  const handledSelect = (value,options) => {
    if (value.length > 1) {
      // Si hay más de una selección, eliminamos la selección anterior y agregamos la nueva selección
      selectedValue.shift()
      setSelectedValue([value[value.length - 1]]);
      value.shift();
      options.shift();
      add_answer(answer, question, questionId, questionType, idSection, value[0], options[0]?.id);
      //console.log("idSection, value", idSection, value)
      if(idSection === 2 && value[0] === "Colombia"&&question==="¿Cuál es tu país de procedencia?") {
        dispatch(setStatesection2({...statesection2,question_1: true, question_2: false, question_3: false, question_4: false, question_5: false, question_6: false, question_7: false, question_8: false, question_9: false, question_10: false, question_11: false}))
      }else if (idSection === 2 && value[0] !== "Colombia" && question==="¿Cuál es tu país de procedencia?") {
        dispatch(setStatesection2({...statesection2,question_1: false, question_2: true, question_3: true, question_4: true, question_5: true, question_6: true, question_7: true, question_8: true, question_9: true, question_10: true, question_11: true}))
        dispatch(setStatesection({...statesection, section_4: false }))
      }
      const conditionmunicipiosValleAburra = municipiosValleAburra.includes(value[0])
      if(idSection === 2 && conditionmunicipiosValleAburra && question==="¿De qué ciudad del país proviene?") {
        dispatch(setStatesection2({...statesection2, question_1: true}));
        dispatch(setStatesection({...statesection, section_4: true }))
      } else if(idSection === 2 && !conditionmunicipiosValleAburra && question==="¿De qué ciudad del país proviene?"){
        dispatch(setStatesection2({...statesection2,question_1: false, question_2: true, question_3: true, question_4: true, question_5: true, question_6: true, question_7: true, question_8: true, question_9: true, question_10: true, question_11: true}))
        dispatch(setStatesection({...statesection, section_4: false }))
      }
      //console.log("conditionmunicipiosValleAburra",conditionmunicipiosValleAburra)
      //console.log("indicadorColombia",indicadorColombia)
      console.log("answer",answer);
    } else {
      setSelectedValue(value);
      add_answer(answer, question, questionId, questionType, idSection, value[0], options[0]?.id);
      if(idSection === 2 && value[0] === "Colombia" && question==="¿Cuál es tu país de procedencia?") {
        dispatch(setStatesection2({...statesection2,question_1: true, question_2: false, question_3: false, question_4: false, question_5: false, question_6: false, question_7: false, question_8: false, question_9: false, question_10: false, question_11: false}))
      } else if (idSection === 2 && value[0] !== "Colombia" && question==="¿Cuál es tu país de procedencia?") {
        dispatch(setStatesection2({...statesection2,question_1: false, question_2: true, question_3: true, question_4: true, question_5: true, question_6: true, question_7: true, question_8: true, question_9: true, question_10: true, question_11: true}))
        dispatch(setStatesection({...statesection, section_4: false }))
      }
 
      const conditionmunicipiosValleAburra = municipiosValleAburra.includes(value[0])
      //console.log("conditionmunicipiosValleAburra",conditionmunicipiosValleAburra)
      if(idSection === 2 && conditionmunicipiosValleAburra && question==="¿De qué ciudad del país proviene?") {
        dispatch(setStatesection2({...statesection2, question_1: true}));
        dispatch(setStatesection({...statesection, section_4: true }))
      } else if(idSection === 2 && !conditionmunicipiosValleAburra && question==="¿De qué ciudad del país proviene?"){
        dispatch(setStatesection2({...statesection2,question_1: false, question_2: true, question_3: true, question_4: true, question_5: true, question_6: true, question_7: true, question_8: true, question_9: true, question_10: true, question_11: true}))
        dispatch(setStatesection({...statesection, section_4: false }))
      }
      //console.log("indicadorColombia",indicadorColombia, conditionmunicipiosValleAburra,question)
      //console.log("idSection, value",idSection, value)
      console.log("answer",answer);
    }
  };

  return (
    <Form.Item
      name={questionId}
      rules={[
        {
          required: true,
          message: '¡Por favor, selecciona una opción!',
        },
      ]}
    >
      <Select
        mode="multiple"
        showArrow
        tagRender={tagRender}
        placeholder={placeholder}
        onChange={ (value,options)=> handledSelect(value,options)}
        style={{
          width: '100%',
          color: 'blue',
        }}
        value={selectedValue}
        options={Options}
      />
    </Form.Item>
  );
};

App.propTypes = {
  optionsAnswer: PropTypes.array,
};

App.defaultProps = {
  optionsAnswer: [
    {
      value: 'gold',
      id: "1"
    },
    {
      value: 'lime',
      id: "2"
    },
    {
      value: 'green',
      id: "3"
    },
    {
      value: 'cyan',
      id: "4"
    },
  ],
};

export default App;