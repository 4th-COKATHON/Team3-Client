import styled from 'styled-components';
import React from 'react';



const Container = styled.div`
display: flex;
width: 944px;
height: 187px;
padding: 15px 30px;
margin-top:20px;
align-items: center;
gap: 16px;
border-radius: 31px;
box-sizing:border-box;
border: 2px solid #FFF;
background: #FFC303;
`

const AddContainer=styled.div`
display: flex;
width: 200px;
justify-content: center;
align-items: center;
flex-shrink: 0;
align-self: stretch;
border-radius: 28px;
border: 3px dashed #242321;
`
const SubContent = () => {
    return (
        <Container>
            <AddContainer/>
        </Container>
    );
};

export default SubContent;


