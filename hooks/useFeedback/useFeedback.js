import { useCallback, useState } from 'react';
import { message, Modal } from 'antd';



const useFeedback = () => {
  const [sending, setSending] = useState(false);
  const notificationAnswer = useCallback( () => {
    setSending(true);
    try {
      setSending(false);
      Modal.success({
        title: '¡Gracias por participar!',
        content: (
          <>
            <p>Las respuestas se han enviado correctamente</p>
          </>
        ),
        bodyStyle: {
          margin: '0'
        },
        okText: 'Aceptar',
        cancelText: 'Cancelar',
        okButtonProps: {
          style: {
            margin: '0 auto',
            width: '100%',
            backgroundColor: '#00AEEF',
            borderColor: '#00AEEF'
          }
        }
      });
    } catch (error) {
      setSending(false);
      message.error(error.message);
    }
  }, []);

  const notificationAnswerNegative = useCallback( () => {
    setSending(true);
    try {
      setSending(false);
      Modal.success({
        title: '¡Te faltan campos por llenar!',
        content: (
          <>
            <p> Por favor ingresa todos los campos </p>
          </>
        ),
        bodyStyle: {
          margin: '0'
        },
        okText: 'Aceptar',
        cancelText: 'Cancelar',
        okButtonProps: {
          style: {
            margin: '0 auto',
            width: '100%',
            backgroundColor: '#00AEEF',
            borderColor: '#00AEEF'
          }
        }
      });
    } catch (error) {
      setSending(false);
      message.error(error.message);
    }
  }, []);


  return {
    notificationAnswer,
    sending,
    notificationAnswerNegative
  };
};

export default useFeedback;