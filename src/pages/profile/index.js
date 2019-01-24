import React, { Component } from 'react';
import './index.css';
import Fade from 'react-reveal/Fade';

import Navbar from '../../components/Navbar/index';
import RotateName from '../../components/RotateName/index';
import Hobbies from '../../components/Hobbies/index';
import Footer from '../../components/Footer/index';



class Profile extends Component {
    render() {
      return (
        <div className="profileWrapper">
          <Navbar/>
          <div style={{display:'flex'}}>
            <RotateName/>
            <div className="contentWrapper">
              <Fade bottom>
                <div className="introduction">
                  <p>Ladies and Gentlemen</p>
                  <h1 className="mobileTitle">私は<br className="dpMobile"/>大ゴンド<br className="dpMobile"/><span className="dpMobile">です</span>*</h1>
                  <p>* I am Dai Gondo</p>
                </div>
              </Fade>
              <Fade bottom cascade>
                <div className="biography">
                
                  <div className="biographyWrapper">
                    <h2>Biography/en<br/>-</h2>
                    <h3>Dai Gondo</h3>
                    <p>Bonjour, my name is Dai Gondo. I am a French & Japanese creative multidisciplinary designer with a special love for illustration and fashion, currently based in Tokyo. I take my inspiration from urban settings, exotic flowers and beautiful sky tones.<br/>As far back as I can remember I have always been drawing a lot. Today, I am happy to have turned my passion into a job. <br/>Merci</p>
                  </div>
                  
                  
                  <div className="biographyWrapper">
                    <h2>Biography/jp<br/>-</h2>
                    <h3 style={{lineHeight:'20px', fontFamily:'NotoSansJP'}}>大ゴンド</h3>
                    <p style={{fontFamily:'NotoSansJP'}}>ボンジュール、僕の名前は大ゴンド。僕はフランスと日本のマルチクリエートデザイナー。今は東京をベースとしてイラストとアート全般に関わっている。僕のインスピレーションの元は都会、エキゾチックな植物そして美しい空の色。。。思い出すと小さい頃から絵をいっぱい描いてきた。そして今このパッションを仕事にできて僕は幸せだ。</p>
                  </div>
                  
                  
                  <div className="biographyWrapper">
                    <h2>Biography/fr<br/>-</h2>
                    <h3>Dai Gondo</h3>
                    <p>Bonjour, mon nom est Dai Gondo. <br/>Je suis graphiste polyvalent franco japonais avec une affinité particulière pour la mode et l’illustration.  <br/>Mes inspirations proviennent de la culture urbaine, des fleurs exotiques et des nuances de dégradés du ciel.  <br/>Aussi loin que je me souvienne, j'ai toujours dessiné et créé. Aujourd’hui je suis heureux d’avoir fait de ma passion mon métier. <br/>Merci</p>
                  </div>
                  
                </div>
              </Fade>
              <Fade bottom>
                <Hobbies/>
              </Fade>
              <Fade bottom cascade>
                <div className="socialNetworks">
                  <h2>Network</h2>
                  <div className="transitionColor">
                    <a href="https://www.instagram.com/thisisdai" target="_blank" rel="noopener noreferrer"><p data-hover="Instagram">Instagram</p></a>
                    <a href="https://twitter.com/Dai05057114" target="_blank" rel="noopener noreferrer"><p data-hover="Twitter">Twitter</p></a>
                    <a href="https://www.linkedin.com/in/dai-gondo-410b03136" target="_blank" rel="noopener noreferrer"><p data-hover="Linkedin">Linkedin</p></a>
                    <a href="https://www.behance.net/daigondo" target="_blank" rel="noopener noreferrer"><p data-hover="Behance">Behance</p></a>
                  </div>
                </div>
              </Fade>
              <Fade bottom cascade>
                <div className="contact">
                  <h2>Get in touch</h2>
                  <p>Let's keep in touch! If you would like to collaborate or just say "hello", feel free to <a href="mailto:daigondo@gmail.com">write me an email</a>. <img src={require('../../img/victoryHand.png')} alt="victory-hand"/></p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="credit">
                  <p>This website was designed by Dai Gondo <br/>and developed by <a href="mailto:pauldevaublanc@gmail.com">Paul de Vaublanc</a> in exchange of milk chocolate.</p>
                </div>
              </Fade>
            </div>
          </div>
          <Footer/>
        </div>
      )
    }
}

export default Profile;
