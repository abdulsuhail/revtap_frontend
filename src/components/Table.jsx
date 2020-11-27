import React from "react"
import { Table as _Table } from "antd"
import styled from "styled-components"
import { array, oneOf } from "prop-types"

const StyledTable = styled(_Table)`
	position: relative;
    border-radius: 6px;
    padding-left : 20px;
    padding-right : 20px;
`

export default function Table(props) {
	return <StyledTable {...props} size={props.size || "small"} />
}

Table.propTypes = {
	dataSource: array.isRequired,
	columns: array.isRequired,
	size: oneOf(["small", "default", "middle"])
}

Table.defaultProps = {
	dataSource: [],
	columns: [],
	size: "small"
}
