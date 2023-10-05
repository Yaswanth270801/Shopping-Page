import React from 'react'
import Itemrow from './itemrow'

function Dashboard() {
    return (
        <div>
            <Itemrow  category="Produce" id="produce"/>
            <Itemrow  category="Prepared foods" id="prepared"/>
            <Itemrow  category="Canned foods & soups" id="canned"/>
            <Itemrow  category="Bakery" id="bakery"/>
            <Itemrow  category="Diary & Eggs" id="diary"/>
            <Itemrow  category="Frozen" id="frozen"/>
            <Itemrow  category="Meet & seafood" id="Meet"/>

        </div>
    )
}

export default Dashboard
