import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    *{
        font-size: 13px;
        color: #2E3F51;
    }
    .main{
        width: 80%;
        flex: 6;
        background-color:#ECF0F1;
    }
    .btn{
        text-transform: uppercase;
      }
    label{
        font-family: 'Open Sans', sans-serif;
    }
`;

export default Wrapper;