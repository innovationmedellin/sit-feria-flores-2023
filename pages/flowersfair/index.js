import { useEffect } from 'react';
import { Section, Section2 } from '../../section';
import { Layout, Header } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setSurvey, setTemporalSection, setTemporalQuestions, setAnswer  } from '../../store/actions';
import {mapSections}  from "../../services/Answer/Answer";
import { axiosClient } from '../../config';
import { Typography, Form, Button } from 'antd';


const Index = () => {
  const { title } = Typography;
  const dispatch  = useDispatch();
  const survey    = useSelector((state) => state.survey);
  const temporal_section   = useSelector((state) => state.temporal_section );
  const temporal_questions = useSelector((state) => state.temporal_questions );
  const answer = useSelector((state) => state.answer);
  const statesection = useSelector((state) => state.statesection);
  useEffect(() => {
    // Realiza la solicitud GET para obtener la información de la encuesta
    const fetchData = async (url) => {
      try {
        const response = await axiosClient(url);
        dispatch(setSurvey(response.data));
        dispatch(setTemporalSection(response.data.data[0].attributes.data.sections));
        dispatch(setAnswer(mapSections(response.data.data[0].attributes.data.sections)));
        dispatch(setAnswer(mapSections(response.data.data[0].attributes.data.sections)));
        //console.log(temporal_section)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData('/surveys?filters[id][$eq]=33');
  }, []);
  const onFinish = (values) => {
    console.log('Formulario enviado:', values);
  };
  return (
    <Layout
      background   =  { (theme) => theme.colors.fondogris }
      maxWidth     =  { "1200px" }
      display      =  { "flex"   }
      flexDirection=  { "column" }
    >
        <Form  
          onFinish={onFinish}
          style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          width:"100%",
          gap:"2rem",
          padding:"1.5rem  0.5rem 1.5rem 0.5rem",
        }}
        
        >
        <Header />
        {
          temporal_section &&
          <Section
            id={temporal_section[1]?.id}
            title={temporal_section[1]?.title}
            description={temporal_section[1]?.description}
            questions={temporal_section[1]?.questions}
            complete_action={temporal_section[1]?.complete_action}
          />
        }
        {
          statesection.section_2 &&
          <Section2
            id={temporal_section[2]?.id}
            title={temporal_section[2]?.title}
            description={temporal_section[2]?.description}
            questions={temporal_section[2]?.questions}
            complete_action={temporal_section[2]?.complete_action}
          />
        }
        {
          statesection.section_3 &&
          <Section
            id={temporal_section[3]?.id}
            title={temporal_section[3]?.title}
            description={temporal_section[3]?.description}
            questions={temporal_section[3]?.questions}
            complete_action={temporal_section[3]?.complete_action}
          />
        }
        {
          statesection.section_4 &&
          <Section
            id={temporal_section[4]?.id}
            title={temporal_section[4]?.title}
            description={temporal_section[4]?.description}
            questions={temporal_section[4]?.questions}
            complete_action={temporal_section[4]?.complete_action}
          />
        }
        <Form.Item
          style={{
            width:"100%",
            height:"40px",
            fontSize:"20px",
            cursor: "pointer",
            backgroundColor:"#00AEEF",
            color: "white",
            borderRadius: "10px",
            border: "none",
            "focus":{
              transform: "scale(1.1)",
            }
          }}
        
        >
        <Button 
          style={{
            width:"100%",
            height:"40px",
            fontSize:"20px",
            cursor: "pointer",
            backgroundColor:"#00AEEF",
            color: "white",
            borderRadius: "10px",
            border: "none",
            "focus":{
              transform: "scale(1.1)",
            }
          }}
        type='submit'> 
          Enviar encuesta
        </Button>
        </Form.Item>
        </Form>
        
    </Layout>
  )
}

export default Index;