// Hooks
import { useRecentComments } from '../../hooks';

// Helpers
import { fetchify } from '../../helpers';

// Components
import { Comment } from './Comment';

export const RecentComments = () => {
    const { data, isFetched, isError } = useRecentComments();

    const commentsJSX = data.map((comment) => (
        <Comment key = { comment.hash } { ...comment } />
    ));

    return (
        <div className = 'most-recent-comments'>
            <h1 className = 'title'>Популярные комментарии</h1>
            <section>
                { fetchify({ content: commentsJSX, isFetched, isError }) }
            </section>
        </div>
    );
};
