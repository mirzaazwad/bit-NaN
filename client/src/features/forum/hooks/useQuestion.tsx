import { IComments } from "@/app/utils/templates/comments";
import { useState } from "react";

export interface IQuestion {
    id:string;
    question: string;
    author: string;
    date: string;
    upvotes: number;
    downvotes: number;
    comments: IComments[];
    answer?: string;  
}

export const useQuestion=()=>{
    const[questions,setQuestions]=useState<IQuestion[]>([
        {
            id:"1",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"2",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"3",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"4",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"5",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"6",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"7",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"8",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"9",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"10",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"11",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"12",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"13",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"14",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"15",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"16",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"17",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"18",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"19",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"20",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"21",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            id:"22",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:"1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:"2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
    ])

    const addDiscussion=(question:IQuestion)=>{
        setQuestions([...questions,question]);
    }

    const addComment=(id:string,comment:IComments)=>{
        const newQuestions=questions.map((question)=>{
            if(question.id===id){
                question.comments.push(comment);
            }
            return question;
        })
        setQuestions(newQuestions);
    }

    return {questions,addDiscussion,addComment}
}