import { Select } from 'antd';
import { add_answer } from '../../../services/Add/Add';
import { useSelector, useDispatch } from 'react-redux';
import { setStatesection2, setStatesection } from '../../../store/actions';

const SelectTest = ({ optionsAnswer, placeholder, question, questionId, questionType, idSection}) => {
  const municipiosValleAburra = ["Barbosa", "Bello", "Caldas", "Copacabana", "Envigado", "Girardota", "Itagui", "La Estrella", "Medellín", "Sabaneta"];
  const dispatch = useDispatch();
  const answer = useSelector((state) => state.answer);
  const statesection2 = useSelector((state) => state.statesection2); 
  const statesection = useSelector((state) => state.statesection); 
  const onChange = (value, options) => {
    add_answer( answer, question, questionId, questionType, idSection, value, options?.id );
    if(idSection === 2 && value === "Colombia" && question==="¿Cuál es tu país de procedencia?") {
      dispatch(setStatesection2({...statesection2,question_1: true, question_2: false, question_3: false, question_4: false, question_5: false, question_6: false, question_7: false, question_8: false, question_9: false, question_10: false, question_11: false}))
    } else if (idSection === 2 && value[0] !== "Colombia" && question==="¿Cuál es tu país de procedencia?") {
      dispatch(setStatesection2({...statesection2,question_1: false, question_2: true, question_3: true, question_4: true, question_5: true, question_6: true, question_7: true, question_8: true, question_9: true, question_10: true, question_11: true}))
      dispatch(setStatesection({...statesection, section_4: false }))
    }

    const conditionmunicipiosValleAburra = municipiosValleAburra.includes(value)
    if(idSection === 2 && conditionmunicipiosValleAburra && question==="¿De qué ciudad del país proviene?") {
      dispatch(setStatesection2({...statesection2, question_1: true}));
      dispatch(setStatesection({...statesection, section_4: true }))
    } else if(idSection === 2 && !conditionmunicipiosValleAburra && question==="¿De qué ciudad del país proviene?"){
      dispatch(setStatesection2({...statesection2,question_1: false, question_2: true, question_3: true, question_4: true, question_5: true, question_6: true, question_7: true, question_8: true, question_9: true, question_10: true, question_11: true}))
      dispatch(setStatesection({...statesection, section_4: false }))
    }
  };
  const Options = optionsAnswer?.map((option) => ({value: option.description, id: option.id, label:option.description}))
  return(
  <Select
    showSearch
    showArrow
    placeholder={placeholder}
    optionFilterProp="children"
    onChange={onChange}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={Options}
  />
)};
export default SelectTest;

const aee =[
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'tom',
    label: 'Tom',
  },
]