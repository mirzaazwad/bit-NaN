export const dropDownButton=(currentPath:String,actualPath:String):string=>{
    return `
    ms-4 me-4 
    ${currentPath === actualPath ? "bg-yellow-600 border border-bitBrown text-bitBrown" : ""} 
    rounded-lg px-4 py-2 mt-4 hover:bg-bitBrown hover:text-yellow-950 hover:border-bitBrown
    `;
}

export const topbarButton=(currentPath:String,actualPath:String):string=>{
    return `
    ms-4 me-4 
    ${currentPath === actualPath ? "bg-yellow-600 border border-bitBrown text-bitBrown" : ""} 
    rounded-lg px-4 py-2 mt-4 hover:bg-bitBrown hover:text-yellow-600 hover:border-bitBrown
    `;
}

export const useOptionsButton=(currentPath:String,actualPath:String):string=>{
    return `
    ms-4 me-4 ${currentPath === "/users/logout" ? "border border-bitBrown" : ""} 
    rounded-lg px-4 py-2 mt-4 text-bitBrown 
    hover:bg-bitBrown hover:text-black hover:text-yellow-400
    `;
}


export const navStyles: string = `
    z-20 fixed text-white bg-bitBrown w-full overflow-hidden
`;

export const navInnerStyles: string = `
    w-full flex flex-wrap items-center justify-center mx-auto p-4
`;

export const menuButtonStyles: string = `
    cursor-pointer text-4xl text-white
`;

export const topbarUlStyles: string = `
    font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0
`;

export const dropdownUlStyles: string = `
    w-full font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0
`;