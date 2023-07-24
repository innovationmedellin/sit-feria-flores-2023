import PropTypes from 'prop-types'
import { HeadlineText } from './HeadLine.style'

const Heading = ({
  width,
  children,
  fontSize,
  fontWeight,
  padding,
  margin,
  textAlign,
  textTransform,
  lineHeight,
  mobileAlignment,
  border,
  color,
  textShadow,
  fontFamily
}) => {
  return (
    <HeadlineText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      padding={padding}
      margin={margin}
      textAlign={textAlign}
      textTransform={textTransform}
      lineHeight={lineHeight}
      mobileAlignment={mobileAlignment}
      width={width}
      border={border}
      textShadow={textShadow}
      fontFamily={fontFamily}
    >
      {children}
    </HeadlineText>
  )
}

Heading.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  textAlign: PropTypes.string,
  textTransform: PropTypes.string,
  lineHeight: PropTypes.string,
  mobileAlignment: PropTypes.string,
  border: PropTypes.bool,
  color: PropTypes.string,
  textShadow: PropTypes.bool,
  fontFamily: PropTypes.string
}

Heading.defaultProps = {
  fontFamily: 'Montserrat'
}
export default Heading
