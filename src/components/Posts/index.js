
// Components
import { Post } from '../Post';
import { Composer } from '../forms';

// Hooks
import { usePosts } from '../../hooks';

// Helpers
import { fetchify } from '../../helpers';

export const Posts = () => {
    const { data, isFetched, isError } = usePosts();

    const postsJSX = data.map((post) => (
        <Post key = { post.hash } { ...post } />
    ));

    return (
        <div className = 'posts'>
            <h1 className = 'title'>Стена</h1>
            <Composer />
            <div className = 'posts-container'>
                { fetchify({ content: postsJSX, isFetched, isError }) }
            </div>
        </div>

    );
};
