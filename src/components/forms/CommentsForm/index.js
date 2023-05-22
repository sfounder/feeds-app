export const CommentsForm = () => {
    return (
        <form className = 'commentForm'>
            <img
                src = 'https://placeimg.com/256/256/animals' alt = 'avatar'
                className = 'comment-avatar' />
            <label>
                <div><span className = 'error-message'></span></div>
                <input
                    placeholder = 'Комментарий...' type = 'text'
                    name = 'body' />
            </label>
            <button type = 'submit'>Комментировать</button>
        </form>
    );
};
