export const Comment = ({ body, author, created }) => {
    return (
        <li className = 'commentBody'>
            <p>{ author.name }<span>{ created }</span></p>
            <p>{ body }</p>
        </li>
    );
};
