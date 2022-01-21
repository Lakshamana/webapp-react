import { Container, FeedPostCard, Select } from "components"
import { useState } from "react"

const FeedPage = () => {

	const filterList = [
		{
			value: 'recent',
			label: 'Most Recent'
		},
		{
			value: 'old',
			label: 'Most Old'
		},
		{
			value: 'popular',
			label: 'Popular'
		},
	]

	const [ filterBy, SetFilterBy ] = useState();

	const handleFilterChange = (evt: any) => {
    const { value } = evt?.target;
    SetFilterBy(value);
  }

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
				<FeedPostCard
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
				/>
			</Container>
	)
}

export { FeedPage }
