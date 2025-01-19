import { News } from "./News"

export const Article = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] flex-none mb-[60px] md:w-[350px] md:mb-0 ">
      <h1 className="text-SoftOrange text-4xl font-bold">New</h1>

        <News 
          title='Hydrogen VS Electric Cars'
          text='Will hydrogen-fueled cars ever catch up to EVs?'
        />

        <News 
          title='The Downsides of AI Artistry'
          text='What are the possible adverse effects of on-demand AI image generation?'
        />

        <News 
          title='Is VC Funding Drying Up?'
          text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
        />
    </aside>
  )
}