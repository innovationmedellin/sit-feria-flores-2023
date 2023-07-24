import PropTypes from "prop-types";
import { InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const onChange = (value) => {
    console.log('changed', value, options);
    add_answer(answer, question, questionId, questionType, idSection, value, questionId)
    console.log("answer",answer);
  };
  return(
    <InputNumber min={1} max={max} defaultValue={5} onChange={onChange} />
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