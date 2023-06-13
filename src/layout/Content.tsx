// react markdown
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'

// hooks
import { useState, useEffect } from 'react'

// get data from file
const filePath = '/data/Blogs/Linux/readme.md';



const Content = () => {
    const [data, setData] = useState<string>("")

    useEffect(() => {
        fetch(filePath)
    .then((response) => response.text())
    .then((text) => {
        console.log("fetch data successfully !");
        setData(text);
    }
    )
    .catch((error) => {
        console.error("error: ", error);
    }
    );
    }, [])



    return (
        <div className="content__wrapper w-3/5 py-2 px-10 overflow-y-auto overflow-x-hidden">
            <div className="blog__header">
                <h1 className="text-3xl font-semibold"> 📝 Linux materials 💦</h1>
            </div>
            <div className="blog__main">
                <ReactMarkdown children={data}
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                />
            </div>
        </div>
    )
}

export default Content