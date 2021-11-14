import React from "react";
import './component.css'

function timeTable(){
    return(
      <div className="table-container">
        <div className="heading"> Section C</div>
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
          <td>Maths</td>
          <td>IT Workshop</td>
          <td>Analog</td>
          <td></td>
          <td>Digital</td>
          <td>SDP</td>
          <td>SDP</td>
          <td>Project(App Dev)</td>
          
        </tr>
        <tr>
        <td>TUESDAY</td>
          <td>TRW</td>
          <td>Math</td>
          <td>DS</td>
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