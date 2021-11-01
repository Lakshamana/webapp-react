import { Text } from "components"
import { Props } from "./types"
import { GridContent } from "./style"
import { colors } from "styles"

const GridCards = ({ ...props }: Props) => {
	return (
		<>
			<Text
				kind='title'
				fontSize={"22px"}
				fontWeight={500}
				color={`${colors.white}`}
        mb={2}>
				{props.headerTitle}
			</Text>
			<GridContent {...props}>{props.children}</GridContent>
		</>
	)
}

export { GridCards }
