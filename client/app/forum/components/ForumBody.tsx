import { IQuestion, useQuestion } from "../hooks/useQuestion";
import ForumCard from "./ForumCard";
import { Tabs } from 'rsuite';
import { VscLock, VscRepo } from "react-icons/vsc";
import { GrGroup } from "react-icons/gr";

const ForumBody = () => {
    const { questions,addComment } = useQuestion();
    return (
        <div className="w-full flex flex-col justify-content-center items-center">
            <Tabs defaultActiveKey="1" className="w-11/12" color="yellow">
                <Tabs.Tab eventKey="1" title="Public" icon={<VscRepo />}>
                    {
                        questions.map((question: IQuestion, index: number) => (
                            <ForumCard key={index} question={question} addComment={addComment} isSubForum={false}/>
                        ))
                    }
                </Tabs.Tab>
                <Tabs.Tab eventKey="2" title="Group" icon={<GrGroup />}>
                    {
                        questions.map((question: IQuestion, index: number) => (
                            <ForumCard key={index} question={question}  addComment={addComment} isSubForum={false}/>
                        ))
                    }
                </Tabs.Tab>
                <Tabs.Tab eventKey="3" title="Private" icon={<VscLock />}>
                    {
                        questions.map((question: IQuestion, index: number) => (
                            <ForumCard key={index} question={question}  addComment={addComment} isSubForum={false}/>
                        ))
                    }
                </Tabs.Tab>
            </Tabs>
        </div>
    );
}

export default ForumBody;
