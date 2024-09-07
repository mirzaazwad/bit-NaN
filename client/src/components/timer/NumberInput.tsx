import { IonIcon } from "@ionic/react";
import { arrowUpOutline,arrowDownOutline } from "ionicons/icons";
import { appStore } from "../../stores/redux-store";
import { timerActions } from "../../stores/slices/timer-slice";

interface INumberInput{
    value:number;
    min:number;
    max:number;
    disabled:boolean;
}

const NumberInput = ({value,min,max,disabled}:INumberInput) => {

    const handleIncrease=()=>{
        if(value<max){
            appStore.dispatch(timerActions.setSessions(value+1));
        }
    }

    const handleDecrease=()=>{
        if(value>min){
            appStore.dispatch(timerActions.setSessions(value-1));
        }
    }


  return (
    <div className="m-2 flex">
      <div className="w-1/4 bg-white px-2 py-2 me-2 text-bitBrown">{value}</div>
      {!disabled && (<button
        onClick={handleIncrease}
        className="px-2 py-2 me-2 bg-bitBrown hover:bg-white text-white hover:text-bitBrown rounded-lg disabled:bg-gray-900"
        disabled={value===max}
      >
        <IonIcon icon={arrowUpOutline}></IonIcon>
      </button>)}
     {!disabled && ( <button
        onClick={handleDecrease}
        className="px-2 py-2 bg-bitBrown hover:bg-white text-white hover:text-bitBrown rounded-lg disabled:bg-gray-900"
        disabled={value===min}
      >
        <IonIcon icon={arrowDownOutline}></IonIcon>
      </button>)}
    </div>
  );
};

export default NumberInput;