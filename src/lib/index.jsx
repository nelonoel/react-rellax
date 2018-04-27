import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Rellax from 'rellax'

export default class Parallax extends PureComponent {
	componentDidMount() {
		if (this.el) {
			const { centered, horizontal, onMove } = this.props
			this.rellax = new Rellax(this.el, {
				centered,
				horizontal,
				callback: onMove
			})
		}
	}

	componentWillUnmount() {
		if (this.rellax) {
			this.rellax.destroy()
		}
	}

	render() {
		const { children, className, percentage, speed, zIndex } = this.props

		return (
			<div
				className={className}
				ref={el => { this.el = el }}
				data-rellax-percentage={percentage}
				data-rellax-speed={speed}
				data-rellax-zindex={zIndex}
			>
				{children}
			</div>
		)
	}
}

Parallax.propTypes = {
	centered: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
	horizontal: PropTypes.bool,
	onMove: PropTypes.func,
	percentage: PropTypes.number,
	speed: PropTypes.number,
	zIndex: PropTypes.number
}

Parallax.defaultProps = {
	centered: false,
	children: null,
	className: null,
	horizontal: false,
	onMove: null,
	percentage: 0,
	speed: 0,
	zIndex: 0
}
