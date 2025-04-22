import React from 'react'
import Item from '../Item';

const Home = () => {
  return (
    <section>
      <div className="gap-8 mx-auto grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))]  max-w-7xl p-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
}

export default Home