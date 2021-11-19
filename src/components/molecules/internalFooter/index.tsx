import { Link } from "@chakra-ui/react"
import { Logo, Text } from "components/atoms"
import { useTranslation } from "react-i18next"
import { BoxFooter, FooterItems, TextFooter } from "./style"

const InternalFooter = () => {
	const { t } = useTranslation()
	return (
		<BoxFooter display={"flex"} alignItems={"center"}>
			<FooterItems width={1} py={20}>
				<TextFooter>
					<Link to='' fontSize={[16]}>
						{t("common.terms")}
					</Link>
					<Text mx={1} fontSize={[16]}>
						&
					</Text>
					<Link to='' fontSize={[16]}>
						{t("common.privacy")}
					</Link>
				</TextFooter>
				<Logo
					alignItems={"center"}
					justifyContent={"right"}
					marginLeft={['none', 'none', 'auto']}
					mb={[4, 4, 0, 0]}
					width={161}
					height={44}
				/>
			</FooterItems>
		</BoxFooter>
	)
}

export { InternalFooter };
