import { searchButton } from "@/app/config/theme/search.theme";
import { IonIcon } from "@ionic/react";
import { searchSharp } from "ionicons/icons";

const SearchBar = () => {
    return ( 
        <div className="lg:w-3/4 flex items-center justify-center">
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-lg w-full m-4 px-4 py-2"/>
            <button className={searchButton}><IonIcon icon={searchSharp}></IonIcon> Search</button>
        </div>
    );
}
 
export default SearchBar;