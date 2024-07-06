export const HeaderBarTheme: string = "bg-bitBrown border-2 border-black rounded-md flex justify-center drop-shadow-md";

export const SideNavButtonTheme = (activeTab:string, active:string) => {
    return `px-4 py-2 w-full rounded-l-md ml-2 mb-1 ${activeTab === active ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`
}