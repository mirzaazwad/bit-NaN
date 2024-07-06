const DragDropFile = () => {
    return (
        <div className="flex items-center justify-center w-full mt-12">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-yellow-600 border-dashed rounded-lg cursor-pointer hover:bg-black bg-bitBrown">
                <div className="h-32 flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-yellow-600"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-yellow-600">PNG, JPG, PDF, MP3, DOCX, DOC, MP4</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>
    );
}

export default DragDropFile;