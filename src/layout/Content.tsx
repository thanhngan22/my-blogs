// react markdown
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'

const Content = () => {
    const data = `# This is a header`

    return (
        <div className="content__wrapper w-3/5 overflow-y-auto overflow-x-hidden border-l">
            <div className="blog__header mb-5 ">
                <h1 className="text-3xl font-semibold"> Blog Tittle</h1>
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