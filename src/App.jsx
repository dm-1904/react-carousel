
import './App.css'

const nick1 = "https://s.yimg.com/ny/api/res/1.2/Jfa032SBaNLjzg_E_JXCqA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d99454ecd37d214296091b98de896aef"
const nick2 = "https://external-preview.redd.it/Nquj5ynECTrkspLrvh9KcMq7_A2oqWsJA_svsQziCW8.jpg?auto=webp&s=46315cf9895a4165469e7ed9b95e2ffc08c90958"
const nick3 = "https://cdn.mos.cms.futurecdn.net/8fd2c275eb8bce82bac709da24304625-320-80.jpg"
const nick4 = "https://imgix.ranker.com/list_img_v2/2993/2502993/original/wtf-nicolas-cage-stories-u1?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720"
const nick5 = "https://www.looper.com/img/gallery/the-most-paused-nicolas-cage-movie-moments/intro-1595447851.jpg"
const nick6 = "https://ih1.redbubble.net/image.3454625978.1995/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
const nick7 = "https://i.pinimg.com/474x/cb/ac/d9/cbacd9a236b7241164ee9a1b437280a7.jpg"
const nick8 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRShdyfLmy0gnp2uVPjTgOg-6ty-UDNHVzDQ&s"
const nick9 = "https://i.pinimg.com/474x/59/9c/e4/599ce440de3c22567f55b43c04e3b7c3.jpg"
const nick10 = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/John_Travolta_1997.jpg/170px-John_Travolta_1997.jpg"

const images = [
  {
    title: "nick1",
    image: "https://s.yimg.com/ny/api/res/1.2/Jfa032SBaNLjzg_E_JXCqA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d99454ecd37d214296091b98de896aef",
    description: "This is the first image of the slide"
  },
  {
    title: "nick2",
    image: "https://external-preview.redd.it/Nquj5ynECTrkspLrvh9KcMq7_A2oqWsJA_svsQziCW8.jpg?auto=webp&s=46315cf9895a4165469e7ed9b95e2ffc08c90958",
    description: "This is the second image of the slide"
  },
  {
    title: "nick3",
    image: "https://cdn.mos.cms.futurecdn.net/8fd2c275eb8bce82bac709da24304625-320-80.jpg",
    description: "The third image! Can I get an Amen?!"
  },
  {
    title: "nick4",
    image: "https://imgix.ranker.com/list_img_v2/2993/2502993/original/wtf-nicolas-cage-stories-u1?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720",
    description: "The explosive fourth image!"
  },
  {
    title: "nick5",
    image: "https://www.looper.com/img/gallery/the-most-paused-nicolas-cage-movie-moments/intro-1595447851.jpg",
    description: "The 5th image is smokin!"
  },
  {
    title: "nick6",
    image: "https://ih1.redbubble.net/image.3454625978.1995/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    description: "How did this pic of John Travolta get in here?!?!?!"
  },
  {
    title: "nick7",
    image: "https://i.pinimg.com/474x/cb/ac/d9/cbacd9a236b7241164ee9a1b437280a7.jpg",
    description: "Hi :)"
  },
  {
    title: "nick8",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRShdyfLmy0gnp2uVPjTgOg-6ty-UDNHVzDQ&s",
    description: "Nick and his friend."
  },
  {
    title: "nick9",
    image: "https://i.pinimg.com/474x/59/9c/e4/599ce440de3c22567f55b43c04e3b7c3.jpg",
    description: "The 9th pic of this slide"
  },
  {
    title: "nick10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/John_Travolta_1997.jpg/170px-John_Travolta_1997.jpg",
    description: "Nick Cage in a white tux."
  },
]

function App() {

  return (
    <>
      <div className="carousel">
        <div className="image-container">
          <img src={nick10} alt="" />
          <h3>Some Title</h3>
          <p>This is some description about this image</p>
        </div>
        <div className="controls">
          <button>Next</button>
          <button>Previous</button>
        </div>
      </div>
    </>
  )
}

export default App
