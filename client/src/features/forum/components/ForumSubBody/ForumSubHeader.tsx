/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { HeaderBarTheme } from "../../../../config/theme/reusable.theme";
import { ForumHelper } from "../../../../utils/helpers/forumHelper";
import LoadingComponent from "../../../../components/general/Loading";
import ProfileHelper from "../../../../utils/helpers/profileHelper";

const ForumSubHeader = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [modifiedAt, setModifiedAt] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    ForumHelper.getForumById(id).then((res: any) => {
      setTitle(res.title);
      setDescription(res.description);
      setEmail(res.userEmail);
      setModifiedAt(res.modified);
      setCreatedAt(res.created);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    ProfileHelper.getProfileByEmail(email).then((res) => {
      setUsername(res.userName);
    });
  }, [email]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="flex flex-col justify-content-center mt-6 mb-6 mx-auto" style={{
        width:"98%"
    }}>
      <div className={`${HeaderBarTheme}`}>
        <h3 className="font-semibold text-xl text-white">{title}</h3>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full px-4 py-2 text-lg font-bold">{description}</div>
        <div className="w-full flex flex-row justify-end gap-6 bg-yellow-600 px-4 py-2 rounded-b-xl">
          {username} {modifiedAt === createdAt ? "Created" : "Edited"} {modifiedAt}
        </div>
      </div>
    </div>
  );
};

export default ForumSubHeader;
