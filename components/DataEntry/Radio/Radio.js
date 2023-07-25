import PropTypes from 'prop-types';
import { useState } from 'react';
import { Radio, Space, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setStatesection } from '../../../store/actions';
import { add_answer } from '../../../services/Add/Add';
const App = ({idSection, options, question, questionId, questionType}) => {
  const answer = useSelector((state) => state.answer);
  const statesection = useSelector((state) => state.statesection);

  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const handleClick = (e, option) => {
    add_answer(answer, question, questionId, questionType, idSection, option.description, option.id);
    let consdition = option.description;
    switch(consdition) {
      case "Español":
        dispatch(setStatesection({...statesection, section_2:true, section_3:false, section_4: false}));
        //answer.forEach((element,index) => { if (index>1) element.answer = []});
        break;
      case "English":
        dispatch(setStatesection({...statesection,section_2:false ,section_3:true, section_4: false}));
        //answer.forEach((element,index) => { if (index>1) element.answer = []});
        break;
      default :
        break
    }
    console.log("Answer", answer)
  }

  const onChange = (e) => {
    setValue(e.target.value);
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
    <Radio.Group onChange={onChange} value={value} required>
      <Space direction="vertical">
      {
        options.map((option) => (
        <Radio key={`${idSection}-questionId`} onClick={(e) => handleClick(e,option)} value={option.id}>
            {option.description}
        </Radio>))
      }
      </Space>
    </Radio.Group>
    </Form.Item>
  );
};
App.propTypes = {
    options: PropTypes.array,
}

export default App;