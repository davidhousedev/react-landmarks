import React from 'react'
import ReactDom from 'react-dom'
import Main from './components/Main'

const App = () => {
  return (
    <>
      <Main
        render={({ labelledByTargetId }) => (
          <>
            <h2 id={labelledByTargetId}>Main section with no funny business</h2>
            <p>aria-labelledby is managed within the Main component.</p>
          </>
        )}
      />
      <Main
        as={Div}
        render={({ labelledByTargetId }) => (
          <>
            <h2 id={labelledByTargetId}>
              The component can be customized with as
            </h2>
            <p>Div role main woop woop</p>
          </>
        )}
      />
    </>
  )
}

const Div: React.FC = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)

ReactDom.render(<App />, document.getElementById('app'))
