import { API_ROUTES } from "../../api/apiRoutes";
import { postData } from "../common/apiCall";

class FileHelper{
    static async uploadFile(file:File, category:string): Promise<string>{
        const formData = new FormData();
        formData.append("file", file);
        formData.append("category", category);
        const response = await postData(API_ROUTES.files.upload, formData);
        console.log(response)
        return response.data.url;
    }
}

export default FileHelper;