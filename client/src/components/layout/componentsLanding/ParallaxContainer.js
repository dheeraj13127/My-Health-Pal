import React, { Component } from 'react';
import health12 from '../../../images/health12.jpeg'
import health13 from '../../../images/health13.jpg'
import '../Landing.css'
import {Parallax} from 'react-parallax'
class ParallaxContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            height:'',
            bmi:'',
            weight:''
        }
        this.onChange=this.onChange.bind(this)
        this.onButtonClick=this.onButtonClick.bind(this)
    }
    componentDidMount(){
        const M=window.M
        // const el=window.el
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            var el=document.querySelectorAll('.tabs')
            var e=document.querySelectorAll('#tabs-swipe-demo')
            var instances = M.Parallax.init(elems, {});
            var instance = M.Tabs.init(el, {});
            var instance=M.Tabs.init(e,{
                swipeable:true
            })
          });
     
    }
    onChange(e){ 
         this.setState({ [e.target.name]: e.target.value})
    }
    onButtonClick(){
        
        const {weight,height}=this.state
        let HEIGHT=height/100
        let value=weight/(HEIGHT*HEIGHT).toFixed(2)
        this.setState({
            bmi:value,
            height:"",
            weight:""

        })

    }
    render() {
        
        return (
            <div className="parallaxContainer">
             <div className="parallax-container">
                 <Parallax bgImage={health12} strength={500}>
                    <div style={{height:600}}></div>
                 </Parallax>
                {/* <div className="parallax">
                 <img src={health12} alt="" className="responsive-img"/>
                </div> */}
            </div>
            <section className="container section" id="services">
                <div className="row">
                    <div className="col s12 l4">
                        <h2 className="indigo-text text-darken-4">My Health Pal</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugit harum, corporis quaerat dicta iste veritatis dolor fugiat similique est exercitationem? Ad cupiditate esse voluptas labore magnam. A, laborum magni.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores veritatis ipsum provident blanditiis amet ab deleniti odit hic reiciendis, voluptatibus, recusandae impedit, consequatur dolore eum fugiat temporibus maxime vero quis?
                        </p>
                    </div>
                    <div className="col s12 l6 offset-l2">
                        <ul className="tabs" id="tabs-swipe-demo">
                            <li className="tab col s6"><a href="#health1" className="indigo-text text-darken-4">Health1</a></li>
                            <li className="tab col s6"><a href="#health2" className="indigo-text text-darken-4">Health2</a></li>
                        </ul>
                        <div className="col s12" id="health1">
                            <p className="flow-text indigo-text text-darken-4">HEALTH1</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo labore accusamus cupiditate facere, ex voluptatum tempora expedita exercitationem praesentium, assumenda atque accusantium, aut id saepe officia harum illo odit! Nemo.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo labore accusamus cupiditate facere, ex voluptatum tempora expedita exercitationem praesentium, assumenda atque accusantium, aut id saepe officia harum illo odit! Nemo.</p>
                        </div>
                        <div className="col s12" id="health2">
                            <p className="flow-text indigo-text text-darken-4">HEALTH2</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo labore accusamus cupiditate facere, ex voluptatum tempora expedita exercitationem praesentium, assumenda atque accusantium, aut id saepe officia harum illo odit! Nemo.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo labore accusamus cupiditate facere, ex voluptatum tempora expedita exercitationem praesentium, assumenda atque accusantium, aut id saepe officia harum illo odit! Nemo.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="parallax-container">
            <Parallax bgImage={health13} strength={500}>
                    <div style={{height:600}}></div>
                 </Parallax>
                {/* <div className="parallax">
                 <img src={health13} alt="" className="responsive-img"/>
                </div> */}
            </div>
            <section className="section container">
                <div className="row">
                    <div className="col s12 l5">
                        <h2 className="indigo-text text-darken-4">What is BMI?</h2>
                       
                        <p>Body Mass Index (BMI) is a measurement of a person’s weight with respect to his or her height. It is more of an indicator than a direct measurement of a person’s total body fat.
                            BMI, more often than not, correlates with total body fat. This means that as the BMI score increases, so does a person’s total body fat.</p>
                        <br/>
                        <table className="responsive-table"> 
                            <thead>
                                <tr>
                                    <th className="pink-text">BMI catagories</th>
                                    <th className="pink-text">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="indigo-text text-darken-4">Underweight</td>
                                    <td className="indigo-text text-darken-4">Less than 18.5</td>
                                </tr>
                                <tr>
                                    <td className="indigo-text text-darken-4">Normalweight</td>
                                    <td className="indigo-text text-darken-4">18.5-24.9</td>
                                </tr>
                                <tr>
                                    <td className="indigo-text text-darken-4">Overweight</td>
                                    <td className="indigo-text text-darken-4">25-29.9</td>
                                </tr>
                                <tr>
                                    <td className="indigo-text text-darken-4">Obesity</td>
                                    <td className="indigo-text text-darken-4">Greater than 30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col s12 l5 offset-l2">
                        <h4 className="pink-text text-lighten-1" style={{paddingTop:"10px",paddingBottom:"5px"}}>BMI Calculator</h4>
                       
                            <div className="input-field">
                            <input type="number" name="weight" id="weight" onChange={this.onChange} value={this.state.weight}/>
                            <label htmlFor="text">Your Weight in kg</label>
                            </div>
                            <div className="input-field">
                            <input type="number" name="height" id="height" onChange={this.onChange} value={this.state.height}/>
                            <label htmlFor="text">Your Height in cm</label>
                            </div>
                            <br/>
                           <p className="pink-text text-darken-4">Your BMI is:<span className="indigo-text" style={{paddingLeft:"5px"}} >{this.state.bmi}</span></p> 
                            <div className="input-field ">
                            <button className="pink btn waves-effect pulse" type="submit" name="action" onClick={this.onButtonClick}>Submit
                            <i class="material-icons right">send</i>
                            </button>
                                </div>    
                       
                    </div> 
                </div>
            </section>
            </div>
            
        );
    }
}

export default ParallaxContainer; 
