import styled from "styled-components"
import { Box, Flex } from "@chakra-ui/react"

export const Title = styled(Box)`
	font-size: 1rem;
	padding: 16px;
	height: 70px;
	width: 100%;

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`

export const Views = styled(Flex)`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	word-break: break-all;
	height: 1rem;
	text-align: end;
`