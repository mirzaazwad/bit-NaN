export const quizCardButtonStyle=(color:string,textColor:string)=>{
    if(color==="bg-white"){
        return `${color} ${textColor} px-4 py-2 rounded-lg border border-red-950 me-4 scale-100 hover:scale-105 transition-transform duration-500 ease-in-out`;
    }
    else{
        return `${color} ${textColor} font-bold px-4 py-2 rounded-lg me-4 scale-100 hover:scale-105 transition-transform duration-500 ease-in-out`;
    }
}