import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Expand(props) {
	return (
		<Svg
			width={22}
			height={22}
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 1a1 1 0 10-2 0v9H1.002a1 1 0 100 2h9v9a1 1 0 102 0v-9h9a1 1 0 100-2h-9V1z"
				fill="#525252"
			/>
		</Svg>
	)
}
