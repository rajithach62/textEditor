import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  padding: 100px;
  padding-left: 250px;
  padding-right: 250px;
  @media screen and (max-width: 768px) {
    padding: 20px;
    padding-left: 5px;
    padding-right: 5px;
  }
`

export const CardOne = styled.div`
  background-color: #1b1c22;
  width: 100%;
  height: 500px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 90vh;
    width: 90%;
    margin: 20px;
  }
`

export const HeadOne = styled.h1`
  color: white;
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 15px;
  }
`

export const InnerCardOne = styled.div`
  width: 40%;
  height: 500px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    height: 300px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`
export const Img = styled.img`
  height: 400px;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 180px;
    width: 80%;
  }
`

export const InnerCardTwo = styled.div`
  width: 50%;
  margin: 30px;
  border: 1px solid #f8fafc;
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 300px;
  }
`
export const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
`
export const ListItem = styled.li`
  height: 40px;
  color: white;
`
export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.c === true ? '#faff00' : '#f1f5f9')};
  margin-top: 10px;
`
export const Icon = styled.div`
  color: ${props => props.c};
  margin-top: 10px;
`
export const Horizontal = styled.hr`
  color: #f8fafc;
  width: 100%;
`
export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  background-color: transparent;
  height: 82%;
  border: none;
  padding: 30px;
  color: white;
  font-family: 'Roboto';
  text-decoration: ${props => (props.a === true ? 'underline' : 'normal')};
  font-style: ${props => (props.b === true ? 'italic' : 'normal')};
  font-weight: ${props => (props.c === true ? 'bold' : 'normal')};
  @media screen and (max-width: 768px) {
    padding: 20px;
    height: 300px;
  }
`
