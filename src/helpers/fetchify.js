export const fetchify = ({ content, isFetched, isError }) => {
    if (isError) return 'Some Error.';
    if (!isFetched) return 'In Progress...';

    return content;
};
