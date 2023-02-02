import { Flex, Image } from '@chakra-ui/react'

export const Navbar: React.FC = () => {
	return (
		<section>
			<Flex bg='#fff' height='44px' padding='6px 12px'>
				<Flex align='center'>
					<Image
						src='images/redditFace.svg'
						height='30px'
						alt='Reddit Face Logo'
					/>
					<Image
						src='images/redditText.svg'
						height='46px'
						alt='Reddit Text Logo'
						display={{ base: 'none', md: 'unset' }}
					/>
				</Flex>
			</Flex>
		</section>
	)
}
