export const Comment = ({
    body, author, post, created,
}) => {
    return (
        <div className = 'comment'>
            <p className = 'name'>{ author.name }</p>
            <time>{ created }</time>
            <p className = 'body'>{ body }</p>
            <a href = { `/feed/${post.hash}` }>Больше комментариев к посту</a>
        </div>
    );
};
