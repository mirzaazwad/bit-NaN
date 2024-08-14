import { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Tooltip, Whisper } from 'rsuite';

interface ICodeBlock{
    code:string
}

const CodeBlock = ({ code }:ICodeBlock) => {
    const [language, setLanguage] = useState<string|undefined>();
    const [open,setOpen]=useState(false);

    const getCodeLanguage = async () => {
        try {
            const detectedLanguage = hljs.highlightAuto(code).language;
            setLanguage(detectedLanguage);
        } catch (error) {
            console.error('Error fetching file content:', error);
        }
    };

    useEffect(() => {
        getCodeLanguage();
    }, [code]);

    const copyToClipboard = () => {
        setOpen(true);
        navigator.clipboard.writeText(code);
    
        const timer = setTimeout(() => {
            setOpen(false);
        }, 3000);
    
        return () => clearTimeout(timer); 
    };
    

    return (
            <div className='px-4 py-2 w-4/5 bg-yellow-600 border border-yellow-600 m-4 rounded-lg'>
                <div className="w-full flex justify-end">
                    <Whisper 
                        trigger="click"
                        placement='topEnd'
                        open={open}
                        speaker={<Tooltip>Copied to Clipboard</Tooltip>}
                    >
                    <button className='bg-bitBrown text-yellow-600 text-sm px-2 py-1 rounded-lg hover:bg-yellow-600 hover:text-bitBrown border border-yellow-600 hover:border-bitBrown' onClick={()=>copyToClipboard()}>Copy</button>
                    </Whisper>
                </div>
                <SyntaxHighlighter language={language} style={darcula} showLineNumbers customStyle={{
                    'fontSize':'0.65rem'
                }}>
                {code}
            </SyntaxHighlighter>
            </div>
    );
};

export default CodeBlock;