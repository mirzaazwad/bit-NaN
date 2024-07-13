import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import ForumSubBody from "../components/ForumSubBody/ForumSubBody";
import ForumSubHeader from "../components/ForumSubBody/ForumSubHeader";

const ForumSubPage = () => {
    return ( 
        <AuthenticatedLayout>
             <ForumSubHeader/>
             <ForumSubBody/>
        </AuthenticatedLayout>
     );
}
 
export default ForumSubPage;