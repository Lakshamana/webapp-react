import styled from "styled-components"
import { Box } from "@chakra-ui/react"

export const Title = styled(Box)`
	font-size: 18px;
	padding: 16px;
	height: 75px;
	width: 100%;

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`