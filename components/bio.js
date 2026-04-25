import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 0;
  text-indent: 0;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 48em) {
    flex-direction: row;
    gap: 0;
    align-items: flex-start;
  }
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
  display: inline-block;
  min-width: 10em;
  text-align: left;
  flex-shrink: 0;

  @media (max-width: 47.99em) {
    margin-right: 0;
    min-width: auto;
  }
`
