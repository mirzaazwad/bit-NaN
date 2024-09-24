const decodeName = (name: string): string => {
    const decodedName = decodeURIComponent(name);

    const lastUnderscoreIndex = decodedName.lastIndexOf('$');

    if (lastUnderscoreIndex !== -1) {
        return decodedName.substring(0, lastUnderscoreIndex)
    }

    return decodedName;
};

const renderFilePreviews = (fileList: any) => {
    return fileList.map((file: any, index: number) => {
        const fileUrl = URL.createObjectURL(file);

        if (file.type.startsWith('image/')) {
            return (
                <div key={index} className="file-preview">
                    <img src={fileUrl} alt={`file-preview-${index}`} className="h-16 w-16 object-cover rounded-lg" />
                    <p>{decodeName(file.name)}</p>
                </div>
            );
        }

        if (file.type.startsWith('video/')) {
            return (
                <div key={index} className="file-preview">
                    <video controls src={fileUrl} className="h-16 w-16 rounded-lg">
                        Your browser does not support video preview.
                    </video>
                    <p>{decodeName(file.name)}</p>
                </div>
            );
        }

        if (file.type === 'application/pdf') {
            return (
                <div key={index} className="file-preview">
                    <embed src={fileUrl} type="application/pdf" className="h-16 w-16 rounded-lg" />
                    <p>{decodeName(file.name)}</p>
                </div>
            );
        }

        return (
            <div key={index} className="file-preview">
                <p>{decodeName(file.name)}</p>
            </div>
        );
    });
};
export default renderFilePreviews;