import Card from "./Card"
import styled from "styled-components"
export default function Body(){
    const cards = [
        { question: "___ é o recurso mais importante numa situação de crise.", answer: "Água" },
        { question: "___ é essencial para garantirmos água, comida e aquecimento.", answer: "Saber fazer fogo" },
        { question: "Para achar água numa floresta, devemos procurar por ___", answer: "Insetos e árvores verdes. Onde há vida há água." },
        { question: "___ é uma rocha sedimentar útil para fazer fogo através de fricção.", answer: "Sílex, também conhecida como pederneira" },
        { question: "O lugar ideal para dormir numa floresta desconhecida é ___", answer: "No alto, evitando possíveis predadores noturnos" },
        { question: "O sílex é comunmente encontrado em ___", answer: "Margens de rios" },
        { question: "Podemos sobreviver semanas sem comida, mas somente ___ sem água", answer: "3 a 5 dias" },
        { question: "Podemos beber ___ até 3 vezes, caso não achemos nenhuma outra fonte de água", answer: "A nossa urina" }
    ]
    return (
        <>
       {cards.map((i) => <Card n={cards.indexOf(i)+1}/>)}
       </>
    )
}
