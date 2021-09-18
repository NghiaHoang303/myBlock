import './myStory.css'
import readBook from '../../assets/images/book.jpg'
import bookForParents from '../../assets/images/bookForParents.jpg'
import bookForKid from '../../assets/images/bookForKid.jpg'
import bookForBaby from '../../assets/images/bookForBaby.jpg'
import bookForFamily from '../../assets/images/bookForFamily.jpg'

export default function MyStory() {
    return (
        <div className="myStory">
            <div className="title">
                <div className="title__Lg">
                    Blog Story
                </div>
                <div className="title__Sm">
                    From favorite buggies to best child-friendly brunch spots in town, we want to bring you 
                    the best bits of NYC and create a safe space for the joys and woes that come with parenthood. 
                </div>
            </div>
                <div className="storyContent row">
                    <div className="storyContent__left col-6">
                        <div className="card-content">
                            <a href="/my-story/single-story">
                                <img className="img-card" src={bookForParents} alt="" />
                            </a>

                            <span className="card-content__describe">Best Reads For First-Time Parents</span>
                            <span className="card-content__time">2021-04-16  1 min read</span>

                        </div>

                        <div className="card-content">
                            <img className="img-card" src={bookForKid} alt="" />
                            <span className="card-content__describe">5 Ways To Help Your Kid Socializes</span>
                            <span className="card-content__time">2021-04-16  1 min read</span>

                        </div>
                    </div>

                    <div className="storyContent__right col-6">
                    <div className="card-content">
                            <img className="img-card" src={bookForFamily} alt="" />
                            <span className="card-content__describe">Family Weekend Getaway Ideas</span>
                            <span className="card-content__time">2021-04-16  1 min read</span>

                        </div>

                        <div className="card-content">
                            <img className="img-card" src={bookForBaby} alt="" />
                            <span className="card-content__describe">How To Identify A Good Quality Baby Dummy</span>
                            <span className="card-content__time">2021-04-16  1 min read</span>

                        </div>
                    </div>
                </div>
          
        </div>
    )
}
