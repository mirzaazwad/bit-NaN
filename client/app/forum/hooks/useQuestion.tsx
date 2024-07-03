import { IComments } from "@/app/utils/templates/comments";

export interface IQuestion {
    question: string;
    author: string;
    date: string;
    upvotes: number;
    downvotes: number;
    comments: IComments[];
    answer?: string;  
}

export const useQuestion=()=>{
    const questions:IQuestion[] = [
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id:1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:5,
                    downvotes:2
                },
                {
                    id:2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes:3,
                    downvotes:1
                }
            ]
        },
    ]

    return {questions}
}