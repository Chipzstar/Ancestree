import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Block, Text } from 'galio-framework';
import PropTypes from 'prop-types';
import { COLOURS } from '../constants/Theme';
import Number1 from './Number1';

const Card = ({ width, title, avatar, ...props }) => {
	return (
		<Block style={[styles.card, { width }]}>
			<Block
				flex
				row
				top
				style={{
					alignItems: 'center',
					paddingLeft: 15,
				}}
			>
				{avatar}
				<Text style={{ fontFamily: 'Raleway-Bold', marginLeft: 10 }} size={16} color={COLOURS.SUBTEXT}>
					{title}
				</Text>
			</Block>
			<Block style={styles.cardContent}>{props.children}</Block>
		</Block>
	);
};

const styles = StyleSheet.create({
	card: {
		borderWidth: 0,
		borderRadius: 10,
		elevation: 2,
		backgroundColor: COLOURS.WHITE,
		shadowRadius: 5,
		paddingVertical: 15,
		marginHorizontal: 4,
		marginVertical: 10,
		/*shadowOffset: {
			width: 1,
			height: 1
		},
		shadowColor: "#333",
		shadowOpacity: 0.3*/
	},
	cardContent: {
		marginHorizontal: 18,
		marginVertical: 10,
	},
});

Card.propTypes = {
	width: PropTypes.any.isRequired,
	avatar: PropTypes.node.isRequired,
};
export default Card;
