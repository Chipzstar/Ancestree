import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Collapse(props) {
	return (
		<Svg
			width={22}
			height={2}
			viewBox="0 0 22 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M21.002 1a1 1 0 01-1 1H1.998a1 1 0 010-2h18.004a1 1 0 011 1z"
				fill="#525252"
			/>
		</Svg>
	)
}
