import styled from '@emotion/styled'

const Paragraph = styled.p`
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 0 0 1rem 0;
  padding: 0;
  text-align: left;
  text-indent: 0;
  hyphens: none;
  overflow-wrap: break-word;
  word-break: normal;

  &:last-child {
    margin-bottom: 0;
  }
`

export default Paragraph
