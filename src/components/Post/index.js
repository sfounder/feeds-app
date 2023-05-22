// Core
import { useDispatch, useSelector } from 'react-redux';

// Assets
import { CommentIcon } from '../../theme/assets/comment';
import { LikeIcon } from '../../theme/assets/like';

// Redux
import { getSelectedPostId, setSelectedPostId } from '../../lib/redux';

// Hooks

// Components
import { CommentsForm } from '../forms';
import { Comment } from '../Comment';

export const Post = ({
    author, comments, likes, body, hash,
}) => {
    const dispatch = useDispatch();
    const selectedPostId = useSelector(getSelectedPostId);

    const commentsJSX = comments.map((comment) => (
        <Comment key = { comment.hash } { ...comment } />
    ));

    const handleClick = () => {
        if (selectedPostId === hash) {
            dispatch(setSelectedPostId(''));
        } else {
            dispatch(setSelectedPostId(hash));
        }
    };

    return (
        <section className = 'post'>
            <img src = { author.avatar } alt = 'avatar' />
            <a>{ author.name }</a>
            <time>about 12 hours ago</time>
            <p>{ body }</p>
            <div className = 'reaction-controls'>
                <section className = 'like'>
                    <div>
                        <span>{ likes.length }</span>
                    </div>
                    <span className = 'icon'>
                        <LikeIcon /> Like
                    </span>
                </section>
                <span className = 'comment' onClick = { handleClick }>
                    <CommentIcon /> { comments.length } comments
                </span>
            </div>
            {
                selectedPostId === hash && (
                    <>
                        <CommentsForm />
                        <hr className = 'separator' />
                        <ul>
                            { commentsJSX }
                        </ul>
                    </>
                )
            }
        </section>
    );
};
