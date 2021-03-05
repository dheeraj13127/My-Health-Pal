import React, { Component } from 'react';
import '../Landing.css'
import health1 from '../../../images/health1.jpg'
import health7 from '../../../images/health7.jpg'
import health9 from '../../../images/health9.jpg'
class PhotoSection extends Component {
    componentDidMount(){
        const M=window.M
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems, {});
          });
    }
    render() {
        return (
            <section className="container section photoSection">
                <div className="row">
                    <div className="col s12 l4">
                        <img src={health1} alt="" className="responsive-img materialboxed z-depth-3"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h2 className="indigo-text text-darken-4">Health</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit repellat, eum beatae atque quae magni hic, porro accusantium consequuntur nesciunt reprehenderit quo quibusdam ullam amet molestias obcaecati officia quam!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 push-l7 offset-l1">
                        <img src={health9} alt="" className="responsive-img materialboxed z-depth-3"/>
                    </div>
                    <div className="col s12 l6 pull-l5 right-align offset-l1">
                        <h2 className="indigo-text text-darken-4">Health</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit repellat, eum beatae atque quae magni hic, porro accusantium consequuntur nesciunt reprehenderit quo quibusdam ullam amet molestias obcaecati officia quam!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4">
                        <img src={health7} alt="" className="responsive-img materialboxed z-depth-3"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h2 className="indigo-text text-darken-4">Health</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit repellat, eum beatae atque quae magni hic, porro accusantium consequuntur nesciunt reprehenderit quo quibusdam ullam amet molestias obcaecati officia quam!</p>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col s12 l4 push-l7 offset-l1">
                        <img src={health9} alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 pull-l5 right-align offset-l1">
                        <h2 className="indigo-text text-darken-4">Health</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit repellat, eum beatae atque quae magni hic, porro accusantium consequuntur nesciunt reprehenderit quo quibusdam ullam amet molestias obcaecati officia quam!</p>
                    </div>
                </div> */}
            </section>
        );
    }
}

export default PhotoSection;
