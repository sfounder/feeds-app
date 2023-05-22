// Core
import { NavLink, useParams } from 'react-router-dom';

// Hooks
import { usePostDetails } from '../../hooks';

// Helpers
import { fetchify, formatDate } from '../../helpers';


export const PostComments = () => {
    const params = useParams();
    const { data: postDetails, isFetched, isError } = usePostDetails(params.postId);

    if (isError) return 'Something happen...';

    const commentsJSX = postDetails?.comments?.map(({
        author, body, created, hash,
    }) => {
        const createdTime = formatDate(created);

        return (
            <div className = 'comment' key = { hash }>
                <p>{ author.name }</p>
                <time title = { createdTime }>{ createdTime }</time>
                <p>{ body }</p>
            </div>
        );
    });

    return (
        <div className = 'wrapper'>
            <NavLink className = 'link-back active' to = '..'>
                <div className = 'arrow'></div>Назад
            </NavLink>
            <h1 className = 'title'>Комментарии к посту</h1>
            <section>
                <div className = 'comment'>
                    <p className = 'name'>{ fetchify({ content: postDetails?.author?.name, isFetched }) }</p>
                    <time>{ formatDate(fetchify({
                        content: postDetails?.created,
                        isFetched,
                    })) }</time>
                    <p className = 'body'>{ fetchify({ content: postDetails?.body, isFetched }) }</p>
                    <p className = 'subtitle'>Популярные комментарии</p>
                    { fetchify({ content: commentsJSX, isFetched }) }
                </div>
            </section>
        </div>
    );
};
