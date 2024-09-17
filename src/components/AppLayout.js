import React from 'react'
import Header from './Header';
import Body from './Body';

const AppLayout = () => {

    return (
        <div className='app'>
            <Header />
            <Body />
            {/* 
                Header
                Body
                Footer
            */}
        </div>
    )
}

export default AppLayout;