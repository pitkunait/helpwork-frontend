import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from '../../store/reducers/RootReducer';
import thunk from 'redux-thunk';

function render(
    ui:any,
    {
        initialState,
        store = createStore(rootReducer, applyMiddleware(thunk)),
        ...renderOptions
    }:any = {}
) {
    function Wrapper({ children }:any) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
