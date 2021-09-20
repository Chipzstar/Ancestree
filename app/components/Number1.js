import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Number1(props) {
	return (
		<Svg
			width={35}
			height={35}
			viewBox="0 0 35 35"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Circle cx={17.5} cy={17.5} r={17.5} fill="#7183C3" />
			<Path
				d="M15.016 22.208h2.24v-5.88c0-.288.008-.59.024-.904l-1.32 1.096a.925.925 0 01-.256.152.829.829 0 01-.624-.048.85.85 0 01-.24-.2l-.784-1.04 3.632-3.048h2.048v9.872h1.92V24h-6.64v-1.792z"
				fill="#fff"
			/>
		</Svg>
	)
}

export default Number1
