import PropTypes from "prop-types";
import { App } from "antd";


const MenssageNotificationModal = ({children}) => {
  const { message, notification, modal } = App.useApp();
  message.success('Message!');
  notification.info({message: "Notification"})
  modal.warning({ title: "Modal"})
  return (
    <App>
        {children}
    </App>
  )
};

MenssageNotificationModal.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MenssageNotificationModal