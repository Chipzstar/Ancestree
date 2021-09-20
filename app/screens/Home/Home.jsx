import React from 'react';
import { Block, Button, Text } from 'galio-framework';
import PropTypes from 'prop-types';
import { COLOURS } from '../../constants/Theme';
import ancestry from '../../assets/images/ancestry_tree.png';
import { Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import Card from '../../components/Card';
import Number1 from '../../components/Number1';
import Number2 from '../../components/Number2';
import Number3 from '../../components/Number3';
import ExpandableCard from '../../components/ExpandableCard';
import Collapse from '../../components/icons/CollapseBtn';

const Home = props => (
	<ScrollView style={styles.container} scrollEnabled>
		<StatusBar hidden />
		<Block
			row
			space={'between'}
			style={{
				paddingHorizontal: 20,
				paddingVertical: 15
			}}
		>
			<TouchableOpacity activeOpacity={0.5}>
				<Ionicons name='arrow-back-sharp' size={30} color={COLOURS.PRIMARY} />
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.5}>
				<Ionicons name={'ellipsis-vertical-sharp'} size={30} color={COLOURS.SUBTEXT} />
			</TouchableOpacity>
		</Block>
		<Block flex center space={'evenly'} style={{ paddingHorizontal: 30 }}>
			<Text
				size={34}
				center
				color={COLOURS.PRIMARY}
				style={{ fontFamily: 'Raleway-Extra-Bold', marginBottom: 20 }}
			>
				Let's get started!
			</Text>
			<Image source={ancestry} width={300} height={150} />
			<Text
				center
				style={{ fontFamily: 'Raleway-Regular', lineHeight: 22, paddingVertical: 20 }}
				color={COLOURS.SUBTEXT}
				size={14}
			>
				Dear friend, thank you for joining AncesTree App ®. Here you can start exploring the app and build your
				family tree. To commence the process, just tap on the button below.
			</Text>
			<Button
				size={'large'}
				color={COLOURS.BUTTON}
				style={{ elevation: 7 }}
				shadowColor={'rgba(113, 131, 195, 0.35)'}
			>
				Build My Tree
			</Button>
		</Block>
		<Block flex>
			<Text
				size={34}
				center
				color={COLOURS.PRIMARY}
				style={{ fontFamily: 'Raleway-Extra-Bold', paddingVertical: 20 }}
			>
				How does it work?
			</Text>
			<Block flex center>
				<Card width={'85%'} avatar={<Number1 />} title={'Start building your family tree'}>
					<Text style={styles.raleway} color={COLOURS.SUBTEXT}>
						You can start building your family tree by clicking on the tab «My tree» in the left fixed menu
						or just by tapping the button above.
					</Text>
				</Card>
				<Card width={'85%'} avatar={<Number2 />} title={'Additional Info'}>
					<Text style={styles.raleway} color={COLOURS.SUBTEXT}>
						Fill in all known information about your predecessors and relatives.
					</Text>
				</Card>
				<Card width={'85%'} avatar={<Number3 />} title={'Artificial intelligence features'}>
					<Text style={styles.raleway} color={COLOURS.SUBTEXT}>
						Upload black & white photos of your ancestors and let’s see how they will look in color! Make
						alive your passed away relatives' photos and use other AI features.
					</Text>
				</Card>
			</Block>
		</Block>
		<Block flex>
			<Text
				size={34}
				center
				color={COLOURS.PRIMARY}
				style={{ fontFamily: 'Raleway-Extra-Bold', paddingVertical: 20 }}
			>
				Frequently asked questions
			</Text>
			<Block flex center>
				<ExpandableCard
					width={'80%'}
					title={'How does Artificial Intelligence work?'}
				>
					<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ipsum nec metus
						ultricies rhoncus. Integer pharetra, orci vitae semper pulvinar, nisl urna convallis quam, sit
						amet ultricies metus lectus sed mi. Aliquam dapibus nisi a tellus pretium sodales. Cras
						fringilla sem et consectetur maximus.</Text>
				</ExpandableCard>
				<ExpandableCard
					width={'80%'}
					title={'How can I get eternal access to my account?'}
				>
					<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ipsum nec metus
						ultricies rhoncus. Integer pharetra, orci vitae semper pulvinar, nisl urna convallis quam, sit
						amet ultricies metus lectus sed mi. Aliquam dapibus nisi a tellus pretium sodales. Cras
						fringilla sem et consectetur maximus.</Text>
				</ExpandableCard>
				<ExpandableCard
					width={'80%'}
					title={'How many people can I add as administrators of my account?'}
				>
					<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ipsum nec metus
						ultricies rhoncus. Integer pharetra, orci vitae semper pulvinar, nisl urna convallis quam, sit
						amet ultricies metus lectus sed mi. Aliquam dapibus nisi a tellus pretium sodales. Cras
						fringilla sem et consectetur maximus.</Text>
				</ExpandableCard>
			</Block>
		</Block>
	</ScrollView>
);

Home.propTypes =
{
}
;

export default Home;
