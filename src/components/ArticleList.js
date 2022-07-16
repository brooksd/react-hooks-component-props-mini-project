import Article from "./Article";

const ArticleList = ({posts}) => {
    const articlearr = posts.map((post) => {
        return (
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
        );
        
    });
    
    return <main>{articlearr}</main>;
}

export default ArticleList;