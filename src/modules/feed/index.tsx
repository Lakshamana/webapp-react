import { Container, FeedPostCard, Select } from "components"
import { useEffect, useState } from "react"
import { formatDistance, intervalToDuration } from 'date-fns'
import { QUERY_POSTS } from "services/graphql/query/posts"
import { useLazyQuery } from "@apollo/client"
import { ThumborInstanceTypes, useThumbor } from "services/hooks/useThumbor"
import { useChannelStore } from "services/stores"

const FeedPage = () => {
  const { generateImage } = useThumbor()
	const filterList = [
		{ value: 'recent', label: 'Most Recent' },
		{ value: 'old', label: 'Most Old' },
		{ value: 'popular', label: 'Popular' },
	]

  const { channel } = useChannelStore()

	const [ filterBy, SetFilterBy ] = useState();
  const [posts, setPosts] = useState([]);

	const handleFilterChange = (evt: any) => {
    const { value } = evt?.target;
    SetFilterBy(value)
  }

  const [loadPosts, { data: dataPosts }] = useLazyQuery(
    QUERY_POSTS, 
    { variables: {} }
  )

  const getUrl = (obj) =>
    generateImage(
      ThumborInstanceTypes.IMAGE,
      obj.imgPath,
      {
        size: {
          height: obj.height || undefined,
          width: obj.width || undefined
        },
      }
    )

  useEffect(() => {
    if (!dataPosts || !dataPosts?.posts?.length) return

    const reduced = dataPosts.posts.map(post => {
      const duration = post?.duration 
        ? intervalToDuration({ start: 0, end: post?.duration * 1000 }) 
        : undefined

      const mediaLength = !duration 
        ? '' 
        : `${duration.hours ? `${duration.hours}:` : ''}${duration.minutes}:${duration.seconds}`

      const coverImage = post?.type && post.type === 'image' 
        ? getUrl(post.media) 
        : post.thumbnail 
          ? getUrl(post.thumbnail) 
          : ''

      const date = post.publishedAt 
        ? formatDistance(new Date(post.publishedAt), new Date(), { addSuffix: true }) 
        : ''

      const type = post.type 
        ? post.type.charAt(0).toUpperCase() + post.type.slice(1) 
        : ''

      return {
        postTitle: post.title,
        postDescription: post.description,
        date,
        type,

        hasActivity: true,
        displayViews: true,

        countMessages: post.counts?.countComments,

        coverImage,
        mediaLength,
        views: post.counts?.countViews,

        audioTitle: post.audioTitle,
        audioArtist: post.audioArtist,

        timeRemaining: '',
        itemQuestion: '',
        percentage: '',

        voted: !!post.myVote,

        isExclusive: false,
        isGeolocked: false,
      }
    })
    console.log('reduced', reduced)
    setPosts(reduced)
  }, [dataPosts])

  useEffect(() => {
    console.log('channel?.id', channel?.id)
    loadPosts({
      context: { headers: { channel: channel?.id || '5c9277169a57aca84e2cdced' } },
      variables: {
        limit: 20,
        skip: 0,
        orderBy: [{ name: "publishedAt", direction: "DESC" }],
      }
    })
  }, [channel])

	return (
    <Container flexDirection={"column"} width={"100%"}>

      <Container 
        flexDirection={"column"}
        width={"100%"}
        margin="1em auto 0 auto"
        maxWidth="746px"
        alignItems="flex-end"
      >
        <Select
          options={filterList}
          value={filterBy}
          onChange={handleFilterChange}
        />
      </Container>

      {!!posts?.length && posts.map((post) => (<FeedPostCard {...post} />))}

      {/* <FeedPostCard
        postTitle='Tile of the post'
        postDescription='This is the description of the post...'
        date='3 days ago'
        hasActivity={true}
        coverImage='https://cdn.dooca.store/996/files/breaking-bad.jpg'
        type='Image'
        mediaLength=''
        views={20}
        countMessages={1500}
        audioTitle='Audio test'
        audioArtist='Joãozinho'
        voteCount={20}
        timeRemaining='2'
        itemQuestion='Question test'
        percentage='50%'
        voted={true}
      />

      <FeedPostCard
        postTitle='Tile of the post'
        postDescription='This is the description of the post...'
        date='3 days ago'
        hasActivity={true}
        coverImage='https://img.ibxk.com.br/2019/09/05/05150900742176.jpg'
        type='Video'
        mediaLength='01:27:00'
        views={20}
        countMessages={3200}
        audioTitle='Audio test'
        audioArtist='Joãozinho'
        voteCount={20}
        timeRemaining='2'
        itemQuestion='Question test'
        percentage='50%'
        voted={true}
      />

      <FeedPostCard
        postTitle='Tile of the post'
        postDescription='This is the description of the post...'
        date='3 days ago'
        hasActivity={true}
        coverImage='https://img.ibxk.com.br/2019/09/05/05150900742176.jpg'
        type='Blog'
        mediaLength=''
        views={20}
        countMessages={30}
        audioTitle='Audio test'
        audioArtist='Joãozinho'
        voteCount={20}
        timeRemaining='2'
        itemQuestion='Question test'
        percentage='50%'
        voted={true}
      />

      <FeedPostCard
        postTitle='Tile of the post'
        postDescription='This is the description of the post...'
        date='3 days ago'
        hasActivity={true}
        coverImage='https://img.ibxk.com.br/2019/09/05/05150900742176.jpg'
        type='Poll'
        mediaLength=''
        views={20}
        countMessages={30}
        audioTitle='Audio test'
        audioArtist='Joãozinho'
        voteCount={20}
        timeRemaining='2 days'
        itemQuestion='Question test'
        itensQuestions={[
          {
            id: 1,
            item: 'This might be a good option',
            percentage: '30%',
            winner: false
          },
          {
            id: 2,
            item: 'This is the one that will win!',
            percentage: '50%',
            winner: true
          },
          {
            id: 3,
            item: 'This is not going anywhere...!',
            percentage: '20%',
            winner: false
          },
        ]}
        percentage='60%'
        voted={true}
      />

      <FeedPostCard
        postTitle='Tile of the post'
        postDescription='This is the description of the post...'
        date='3 days ago'
        hasActivity={true}
        coverImage='https://br.web.img2.acsta.net/newsv7/20/05/21/22/45/4919243.jpg'
        type='Audio'
        mediaLength='04:52'
        views={20}
        countMessages={2000}
        audioTitle='Audio test'
        audioArtist='Joãozinho'
        voteCount={20}
        timeRemaining='2 days'
        itemQuestion='Question test'
        percentage='50%'
        voted={true}
      /> */}
    </Container>
	)
}

export { FeedPage }
