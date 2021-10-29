import React, { useEffect, useState } from "react"
import { Button } from "components"
import { BillboardItemActions } from "../../types"
import { Actions } from "./style"

const ActionsList = ({ actions }: { actions: BillboardItemActions[] }) => {
	const [size, setSize] = useState({
		x: window.innerWidth,
		y: window.innerHeight
	})

	const getSize = () => {
		setSize({
			x: window.innerWidth,
			y: window.innerHeight
		})
	}

	useEffect(() => (window.onresize = getSize), [])

	return (
		<Actions>
			{actions?.map((actions: BillboardItemActions, i: number) => (
				<Button
					key={`Button-${i}`}
					backgroundColor={actions.bgColor}
					borderColor={actions.borderColor}
					iconName={actions.icon}
					color={actions.textColor}
					type='billboard'
					label={actions.label}
					width={size.x >= 768 ? 267 : 145}
					height={size.x >= 768 ? 54 : 40}
					marginRight={size.x >= 768 ? 15 : 15}
				/>
			))}
		</Actions>
	)
}

const MemoizedActionsList = React.memo(ActionsList);

export { MemoizedActionsList }
