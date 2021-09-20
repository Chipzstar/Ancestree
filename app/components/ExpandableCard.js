import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Block, Text } from 'galio-framework';
import { COLOURS } from '../constants/Theme';
import Collapse from './icons/CollapseBtn';
import Expand from './icons/ExpandBtn';

const ExpandableCard = ({ width, title, ...props }) => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleContent = () => {
		setCollapsed(!collapsed);
	};

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
				<Text style={{ fontFamily: 'Raleway-Bold', marginLeft: 10 }} color={COLOURS.SUBTEXT}>
					{title}
				</Text>
				<TouchableOpacity activeOpacity={0.7} style={{ padding: 10 }} onPress={toggleContent}>
					{collapsed ? <Expand /> : <Collapse/>}
				</TouchableOpacity>
			</Block>
			{!collapsed && <Block style={styles.cardContent}>{props.children}</Block>}
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

ExpandableCard.propTypes = {
	width: PropTypes.any.isRequired,
	title: PropTypes.string.isRequired
};

export default ExpandableCard;
