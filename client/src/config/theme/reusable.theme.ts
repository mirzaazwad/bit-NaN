export const HeaderBarTheme: string = "bg-bitBrown border-2 border-black rounded-md flex justify-center drop-shadow-md";

export const SideNavButtonTheme = (activeTab:string, active:string) => {
    return `px-4 py-2 w-full rounded-r-md mb-1 transition-colors duration-200 ease-in-out ${
        activeTab === active
          ? 'bg-amber-500 text-white hover:bg-amber-600'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      } shadow-md`;
}