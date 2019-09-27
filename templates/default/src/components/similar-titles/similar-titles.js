import { Component, h } from 'splay'
import '@css/components/similar-titles.less'

import SimilarTitleItem from './title-item'

const titles = [
  {
    title: 'Casa de Papel',
    year: '2012',
    rating: '16',
    duration: '2h 1min',
    season: '1',
    image: 'https://cdn-media.rtl.fr/cache/-fY1QZHTV_lwMNE66VgpRA/880v587-0/online/image/2018/0522/7793491491_le-celebre-gang-de-la-casa-de-papel.jpg',
    work: 'To do',
    episode: '10',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Casa de Papel',
    year: '2012',
    rating: '16',
    duration: '2h 1min',
    season: '1',
    image: 'https://cdn-media.rtl.fr/cache/-fY1QZHTV_lwMNE66VgpRA/880v587-0/online/image/2018/0522/7793491491_le-celebre-gang-de-la-casa-de-papel.jpg',
    work: 'To do',
    episode: '10',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Casa de Papel',
    year: '2012',
    rating: '16',
    duration: '2h 1min',
    season: '1',
    image: 'https://cdn-media.rtl.fr/cache/-fY1QZHTV_lwMNE66VgpRA/880v587-0/online/image/2018/0522/7793491491_le-celebre-gang-de-la-casa-de-papel.jpg',
    work: 'To do',
    episode: '10',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

class SimilarTitles extends Component {
  current = 0

  init () {
    this.titles = titles
    this.parent = {
      title: 'L\'enquête the international',
      year: '2009',
      rating: '16',
      duration: '1h 58min'
    }
  }

  onKeyUp () {
    this.current = this.current ? this.current - 1 : 0

    this.moveToTitle(this.current)
  }

  onKeyDown () {
    this.current = this.current < this.titles.length - 1 ? this.current + 1 : this.titles.length - 1

    console.log(this.current)

    this.moveToTitle(this.current)
  }

  moveToTitle (currentIndex) {
    const titleListElement = document.querySelector('.similar-titles__right ul')

    titleListElement.style.transform = `translate(0, -${currentIndex * 180}px)`
  }

  render () {
    return (
      <div className="similar-titles">
        <div className="similar-titles__left">
          <div className="similar-titles__parent">
            <h2 className="similar-titles__parent-title">
              {this.parent.title}
            </h2>
            <div className="similar-titles__parent-infos-props">
              {this.parent.year} {this.parent.rating}+ {this.parent.duration}
            </div>
          </div>
          <div className="similar-titles__title">
            <div className="similar-titles__title-label">
              Titres similaires
            </div>
            <div className="similar-titles__title-nb">
              {this.titles.length} titres
            </div>
          </div>
        </div>
        <div className="similar-titles__right">
          <div className="similar-titles__focus"></div>
          <ul>
            {
              this.titles.map((title, index) =>
                <SimilarTitleItem
                  key={index}
                  parent={this}
                  data={title}
                />
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default SimilarTitles
