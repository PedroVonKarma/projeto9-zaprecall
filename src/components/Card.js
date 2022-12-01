import styled from "styled-components"
import play from '../assets/img/seta_play.png'
import virar from '../assets/img/seta_virar.png'
export default function Card(props) {
    return (
        <>
        <Fechada>
            <p>Pergunta {props.n}</p>
            <img src={play}/>
        </Fechada>
        </>
    )
}
//<Aberta>Pergunta aberta <img src={virar}/></Aberta>
//<Aberta>Resposta <ContainerB><button>Não lembrei</button><button>Quase não lembrei</button> <button>Zap!</button></ContainerB></Aberta>
const Fechada = styled.div`
width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;}
`
const Aberta = styled.div`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
    position: absolute;
    bottom: 10px;
    right: 10px;}
`
const ContainerB = styled.div`
display: flex;
justify-content: space-between;
button{width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  padding:5px;}
  & button:nth-child(1){background-color:#FF3030; border: 1px solid #FF3030;}
  & button:nth-child(2){background-color:#FF922E; border: 1px solid #FF922E;}
  & button:nth-child(3){background-color:#2FBE34; border: 1px solid #2FBE34;}
`
