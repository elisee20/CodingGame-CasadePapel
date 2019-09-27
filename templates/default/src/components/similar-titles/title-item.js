import { Component, h } from 'splay'

class SimilarTitleItem extends Component {
  render () {
    const { title, image, year, rating, duration, synopsis } = this.data
    return <li className="similar-titles-item">
      <div className="similar-titles-item__img">
        <img src={image} />
      </div>
      <div className="similar-titles-item__infos">
        <h3 className="similar-titles-item__infos-title">{title}</h3>
        <div className="similar-titles-item__infos-props">
          {year} {rating}+ {duration}
        </div>
        <div className="similar-titles-item__infos-synopsis">
          {synopsis}
        </div>
      </div>
    </li>
  }
}

export default SimilarTitleItem
