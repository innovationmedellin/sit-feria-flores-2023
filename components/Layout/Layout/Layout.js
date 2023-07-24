import PropTypes  from 'prop-types';
import { Layout as LayoutAntd } from 'antd';

const Layout = ({children, background, maxWidth, width, display, flexDirection, justifyContent, alignItems}) => {
  return (
    <LayoutAntd
      style={{
        display:       `${display}`,
        flexDirection: `${flexDirection}`,
        justifyContent:`${justifyContent}`,
        alignItems:    `${alignItems}`,
        background:    `${background}`,
        maxWidth:      `${maxWidth}`,
        width:         `${width}`,
        gap: "2rem",
      }}
    >
      {children}
    </LayoutAntd>
  )
}


Layout.propTypes = {
  children:        PropTypes.node.isRequired,
  background:      PropTypes.string,
  maxWidth:        PropTypes.string,
  width:           PropTypes.string,
  display:         PropTypes.string,
  flexDirection:   PropTypes.string,
  justifyContent:  PropTypes.string,
  alignItems:      PropTypes.string,

}

Layout.defaultProps = {
  background:    "#FFFFFF",
  maxWidth:      "100%",
  width:         "100%",
  display:       "flex",
  flexDirection: "column",
  justifyContent:"center",
  alignItems:    "center",
}

export default Layout