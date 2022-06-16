import React from "react";
import styled from "styled-components";

function Books() {
      const books = [
            {
                  title: "Train Your Brain: Ultimate Memory Hacks",
                  image: "https://images-na.ssl-images-amazon.com/images/I/51SgrRByOTL._SX322_BO1,204,203,200_.jpg",
                  overview: "Would you like to sharpen your memory? Would you like to keep your brain agile and focused? Would you like to age-proof your brain so that it stays young, healthy and fit? Then this is the book for you! Train Your Brain is a book of puzzles, exercises, riddles, and brain games that will help boost your brain power and jump start your brain! Whether you are a teenager, young adult, or a senior citizen, this book provides a vigorous mental workout to help increase your memory, sharpen your deductive and mathematical skills, improve your observation, increase your problem-solving skills, and improve the overall health of your brain.• More than 100 fun, brain-enhancing exercises, puzzles, and riddles.• 50 neurobic exercises that you can practice anytime, anywhere.• 66 popular games that will help you polish your cognitive skills.",
            },
            {
                  title: "80%Mindset 20%Skills",
                  image: "https://images-na.ssl-images-amazon.com/images/I/51KSdH6G8fL._SX322_BO1,204,203,200_.jpg",
                  overview: "Author of the book “Dev Gadhvi” comes from a very humble family; his dad was a truck driver and mother a housewife. He saw a great deal of struggle since his childhood and lost 13 years of his career to a mediocre mentality. Finally, he could transform his life with help of some very less known millionaire’s secrets. He knows the pain of living with a mediocre mindset and loosing precious time. This is the only reason he doesn’t want anyone else to loose their precious years. In this book, he shares his learning and his transformation with only single aim, that is to help others transform their lives as well. He has carefully crafted the book only for the people who are looking for that one life changing moment, people who are looking to realize what was missing in their hustle, people who were wanting to know the secrets of how others have become so successful and how they can become too.",
            },
            {
                  title: "The Psychology of Money",
                  image: "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
                  overview: "Timeless lessons on wealth, greed, and happiness doing well with money isn?t necessarily about what you know. It?s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do. But in the real world, people don?t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.",
            },
            {
                  title: "The Plot: A Novel",
                  image: "https://m.media-amazon.com/images/I/413BX0UWqEL._SY346_.jpg",
                  overview: "Jacob Finch Bonner was once a promising young novelist with a respectably published first book. Today, he’s teaching in a third-rate MFA program and struggling to maintain what’s left of his self-respect; he hasn’t written—let alone published—anything decent in years. When Evan Parker, his most arrogant student, announces he doesn’t need Jake’s help because the plot of his book in progress is a sure thing, Jake is prepared to dismiss the boast as typical amateur narcissism. But then . . . he hears the plot.",
            },
            {
                  title: "The Soul of a Woman",
                  image: "https://m.media-amazon.com/images/I/41Q-Ay1NpcL._SY346_.jpg",
                  overview: "“The Soul of a Woman is Isabel Allende’s most liberating book yet. “When I say that I was a feminist in kindergarten, I am not exaggerating,” begins Isabel Allende. As a child, she watched her mother, abandoned by her husband, provide for her three small children without “resources or voice.” Isabel became a fierce and defiant little girl, determined to fight for the life her mother couldn’t have.",
            }
      ];
      return <BooksBox>
        {
            books.map((item)=> {
                return <div key={item.title}>
                    <img src={item.image} alt={item.title} />
                    <Title>{item.title}</Title>
                    <Overview>{item.overview}</Overview>
                </div>
            })
        }
      </BooksBox>;
}

const BooksBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2,600px);
    grid-template-rows: auto;
    justify-content: space-between;
    row-gap: 50px;
    width: 97%;
    margin: auto;
`;
const Overview = styled.article`
    text-align: justify;
`
const Title = styled.p`
    font-size: 23px;
    text-align: center;
`
export default Books;
