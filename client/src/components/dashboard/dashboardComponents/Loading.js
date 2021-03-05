import React from 'react'
import {Link} from 'react-router-dom'
 function Loading() {
    return (
        <div className="center-align">
            <h2 className="pink-text">Loading</h2>
            <div class="preloader-wrapper active">
    <div class="spinner-layer spinner-red-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
        <button><Link to="/dashboard">GO BACK</Link></button>
        
        </div>
    )
}
export default Loading