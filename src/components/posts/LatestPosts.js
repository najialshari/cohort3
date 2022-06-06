const LatestPosts = ({posts}) => {
    console.log('LatestPosts is rendering')
    return (
        <ul>
            {posts.map((post, i) => {
                return <li key={i}>{post}</li>
            })}
        </ul>
    )
}

export default LatestPosts