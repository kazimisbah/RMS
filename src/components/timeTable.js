import React from "react";
import {Link} from "@reach/router";

import './component.css'

function timeTable(){
    return(
      <div className="table-container">
        <div className="view-table">
        <Link to={`/`}>
            Log Out
            </Link>
        </div>
        <div className="table-heading"> Section B</div>
        <table>
        <tr>
          <th className="tableHeader">Day</th>
          <th className="tableHeader">09:30-10:20</th>
          <th className="tableHeader">10:30-11:20</th>
          <th className="tableHeader">11:30-12:20</th>
          <th className="tableHeader">BREAK</th>
          <th className="tableHeader">01:10-02:00</th>
          <th className="tableHeader">02:10-03:00</th>
          <th className="tableHeader">03:10-04:00</th>
          <th className="tableHeader">04:10-05:00</th>
        </tr>
        <tr>
          <td>MONDAY</td>
          <td>Maths <br></br> (PP)</td>
          <td>IT Workshop <br></br>(SDS)<br></br> https://us02web.zoom.us/j/2925829711?pwd=eXVLdlIrbGoxRDkwN3Z3bEpLemExZz09</td>
          <td>Analog<br></br>(GP) </td>
          <td></td>
          <td>Digital<br></br>(MD)</td>
          <td>SDP<br></br>(RJP)</td>
          <td>SDP<br></br>(RJP)</td>
          <td>Project(App Dev)</td>
          
        </tr>
        <tr>
        <td>TUESDAY</td>
          <td>TRW<br></br>(BG)</td>
          <td>Math<br></br>(AKDS)<br></br> https://zoom.us/j/93619737685?pwd=VXdJMm96QVNqNFRlT3JXZFN3OURZZz09
</td>
          <td>DS<br></br>(APM)<br></br>https://meet.google.com/bzp-owwf-ozr </td>
          <td></td>
          <td>Analog</td>
          <td>Workshop Lab </td>
          <td>Workshop Lab </td>
          <td>MOOCS2</td>
        </tr>
        <tr>
        <td>THURSDAY</td>
          <td>TRW</td>
          <td>Analog</td>
          <td>Digital</td>
          <td></td>
          <td>Placement</td>
          <td>Placement </td>
          <td>MOOCS1</td>
          <td>Mentoring</td>
        </tr>
        <tr>
        <td>FRIDAY</td>
          <td>Digital</td>
          <td>SDP</td>
          <td>SDP</td>
          <td></td>
          <td>DS</td>
          <td>Digital Lab</td>
          <td>Digital Lab </td>
          <td>Mentoring</td>
        </tr>
  
      </table>
      </div>
    )
}

export default timeTable