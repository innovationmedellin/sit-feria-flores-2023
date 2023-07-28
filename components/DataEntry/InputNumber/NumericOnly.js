import   PropTypes from "prop-types";
import { InputNumber, Form } from 'antd';
import { useSelector } from 'react-redux';
import { add_answer } from "../../../services/Add/Add";

const App = ({
  max,
  options,
  question,
  questionId,
  questionType,
  idSection,
}) => {
  const answer = useSelector((state) => state.answer);
  const onChange = (value) => {
    add_answer(answer, question, questionId, questionType, idSection, value, questionId)
  };
  return(
    <Form.Item
      name={questionId}
      initialValue={""}
      rules={[
        {
          required: true,
          message: '¡Por favor, ingresa un valor!',
        },
      ]}
    >
    <InputNumber placeholder="Ingrese la cantidad" min={1} max={max} defaultValue={5} onChange={onChange} />
    </Form.Item>
  )
}
;
App.propTypes = {
    max: PropTypes.number,
}

App.defaultProps = {
  max:10
}
export default App;