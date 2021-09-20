import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function GoogleBtn(props) {
	return (
		<Svg
			width={47}
			height={47}
			viewBox="0 0 47 47"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Circle
				cx={23.5}
				cy={23.5}
				r={22.5}
				fill="#fff"
				stroke="#F0F0F0"
				strokeWidth={2}
			/>
			<Path
				d="M36 22.998v2.004h-1.987V27h-2.01v-1.998H30v-2.004h2.004V21h2.009v1.998H36zM28 24.181C28 28.75 24.872 32 20.172 32 15.64 32 12 28.419 12 24c0-4.419 3.64-8 8.172-8 2.063 0 3.959.712 5.472 2.081l-2.222 2.107c-.868-.832-2.062-1.232-3.256-1.232-2.828 0-5.089 2.294-5.089 5.038 0 2.75 2.254 5.037 5.089 5.037 2.145 0 4.278-1.231 4.622-3.437h-4.622v-2.75h7.706c.083.437.128.881.128 1.337z"
				fill="#3BB19B"
			/>
		</Svg>
	)
}

export default GoogleBtn;
