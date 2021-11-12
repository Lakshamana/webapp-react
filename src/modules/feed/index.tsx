import { MainLayout, Container, FeedPostCard } from "components"

const FeedPage = () => {
	return (
		<MainLayout>
			<Container flexDirection={"column"} width={"100%"}>
				<FeedPostCard
					postTitle='Teste title'
					postDescription='Description...'
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
					postTitle='Teste Video post'
					postDescription='Description...'
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
					postTitle='Teste Blog post'
					postDescription='Description...'
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
					postTitle='Teste Blog post'
					postDescription='Description...'
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
					percentage='60%'
					voted={true}
				/>
				<FeedPostCard
					postTitle='Teste Audio post'
					postDescription='Description...'
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
				/>
			</Container>
		</MainLayout>
	)
}

export { FeedPage }
