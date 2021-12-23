<template>
  <Wrapper>This is a demo component to demonstrate the behaviour of switching themes</Wrapper>

</template>


<script>
import styled, { css } from 'vue3-styled-components';

const Wrapper = styled("div")`
  position: relative;
  ${({ theme }) =>
    css`
    height: 200px;
    width: 200px;
    background-color: ${theme.backgroundColor};
    color: ${theme.textColor};
    `}
`
export default {
  components: { Wrapper }
};

;
</script>
