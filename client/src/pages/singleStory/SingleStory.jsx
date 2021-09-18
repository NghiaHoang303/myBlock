import './singleStory.css'
import book from '../../assets/images/story-bg.jpg'
import bookForParents from '../../assets/images/bookForParents.jpg'
export default function SingleStory() {
    return (
        <div className="singleStory">
            <div className="singleStory__title">
                <div className="singleStory__title-Lg">
                Best Reads For First-Time Parents
                </div>
                <span className="singleStory__title-Sm">
                    2021-04-16  1 min read
                </span>
            </div>

            <div className="singleStory__description">
                <div>
                    When it comes to blogs, you want to make sure that you’re not too general in your body copy.
                If you’re thinking about a content marketing strategy, the better you tailor your content to your audience,
                the better engagement you will get. 
                Having a niche helps, because that way you can really narrow down not just your content, 
                but also your own expertise. This will make it easier to brand your business and yourself.
                </div>
            

                <img className='singleStory__img' src= {bookForParents} />
                <div>
                How you’re marketing your blog is another thing that’s important to remember when you’re starting out with your blog. 
                While it takes a while to start dominating the search engines and search results, 
                introducing a mailing list to announce the newest blog post is a great idea to drive traffic to your website and blog.
                Harness the power of social media, too: not only can you easily talk back and forth with your audience, 
                but it’s also a great tool for marketing. 
                When you’re setting up your social media accounts, check that you can use the same or 
                a very similar version of your website’s domain as your account handle. This will make 
                it easier for your audience to remember you, no matter which platform you’re using.
                </div>  
            </div>
        </div>
    )
}
