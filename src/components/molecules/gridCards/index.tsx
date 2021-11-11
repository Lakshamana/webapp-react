import { Text } from "components"
import { useThemeStore } from "services/stores/theme"
import { Props } from "./types"
import { GridContent } from "./style"
import { colors } from "styles"

const GridCards = ({ ...props }: Props) => {
	const { colorMode } = useThemeStore()
	return (
		<>
			<Text
				kind='title'
				fontSize={"22px"}
				fontWeight={500}
				color={colors.generalText[colorMode]}
        mb={2}>
				{props.headerTitle}
			</Text>
			<GridContent {...props}>{props.children}</GridContent>
		</>
	)
}

export { GridCards }
