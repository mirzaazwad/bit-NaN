import { useState } from "react";
import { IQuestion } from "../../hooks/useQuestion";
import { IComments } from "@/app/utils/templates/comments";



export const useAIResponse = () => {
    const [responses, setResponses] = useState<IQuestion[]>([
        {
            id: "1",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "2",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "3",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "4",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "5",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "6",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "7",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "8",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "9",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "10",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "11",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "12",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "13",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "14",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "15",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "16",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "17",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        },
        {
            id: "18",
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: "1",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: "2",
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        }]);

        const addComment=(id:string,comment:IComments)=>{
            const newResponses=responses.map((question)=>{
                if(question.id===id){
                    question.comments.push(comment);
                }
                return question;
            })
            setResponses(newResponses);
        }

    return { responses, addComment};
}
