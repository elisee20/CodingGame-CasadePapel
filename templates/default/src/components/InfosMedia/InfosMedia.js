import { Component, h } from 'splay'
import '@css/components/InfosMedia/InfosMedia.less'

class InfosMedia extends Component {
  /* init ({ postData }) {
    this.data = postData.data
  } */

  render () {
    return (
      <div className="infosMedia">
        <h1 className="infosMedia__title">La Casa de Papel</h1>

        <div className="infosMedia__metas">
          <span>2019</span>
          <span className="infosMedia__csa">16+</span>
          <span>1 h 58 min</span>
          <span className="infosMedia__resolution">HD</span>
          <span className="infosMedia__resolution">5.1</span>
        </div>

        <p className="infosMedia__description">
          Le Professeur recrute une jeune braqueuse et sept autres criminels
        en vue d'un cambriolage grandiose ciblant la Maison royale de la Monnaie d'Espagne.
        </p>

        <div className="infosMedia__cast">
          <div className="infosMedia__actors">Distribution :
            <ul>
              <li>Úrsula Corberó,</li>
              <li>Álvaro Morte,</li>
              <li>Pedro Alonso</li>
            </ul>
          </div>
          <p className="infosMedia__director">Réalisateur : Alex Pina</p>
          <ul className="infosMedia__tags">
            <li>Suspense,</li>
            <li>palpitant</li>
          </ul>
        </div>

      </div>
    )
  }
}

export default InfosMedia
