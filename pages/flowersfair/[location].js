import { useEffect } from 'react';
import { Section, Section2 } from '../../section';
import { Layout, Header } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setSurvey, setTemporalSection, setAnswer  } from '../../store/actions';
import { mapSections }  from "../../services/Answer/Answer";
import { axiosClient } from '../../config';
import { Form, Button } from 'antd';
import { useRouter } from 'next/router';
import { LocationTitle } from '../../services/LocationTitle';
import  useFeedback  from '../../hooks/useFeedback/useFeedback';
import  Head from 'next/head';


const Index = () => {
  const router = useRouter();
  const { sending, notificationAnswer, notificationAnswerNegative }  = useFeedback();
  const { location } = router.query;
  const [formRef] =  Form.useForm();
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
        dispatch(setAnswer(mapSections(response.data.data[0].attributes.data.sections, location)));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData('/surveys?filters[id][$eq]=33');
  }, []);
  const onFinish = (values) => {
    formRef.resetFields();
    const postAnswer = async ({data}) => {
      try {
          const response = await axiosClient.post('/survey-answers', {
            data
          });
          return response.data
      } catch(error) {
        console.log("error",error)
      }
    }
    answer[0] = {
      section_id: 0,
      section_name: 'Default section',
      answers: [
        {
          question: 'Ubicación',
          answer: location,
          question_id: '527c8',
          answer_id: location.replace(' ', '').toLowerCase(),
          question_type: 'text'
        }
      ]
    };
    postAnswer({
        "data":{
                "pollster":2,
                "survey":  33,
                "pollster_objetive_id":null,
                "answers":answer
               }
    });
    notificationAnswer();
   }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    notificationAnswerNegative();
  };
  return (
    <>
    <Head>
    <title> {LocationTitle(location)} </title>
    </Head>
    <Layout
      background   =  { `${(theme) => theme.colors.fondogris}` }
      maxWidth     =  { "1200px" }
      display      =  { "flex"   }
      flexDirection=  { "column" }
    >
        <Form
          form={formRef}
          name="feria"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
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
        <Header urlImage={"/image/banners/PanoramicaMedellin.webp"}/>
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
            max={1000}
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
            max={5}
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
          }}
          type='primary'
          htmlType="submit"

          > 
         {sending? "ENVIANDO ..." :"Enviar encuesta"}
        </Button>
        </Form.Item>
        </Form>
        
    </Layout>
    </>
  )
}

export default Index;