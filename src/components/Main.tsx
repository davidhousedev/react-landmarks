import React from 'react'
import { shortId } from '../utils/component'

const Main: React.FC<{
  render: (arg0: { labelledByTargetId: string }) => JSX.Element
  as?: typeof React.Component | React.FC
  'aria-labelledby'?: string
}> = ({
  render,
  as,
  children,
  'aria-labelledby': ariaLabelledBy,
  ...props
}) => {
  if (children) {
    console.warn(
      'Received children to a component that does not support components ' +
        'passed as children. Use the render prop instead.'
    )
  }

  const labelledByTargetId = React.useMemo<string>(
    () => ariaLabelledBy || shortId(),
    [ariaLabelledBy]
  )

  const componentOrFunction = render
  const ComponentOverride = as

  if (ComponentOverride) {
    return (
      <ComponentOverride role="main" {...props}>
        {render({ labelledByTargetId })}
      </ComponentOverride>
    )
  }

  return (
    <main aria-labelledby={labelledByTargetId} {...props}>
      {componentOrFunction({ labelledByTargetId })}
    </main>
  )
}

export default Main
