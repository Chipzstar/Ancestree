import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function FacebookBtn(props) {
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
				d="M24.193 31v-7.298h2.358l.354-2.845h-2.712v-1.816c0-.823.22-1.384 1.357-1.384l1.45-.001v-2.544A18.664 18.664 0 0024.887 15c-2.09 0-3.522 1.326-3.522 3.76v2.097H19v2.845h2.365V31h2.828z"
				fill="#3BB19B"
			/>
		</Svg>
	)
}

export default FacebookBtn;
