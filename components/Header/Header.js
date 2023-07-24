import PropTypes from 'prop-types'
import { Layout } from 'antd';

const HeaderAntd = ({urlImage}) => {
  const { Header } = Layout;
  return (
    <Header
        style={{
            width:             "100%",
            background:        `url(${urlImage})`,
            backgroundSize:    "cover",
            backgroundPosition:"center",
            backgroundRepeat:  "no-repeat",
            borderRadius:      "10px",
            boxShadow:         "0px 0px 10px rgba(0, 0, 0, 0.1)",
            height:            "404px",
        }}
    >
    </Header>
  )
}

HeaderAntd.propTypes = {
    urlImage: PropTypes.string.isRequired,
}

HeaderAntd.defaultProps = {
    urlImage: "./image/banners/PanoramicaMedellin.webp",
}

export default HeaderAntd;