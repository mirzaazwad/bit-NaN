import { IQuestion } from "../../hooks/useQuestion";



export const useAIResponse = () => {
    const responses: IQuestion[] = [
        {
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
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
            question: "How to create a new project in React?",
            author: "John Doe",
            date: "2021-08-20",
            upvotes: 10,
            downvotes: 20,
            comments: [
                {
                    id: 1,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 5,
                    downvotes: 2
                },
                {
                    id: 2,
                    text: "You can create a new project in React by using the create-react-app package",
                    author: "Jane Doe",
                    date: "2021-08-20",
                    upvotes: 3,
                    downvotes: 1
                }
            ],
            answer: "You can use the command `npx create-react-app my-app` to create a new React project."
        }
    ];

    return { responses };
}
