// Libraries
import React, {Component, MouseEvent} from 'react'

// Components
import {Icon} from '../../Icon/Icon'
import {ButtonBase} from '../../Button/Base/ButtonBase'

// Types
import {
  IconFont,
  ButtonType,
  ComponentSize,
  ComponentColor,
  ComponentStatus,
  ButtonShape,
} from '../../../Types'

// Styles
import '../DropdownButton.scss'

interface Props {
  /** Function to be called on click of dropdown button */
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  /** Button status state default, loading, or disabled */
  status: ComponentStatus
  /** Button color */
  color: ComponentColor
  /** Button size */
  size: ComponentSize
  /** Toggles button highlighted active state */
  active: boolean
  /** Icon to be displayed to the left of text or in place of text */
  icon?: IconFont
  /** Text to be displayed on hover tooltip */
  title?: string
  /** Test ID for Integration Tests */
  testID: string
}

export class DropdownButton extends Component<Props> {
  public static defaultProps = {
    color: ComponentColor.Default,
    size: ComponentSize.Small,
    status: ComponentStatus.Default,
    active: false,
    testID: 'dropdown--button',
  }

  public render() {
    const {
      onClick,
      children,
      title,
      icon,
      testID,
      active,
      size,
      color,
    } = this.props
    return (
      <ButtonBase
        shape={ButtonShape.StretchToFit}
        className="dropdown--button"
        onClick={onClick}
        status={this.status}
        titleText={title}
        type={ButtonType.Button}
        testID={testID}
        active={active}
        color={color}
        size={size}
      >
        {!!icon && <Icon glyph={icon} className="dropdown--icon" />}
        <span className="dropdown--selected">{children}</span>
        <Icon glyph={IconFont.CaretDown} className="dropdown--caret" />
      </ButtonBase>
    )
  }

  private get status(): ComponentStatus {
    const {status} = this.props

    const isDisabled = [
      ComponentStatus.Disabled,
      ComponentStatus.Error,
    ].includes(status)

    return isDisabled ? ComponentStatus.Disabled : ComponentStatus.Default
  }
}