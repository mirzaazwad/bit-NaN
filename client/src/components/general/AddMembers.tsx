import { WithContext as ReactTags, SEPARATORS } from "react-tag-input";
import { Tag } from "../../utils/templates/Groups";

type Props = {
    members: Tag[];
    setMembers: (value: Tag[]) => void;
}

const AddMembers = (props:Props) => {

    const handleAddition = (tag: Tag) => {
        props.setMembers([...props.members, tag]);
    }

    const handleDelete = (i: number) => {
        props.setMembers(props.members.filter((tag, index) => index !== i));
    }  

    const onClearAll = () => {
        props.setMembers([]);
    }

    return (
        <>
            <div>
                <h5 className="text-lg font-semibold text-gray-800">Members</h5>
            </div>
            <div>
                <ReactTags
                    tags={props.members}
                    separators={[SEPARATORS.TAB, SEPARATORS.ENTER, SEPARATORS.SPACE, SEPARATORS.COMMA]}
                    handleAddition={handleAddition}
                    handleDelete={handleDelete}
                    inputFieldPosition="top"
                    editable
                    clearAll
                    onClearAll={onClearAll}
                    classNames={{
                            tags: "flex flex-wrap gap-2 mt-2",
                            tag: "inline-flex items-center px-2 py-1 rounded-full bg-amber-400 text-black text-sm font-medium mx-1",
                            tagInput:
                                "block py-2.5 px-3 w-full text-sm text-gray-900 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-0 focus:border-amber-600 peer",
                            tagInputField: "w-full focus:outline-none bg-inherit my-2",
                            selected: "",
                            remove: "",
                            suggestions: "",
                            activeSuggestion: "",
                            editTagInput: "",
                            editTagInputField: "",
                            clearAll: "bg-amber-500 p-2 rounded-lg text-white",
                    }}
                    placeholder="Add members"
                />
            </div>
        </>
    );
}

export default AddMembers;