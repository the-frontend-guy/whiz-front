import React, { useState, useEffect } from "react"
import "./hands.css"
import "./component.css"

const Hands = ({ windowEl }) => {
  const handRef = React.useRef(null)
  let rtime = 5

  const [hand, setHand] = useState()

  useEffect(() => {
    setHand(handRef.current)
  }, [])
  if (hand && windowEl.width > 767) {
    const rpolygons = document.querySelectorAll(".single-hand svg polygon")

    if (windowEl.scrollY > hand.offsetTop - windowEl.height / 2) {
      rpolygons.forEach(e => {
        setTimeout(() => {
          e.classList.add("visible")
        }, (rtime += 5))
      })
    }
  }

  return (
    <div className="flex flex-col" ref={handRef}>
      <div className="r-hand-container single-hand w-7/12 self-end">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 926 520"
          style={{ enableBackground: `new 0 0 926 520` }}
          xmlSpace="preserve"
        >
          <style></style>

          <g>
            <g>
              <polygon
                className="st407"
                points="801.8,74.6 764.1,75.4 748.2,110.1 		"
              />
              <polygon
                className="st407"
                points="850.9,130.5 809.8,143.1 797.4,167.9 		"
              />
              <polygon
                className="st407"
                points="859.5,165 863.6,133.3 826,163.5 		"
              />
              <polygon
                className="st407"
                points="872.5,75.4 807,124.8 855.5,110.7 		"
              />
              <polygon
                className="st407"
                points="768.4,135.9 807,124.8 820.6,84.6 		"
              />
              <polygon
                className="st407"
                points="826.4,37.6 812.8,54.8 848.5,46.3 		"
              />
            </g>
            <polygon
              className="st408"
              points="403.2,187.4 416.8,174.2 395.2,176.9 	"
            />
            <polygon
              className="st407"
              points="315.8,185.6 318,190.7 361.9,200.6 	"
            />
            <polygon
              className="st407"
              points="341.8,187.5 315.8,185.6 361.9,200.6 	"
            />
            <polygon
              className="st409"
              points="311.7,192.9 302.7,203.6 361.9,200.6 	"
            />
            <polygon
              className="st409"
              points="302.7,203.6 273.4,205.7 280.8,218.2 	"
            />
            <polygon
              className="st410"
              points="340.5,211.9 302.7,203.6 280.8,218.2 	"
            />
            <polygon
              className="st411"
              points="361.9,200.6 302.7,203.6 340.5,211.9 	"
            />
            <polygon
              className="st409"
              points="165.9,247.2 171.9,252.1 193.1,251.3 	"
            />
            <polygon
              className="st412"
              points="395.2,176.9 366.7,180.5 403.2,187.4 	"
            />
            <polygon
              className="st412"
              points="416.8,174.2 401.6,167.5 395.2,176.9 	"
            />
            <polygon
              className="st407"
              points="412.1,200.7 341.8,187.5 361.9,200.6 	"
            />
            <polygon
              className="st413"
              points="366.7,180.5 341.8,187.5 412.1,200.7 	"
            />
            <polygon
              className="st412"
              points="403.2,187.4 366.7,180.5 412.1,200.7 	"
            />
            <polygon
              className="st414"
              points="318,190.7 311.7,192.9 361.9,200.6 	"
            />
            <polygon
              className="st415"
              points="142.2,265.4 169.1,264.1 160.7,257.2 	"
            />
            <polygon
              className="st407"
              points="280.8,218.2 273.4,205.7 257,229.2 	"
            />
            <polygon
              className="st413"
              points="169.1,264.1 196.5,264.5 160.7,257.2 	"
            />
            <polygon
              className="st416"
              points="182,241.2 165.9,247.2 193.1,251.3 	"
            />
            <polygon
              className="st410"
              points="160.7,257.2 196.5,264.5 171.9,252.1 	"
            />
            <polygon
              className="st417"
              points="207.8,275.4 226.8,270.1 213.6,268.6 	"
            />
            <polygon
              className="st409"
              points="273.4,205.7 244.4,210.8 257,229.2 	"
            />
            <polygon
              className="st411"
              points="244.4,210.8 214.8,202.5 257,229.2 	"
            />
            <polygon
              className="st410"
              points="213.6,268.6 177.9,281.4 207.8,275.4 	"
            />
            <polygon
              className="st418"
              points="198.9,282.8 205.3,287.7 207.8,275.4 	"
            />
            <polygon
              className="st419"
              points="177.9,281.4 177.3,281.6 198.9,282.8 207.8,275.4 	"
            />
            <polygon
              className="st408"
              points="401.6,167.5 366.7,180.5 395.2,176.9 	"
            />
            <polygon
              className="st415"
              points="484.2,220.3 501.8,262.4 523.5,217.5 	"
            />
            <polygon
              className="st420"
              points="440.5,276.9 501.8,262.4 484.2,220.3 	"
            />
            <polygon className="st409" points="587.1,190 523.5,217.5 550,265.1 	" />
            <polygon
              className="st413"
              points="409.1,265.8 440.5,276.9 484.2,220.3 	"
            />
            <polygon
              className="st418"
              points="501.8,262.4 526.7,311.2 550,265.1 	"
            />
            <polygon
              className="st419"
              points="523.5,217.5 501.8,262.4 550,265.1 	"
            />
            <polygon
              className="st420"
              points="463.6,207.3 409.1,265.8 484.2,220.3 	"
            />
            <polygon
              className="st413"
              points="373.5,255.3 409.1,265.8 398.1,231.1 	"
            />
            <polygon
              className="st407"
              points="398.1,231.1 409.1,265.8 463.6,207.3 	"
            />
            <polygon
              className="st413"
              points="523.5,217.5 477.3,194.8 484.2,220.3 	"
            />
            <polygon
              className="st421"
              points="440.4,197.2 416.8,174.2 403.2,187.4 	"
            />
            <polygon
              className="st407"
              points="477.3,194.8 463.6,207.3 484.2,220.3 	"
            />
            <polygon
              className="st419"
              points="526.7,311.2 593.9,282.3 550,265.1 	"
            />
            <polygon
              className="st409"
              points="527.5,163.4 440.4,197.2 477.3,194.8 	"
            />
            <polygon
              className="st413"
              points="543.6,181.5 527.5,163.4 477.3,194.8 	"
            />
            <polygon
              className="st418"
              points="593.9,282.3 602.7,237.5 550,265.1 	"
            />
            <polygon
              className="st407"
              points="412.1,200.7 440.4,197.2 403.2,187.4 	"
            />
            <polygon
              className="st421"
              points="523.5,217.5 543.6,181.5 477.3,194.8 	"
            />
            <polygon
              className="st422"
              points="463.6,207.3 440.4,197.2 412.1,200.7 	"
            />
            <polygon
              className="st422"
              points="477.3,194.8 440.4,197.2 463.6,207.3 	"
            />
            <polygon className="st420" points="550,265.1 602.7,237.5 587.1,190 	" />
            <polygon
              className="st415"
              points="602.7,237.5 659.2,199.4 587.1,190 	"
            />
            <polygon
              className="st421"
              points="587.1,190 543.6,181.5 523.5,217.5 	"
            />
            <polygon
              className="st415"
              points="636.6,142.2 543.6,181.5 587.1,190 	"
            />
            <polygon
              className="st420"
              points="659.2,199.4 636.6,142.2 587.1,190 	"
            />
            <polygon
              className="st413"
              points="136.4,223.1 129.3,212.1 108.4,228.9 	"
            />
            <polygon className="st422" points="87.5,221 93.3,235.3 108.4,228.9 	" />
            <polygon
              className="st407"
              points="110.6,246 149.9,250.1 133.4,239.3 	"
            />
            <polygon
              className="st419"
              points="171.9,252.1 196.5,264.5 193.1,251.3 	"
            />
            <polygon
              className="st413"
              points="108.4,228.9 110.6,246 133.4,239.3 	"
            />
            <polygon
              className="st411"
              points="165.9,247.2 149.9,250.1 171.9,252.1 	"
            />
            <polygon
              className="st423"
              points="133.4,239.3 149.9,250.1 165.9,247.2 	"
            />
            <polygon
              className="st409"
              points="129.3,212.1 106.4,214.6 108.4,228.9 	"
            />
            <polygon
              className="st419"
              points="133.4,239.3 136.4,223.1 108.4,228.9 	"
            />
            <polygon
              className="st419"
              points="165.9,247.2 136.4,223.1 133.4,239.3 	"
            />
            <polygon className="st412" points="106.4,214.6 87.5,221 108.4,228.9 	" />
            <polygon
              className="st407"
              points="159.5,226.6 136.4,223.1 165.9,247.2 	"
            />
            <polygon
              className="st415"
              points="370.2,228.7 373.5,255.3 398.1,231.1 	"
            />
            <polygon
              className="st415"
              points="171.9,252.1 149.9,250.1 149.4,250.3 160.7,257.2 	"
            />
            <polygon
              className="st424"
              points="180.5,269.4 176.9,281.6 196.5,264.5 	"
            />
            <polygon
              className="st409"
              points="149.4,250.3 125.2,258.4 160.7,257.2 	"
            />
            <polygon
              className="st417"
              points="213.6,268.6 196.5,264.5 176.9,281.6 177.9,281.4 	"
            />
            <polygon
              className="st425"
              points="169.1,264.1 180.5,269.4 196.5,264.5 	"
            />
            <polygon
              className="st413"
              points="177.9,281.4 176.9,281.6 177.3,281.6 	"
            />
            <polygon
              className="st413"
              points="176.9,281.6 176.9,281.8 177.3,281.6 	"
            />
            <polygon
              className="st417"
              points="159.6,274.1 180.5,269.4 169.1,264.1 	"
            />
            <polygon
              className="st410"
              points="182.7,223.4 159.5,226.6 165.9,247.2 	"
            />
            <polygon
              className="st412"
              points="125.2,258.4 99.5,273.8 142.2,265.4 	"
            />
            <polygon
              className="st412"
              points="160.7,257.2 125.2,258.4 142.2,265.4 	"
            />
            <polygon
              className="st415"
              points="99.5,273.8 133.5,278.9 142.2,265.4 	"
            />
            <polygon
              className="st413"
              points="133.5,278.9 159.6,274.1 142.2,265.4 	"
            />
            <polygon
              className="st409"
              points="142.2,265.4 159.6,274.1 169.1,264.1 	"
            />
            <polygon className="st410" points="93.3,235.3 110.6,246 108.4,228.9 	" />
            <polygon
              className="st426"
              points="256.6,264.9 267.6,259.3 267.5,259.3 242.9,264.8 	"
            />
            <polygon
              className="st423"
              points="196.5,264.5 213.6,268.6 227.1,259.3 	"
            />
            <polygon
              className="st418"
              points="210,256.6 196.5,264.5 227.1,259.3 	"
            />
            <polygon
              className="st427"
              points="226.8,270.1 256.6,264.9 242.9,264.8 	"
            />
            <polygon
              className="st426"
              points="213.6,268.6 226.8,270.1 242.9,264.8 	"
            />
            <polygon
              className="st420"
              points="193.1,251.3 196.5,264.5 210,256.6 	"
            />
            <polygon
              className="st423"
              points="227.1,259.3 213.6,268.6 242.9,264.8 	"
            />
            <polygon
              className="st425"
              points="211.9,238.2 193.1,251.3 225.4,253.6 	"
            />
            <polygon className="st426" points="242.9,264.8 240,258 227.1,259.3 	" />
            <polygon
              className="st412"
              points="225.4,253.6 193.1,251.3 210,256.6 	"
            />
            <polygon
              className="st415"
              points="177.3,281.6 176.9,281.8 177.4,289.5 198.9,282.8 	"
            />
            <polygon className="st423" points="240,258 225.4,253.6 227.1,259.3 	" />
            <polygon
              className="st419"
              points="227.1,259.3 225.4,253.6 210,256.6 	"
            />
            <polygon className="st413" points="201.5,211 182.7,223.4 182,241.2 	" />
            <polygon
              className="st411"
              points="214.8,202.5 201.5,211 211.9,238.2 	"
            />
            <polygon
              className="st428"
              points="242.9,264.8 267.5,259.3 267,259.3 240,258 	"
            />
            <polygon
              className="st419"
              points="211.9,238.2 201.5,211 193.1,251.3 	"
            />
            <polygon className="st419" points="193.1,251.3 201.5,211 182,241.2 	" />
            <polygon
              className="st413"
              points="182,241.2 182.7,223.4 165.9,247.2 	"
            />
            <polygon
              className="st421"
              points="257,229.2 214.8,202.5 234.4,229.5 	"
            />
            <polygon
              className="st415"
              points="234.4,229.5 214.8,202.5 211.9,238.2 	"
            />
            <polygon
              className="st415"
              points="247.1,244.6 257,229.2 234.4,229.5 	"
            />
            <polygon className="st429" points="240,258 243.3,255.5 225.4,253.6 	" />
            <polygon
              className="st430"
              points="267,259.3 257.1,258 243.3,255.5 240,258 	"
            />
            <polygon
              className="st417"
              points="243.3,255.5 247.1,244.6 234.4,229.5 	"
            />
            <polygon
              className="st425"
              points="225.4,253.6 243.3,255.5 234.4,229.5 	"
            />
            <polygon
              className="st419"
              points="234.4,229.5 211.9,238.2 225.4,253.6 	"
            />
            <polygon
              className="st423"
              points="264.2,328.1 285.8,314 269.4,314.5 	"
            />
            <polygon
              className="st423"
              points="239.8,337.6 247,344.4 253.6,325.7 	"
            />
            <polygon
              className="st424"
              points="247,344.4 264.2,328.1 253.6,325.7 	"
            />
            <polygon
              className="st424"
              points="253.6,325.7 264.2,328.1 269.4,314.5 	"
            />
            <polygon
              className="st431"
              points="269.4,314.5 285.8,314 279.4,301.7 	"
            />
            <polygon
              className="st431"
              points="279.4,301.7 285.8,314 301.3,294.3 	"
            />
            <polygon className="st426" points="223,332.6 226,347.9 239.8,337.6 	" />
            <polygon
              className="st413"
              points="334.8,477.8 347.9,467.7 325.8,460.9 	"
            />
            <polygon
              className="st423"
              points="212.1,328.8 211.7,338.4 223,332.6 	"
            />
            <polygon
              className="st413"
              points="235.2,314.7 212.1,328.8 228.5,324.2 	"
            />
            <polygon className="st414" points="211.7,338.4 226,347.9 223,332.6 	" />
            <polygon className="st432" points="285.8,314 320,292.2 301.3,294.3 	" />
            <polygon className="st426" points="226,347.9 247,344.4 239.8,337.6 	" />
            <polygon
              className="st432"
              points="310.2,286.6 320,292.2 330.4,280.2 	"
            />
            <polygon
              className="st426"
              points="691.6,195.1 714.6,229.8 722.9,197.3 	"
            />
            <polygon
              className="st420"
              points="714.6,229.8 765.7,195.5 722.9,197.3 	"
            />
            <polygon className="st407" points="764.1,75.4 714.9,68 705,98.6 	" />
            <polygon
              className="st415"
              points="795.3,135.6 722,158.6 765.7,195.5 	"
            />
            <polygon
              className="st414"
              points="722.9,197.3 722,158.6 691.6,195.1 	"
            />
            <polygon
              className="st413"
              points="765.7,195.5 722,158.6 722.9,197.3 	"
            />
            <polygon
              className="st429"
              points="330.4,280.2 345.8,278.3 314.1,273.4 	"
            />
            <polygon
              className="st418"
              points="236.6,324.3 235.2,314.7 228.5,324.2 	"
            />
            <polygon
              className="st433"
              points="320,292.2 345.8,278.3 330.4,280.2 	"
            />
            <polygon
              className="st432"
              points="301.3,294.3 320,292.2 310.2,286.6 	"
            />
            <polygon className="st409" points="797.3,43.9 714.9,68 764.1,75.4 	" />
            <polygon
              className="st428"
              points="314.1,273.4 345.8,278.3 294.1,262.7 	"
            />
            <polygon
              className="st420"
              points="228.5,324.2 212.1,328.8 223,332.6 	"
            />
            <polygon
              className="st431"
              points="246.7,312.4 269.4,314.5 265.7,301.1 	"
            />
            <polygon
              className="st423"
              points="236.6,324.3 253.6,325.7 246.7,312.4 	"
            />
            <polygon
              className="st426"
              points="269.4,314.5 279.4,301.7 265.7,301.1 	"
            />
            <polygon
              className="st426"
              points="253.6,325.7 269.4,314.5 246.7,312.4 	"
            />
            <polygon
              className="st425"
              points="246.7,312.4 235.2,314.7 236.6,324.3 	"
            />
            <polygon
              className="st425"
              points="265.7,301.1 279.4,301.7 272.1,287 	"
            />
            <polygon
              className="st417"
              points="223,332.6 239.8,337.6 236.6,324.3 	"
            />
            <polygon
              className="st432"
              points="294.1,262.7 273.5,276.8 294.2,269 	"
            />
            <polygon
              className="st417"
              points="294.2,269 273.5,276.8 314.1,273.4 	"
            />
            <polygon
              className="st426"
              points="239.8,337.6 253.6,325.7 236.6,324.3 	"
            />
            <polygon
              className="st424"
              points="314.1,273.4 294.1,262.7 294.2,269 	"
            />
            <polygon
              className="st426"
              points="279.4,301.7 301.3,294.3 291.2,283.3 	"
            />
            <polygon
              className="st419"
              points="228.5,324.2 223,332.6 236.6,324.3 	"
            />
            <polygon
              className="st432"
              points="272.1,287 279.4,301.7 291.2,283.3 	"
            />
            <polygon
              className="st434"
              points="291.2,283.3 273.5,276.8 272.1,287 	"
            />
            <polygon
              className="st418"
              points="272.1,287 262.6,288.5 265.7,301.1 	"
            />
            <polygon
              className="st418"
              points="273.5,276.8 262.6,288.5 272.1,287 	"
            />
            <polygon
              className="st426"
              points="301.3,294.3 310.2,286.6 291.2,283.3 	"
            />
            <polygon
              className="st418"
              points="265.7,301.1 249.3,298.3 246.7,312.4 	"
            />
            <polygon
              className="st414"
              points="249.3,298.3 235.2,314.7 246.7,312.4 	"
            />
            <polygon
              className="st414"
              points="262.6,288.5 249.3,298.3 265.7,301.1 	"
            />
            <polygon
              className="st424"
              points="310.2,286.6 330.4,280.2 302.8,277.6 	"
            />
            <polygon
              className="st431"
              points="291.2,283.3 310.2,286.6 302.8,277.6 	"
            />
            <polygon
              className="st435"
              points="302.8,277.6 273.5,276.8 291.2,283.3 	"
            />
            <polygon
              className="st426"
              points="314.1,273.4 273.5,276.8 302.8,277.6 	"
            />
            <polygon
              className="st428"
              points="330.4,280.2 314.1,273.4 302.8,277.6 	"
            />
            <polygon className="st419" points="81.1,301.3 86,311.8 98.3,290.2 	" />
            <polygon className="st421" points="64.3,224.4 74.7,233.4 71.3,220.2 	" />
            <polygon
              className="st413"
              points="149.2,250.2 149.4,250.3 149.9,250.1 	"
            />
            <polygon
              className="st412"
              points="108.2,264.3 99.5,273.8 125.2,258.4 	"
            />
            <polygon className="st422" points="71.3,220.2 74.7,233.4 87.5,221 	" />
            <polygon
              className="st415"
              points="255.5,192.5 244.4,210.8 273.4,205.7 	"
            />
            <polygon
              className="st407"
              points="677,105.1 636.6,142.2 679.5,126.9 	"
            />
            <polygon className="st409" points="74.7,233.4 93.3,235.3 87.5,221 	" />
            <polygon className="st407" points="74.1,311.4 86,311.8 81.1,301.3 	" />
            <polygon
              className="st420"
              points="401.3,218 370.2,228.7 398.1,231.1 	"
            />
            <polygon
              className="st420"
              points="98.3,290.2 133.5,278.9 99.5,273.8 	"
            />
            <polygon className="st420" points="60.9,301.2 74.1,311.4 81.1,301.3 	" />
            <polygon className="st410" points="114.4,300 133.5,278.9 98.3,290.2 	" />
            <polygon className="st419" points="86,311.8 114.4,300 98.3,290.2 	" />
            <polygon className="st409" points="401.3,218 412.1,200.7 370,212.5 	" />
            <polygon
              className="st408"
              points="412.1,200.7 361.9,200.6 370,212.5 	"
            />
            <polygon
              className="st415"
              points="463.6,207.3 412.1,200.7 401.3,218 	"
            />
            <polygon
              className="st415"
              points="361.9,200.6 340.5,211.9 370,212.5 	"
            />
            <polygon
              className="st413"
              points="350.3,227.7 370.2,228.7 370,212.5 	"
            />
            <polygon
              className="st407"
              points="340.5,211.9 350.3,227.7 370,212.5 	"
            />
            <polygon
              className="st421"
              points="280.8,218.2 325.8,228.4 340.5,211.9 	"
            />
            <polygon
              className="st409"
              points="296.9,233.1 325.8,228.4 280.8,218.2 	"
            />
            <polygon
              className="st419"
              points="478.8,338.8 526.7,311.2 501.8,262.4 	"
            />
            <polygon
              className="st407"
              points="398.1,231.1 463.6,207.3 401.3,218 	"
            />
            <polygon
              className="st407"
              points="325.8,228.4 350.3,227.7 340.5,211.9 	"
            />
            <polygon
              className="st413"
              points="679.5,126.9 636.6,142.2 659.2,199.4 	"
            />
            <polygon
              className="st409"
              points="334.6,445.5 351.8,444.6 371.4,404.3 	"
            />
            <polygon
              className="st415"
              points="458.5,397.5 502.5,376.8 445.3,381.3 	"
            />
            <polygon
              className="st413"
              points="448.2,354.1 430,369.5 445.3,381.3 	"
            />
            <polygon
              className="st407"
              points="406.3,416.4 458.5,397.5 371.4,404.3 	"
            />
            <polygon
              className="st421"
              points="409.9,384.9 458.5,397.5 445.3,381.3 	"
            />
            <polygon
              className="st407"
              points="430,369.5 409.9,384.9 445.3,381.3 	"
            />
            <polygon
              className="st409"
              points="419.3,433.4 458.5,397.5 406.3,416.4 	"
            />
            <polygon
              className="st407"
              points="371.4,404.3 458.5,397.5 409.9,384.9 	"
            />
            <polygon
              className="st419"
              points="385.5,439.7 419.3,433.4 406.3,416.4 	"
            />
            <polygon
              className="st407"
              points="347.9,467.7 351.8,444.6 325.8,460.9 	"
            />
            <polygon
              className="st435"
              points="325.8,460.9 351.8,444.6 334.6,445.5 	"
            />
            <polygon
              className="st413"
              points="351.8,444.6 385.5,439.7 406.3,416.4 	"
            />
            <polygon
              className="st415"
              points="371.4,404.3 351.8,444.6 406.3,416.4 	"
            />
            <polygon className="st419" points="160,310.8 173.4,319.6 176,303.6 	" />
            <polygon
              className="st419"
              points="173.4,319.6 189.1,316.8 176,303.6 	"
            />
            <polygon className="st412" points="55.3,291.5 60.9,301.2 75.9,291.3 	" />
            <polygon
              className="st413"
              points="445.3,381.3 502.5,376.8 448.2,354.1 	"
            />
            <polygon className="st415" points="44.6,304.1 54.4,312.1 60.9,301.2 	" />
            <polygon className="st407" points="54.4,312.1 74.1,311.4 60.9,301.2 	" />
            <polygon
              className="st409"
              points="150.4,327.9 161.3,334.5 160,310.8 	"
            />
            <polygon
              className="st409"
              points="161.3,334.5 173.4,319.6 160,310.8 	"
            />
            <polygon className="st409" points="138.2,351.2 157.4,349 137,341.7 	" />
            <polygon className="st419" points="157.4,349 161.3,334.5 137,341.7 	" />
            <polygon
              className="st415"
              points="141.9,327.9 137,341.7 150.4,327.9 	"
            />
            <polygon
              className="st413"
              points="137,341.7 161.3,334.5 150.4,327.9 	"
            />
            <polygon className="st413" points="370,212.5 370.2,228.7 401.3,218 	" />
            <polygon
              className="st436"
              points="157.4,349 182.7,334.6 161.3,334.5 	"
            />
            <polygon
              className="st424"
              points="182.7,334.6 204.2,313.1 189.1,316.8 	"
            />
            <polygon
              className="st423"
              points="214,297.2 232.3,292.8 233.6,280.5 	"
            />
            <polygon
              className="st426"
              points="204.2,313.1 232.3,292.8 214,297.2 	"
            />
            <polygon
              className="st426"
              points="138.2,351.2 160.9,355.8 157.4,349 	"
            />
            <polygon
              className="st431"
              points="157.4,349 160.9,355.8 175.5,347.9 	"
            />
            <polygon
              className="st431"
              points="173.4,319.6 182.7,334.6 189.1,316.8 	"
            />
            <polygon className="st407" points="137,341.7 127,349.2 138.2,351.2 	" />
            <polygon className="st407" points="122.9,339.2 127,349.2 137,341.7 	" />
            <polygon
              className="st423"
              points="138.2,351.2 140.4,359.9 160.9,355.8 	"
            />
            <polygon
              className="st407"
              points="127,349.2 140.4,359.9 138.2,351.2 	"
            />
            <polygon
              className="st428"
              points="161.3,334.5 182.7,334.6 173.4,319.6 	"
            />
            <polygon
              className="st423"
              points="175.5,347.9 182.7,334.6 157.4,349 	"
            />
            <polygon className="st412" points="158.8,301.2 147.2,316 160,310.8 	" />
            <polygon className="st408" points="160,310.8 147.2,316 150.4,327.9 	" />
            <polygon className="st421" points="176,303.6 158.8,301.2 160,310.8 	" />
            <polygon
              className="st411"
              points="141.9,327.9 122.9,339.2 137,341.7 	"
            />
            <polygon
              className="st422"
              points="150.4,327.9 147.2,316 141.9,327.9 	"
            />
            <polygon
              className="st420"
              points="177.4,289.5 158.8,301.2 176,303.6 	"
            />
            <polygon
              className="st412"
              points="147.2,316 122.9,339.2 141.9,327.9 	"
            />
            <polygon
              className="st431"
              points="232.3,292.8 252.4,275.3 233.6,280.5 	"
            />
            <polygon
              className="st435"
              points="294.1,262.7 345.8,278.3 332.3,264.8 	"
            />
            <polygon
              className="st410"
              points="319,244.5 294.1,262.7 345.2,251.4 	"
            />
            <polygon
              className="st415"
              points="345.2,251.4 294.1,262.7 332.3,264.8 	"
            />
            <polygon
              className="st419"
              points="345.2,251.4 345.8,278.3 376.8,281.7 	"
            />
            <polygon
              className="st409"
              points="332.3,264.8 345.8,278.3 345.2,251.4 	"
            />
            <polygon
              className="st410"
              points="296.2,246.6 294.1,262.7 319,244.5 	"
            />
            <polygon
              className="st424"
              points="243.6,272.9 252.4,275.3 273.9,263.5 	"
            />
            <polygon
              className="st420"
              points="267.7,259.3 267.8,259.4 294.1,262.7 296.2,246.6 	"
            />
            <polygon
              className="st423"
              points="233.6,280.5 252.4,275.3 243.6,272.9 	"
            />
            <polygon
              className="st426"
              points="252.4,275.3 294.1,262.7 273.9,263.5 	"
            />
            <polygon
              className="st433"
              points="273.9,263.5 294.1,262.7 267.8,259.4 	"
            />
            <polygon className="st415" points="35.7,292.1 35.1,301.1 44.6,304.1 	" />
            <polygon
              className="st409"
              points="176.9,281.8 176.7,281.9 158.8,301.2 177.4,289.5 	"
            />
            <polygon className="st418" points="56.1,323.5 83.3,324.7 54.4,312.1 	" />
            <polygon className="st412" points="60.9,301.2 35.7,292.1 44.6,304.1 	" />
            <polygon className="st409" points="35.1,301.1 39.9,316.7 44.6,304.1 	" />
            <polygon className="st420" points="39.9,316.7 56.1,323.5 54.4,312.1 	" />
            <polygon className="st407" points="44.6,304.1 39.9,316.7 54.4,312.1 	" />
            <polygon
              className="st410"
              points="345.8,278.3 400.4,305.3 376.8,281.7 	"
            />
            <polygon className="st437" points="108.2,264.3 74,274.9 99.5,273.8 	" />
            <polygon className="st409" points="99.5,273.8 74,274.9 98.3,290.2 	" />
            <polygon
              className="st422"
              points="115.9,252.4 92.9,264.7 74,274.9 108.2,264.3 	"
            />
            <polygon className="st437" points="74,274.9 35.7,292.1 55.3,291.5 	" />
            <polygon className="st412" points="98.3,290.2 74,274.9 75.9,291.3 	" />
            <polygon className="st412" points="75.9,291.3 74,274.9 55.3,291.5 	" />
            <polygon className="st407" points="55.3,291.5 35.7,292.1 60.9,301.2 	" />
            <polygon
              className="st426"
              points="133.5,278.9 131.2,299.6 141.3,288.6 	"
            />
            <polygon
              className="st423"
              points="159.6,274.1 165.5,285.9 180.5,269.4 	"
            />
            <polygon
              className="st427"
              points="133.5,278.9 141.3,288.6 165.5,285.9 	"
            />
            <polygon
              className="st431"
              points="165.5,285.9 141.3,288.6 131.2,299.6 	"
            />
            <polygon
              className="st418"
              points="133.5,278.9 165.5,285.9 159.6,274.1 	"
            />
            <polygon className="st413" points="54.4,312.1 83.3,324.7 74.1,311.4 	" />
            <polygon
              className="st413"
              points="176.9,281.6 176.7,281.9 176.9,281.8 	"
            />
            <polygon
              className="st423"
              points="180.5,269.4 165.5,285.9 176.7,281.9 176.9,281.6 	"
            />
            <polygon
              className="st418"
              points="114.4,300 131.2,299.6 133.5,278.9 	"
            />
            <polygon className="st438" points="83.3,324.7 109,313.3 86,311.8 	" />
            <polygon className="st432" points="74.1,311.4 83.3,324.7 86,311.8 	" />
            <polygon className="st417" points="109,313.3 131.2,299.6 114.4,300 	" />
            <polygon className="st426" points="86,311.8 109,313.3 114.4,300 	" />
            <polygon
              className="st407"
              points="413.7,372.6 390.9,382.6 409.9,384.9 	"
            />
            <polygon
              className="st423"
              points="527.7,388.9 547.7,368.4 502.5,376.8 	"
            />
            <polygon
              className="st424"
              points="474.2,405.3 506.1,391.9 502.5,376.8 	"
            />
            <polygon
              className="st407"
              points="502.5,376.8 547.7,368.4 549.5,329.9 	"
            />
            <polygon
              className="st424"
              points="506.1,391.9 527.7,388.9 502.5,376.8 	"
            />
            <polygon
              className="st423"
              points="549.5,329.9 547.7,368.4 571.6,341.8 	"
            />
            <polygon
              className="st417"
              points="595.8,346.2 641.6,314.4 571.6,341.8 	"
            />
            <polygon
              className="st433"
              points="547.7,368.4 595.8,346.2 571.6,341.8 	"
            />
            <polygon
              className="st428"
              points="401.2,449.3 421,444.8 419.3,433.4 	"
            />
            <polygon
              className="st418"
              points="458.5,397.5 474.2,405.3 502.5,376.8 	"
            />
            <polygon className="st426" points="421,444.8 440.7,427 419.3,433.4 	" />
            <polygon
              className="st418"
              points="386.9,458.5 401.2,449.3 385.5,439.7 	"
            />
            <polygon
              className="st434"
              points="419.3,433.4 440.7,427 458.5,397.5 	"
            />
            <polygon
              className="st428"
              points="440.7,427 474.2,405.3 458.5,397.5 	"
            />
            <polygon
              className="st432"
              points="385.5,439.7 401.2,449.3 419.3,433.4 	"
            />
            <polygon
              className="st439"
              points="698.4,258.2 732.3,233.8 714.6,229.8 	"
            />
            <polygon
              className="st424"
              points="752.7,226.8 778.7,208 765.7,195.5 	"
            />
            <polygon
              className="st413"
              points="732.3,233.8 752.7,226.8 714.6,229.8 	"
            />
            <polygon
              className="st432"
              points="714.6,229.8 752.7,226.8 765.7,195.5 	"
            />
            <polygon
              className="st429"
              points="571.6,341.8 641.6,314.4 653.7,277.6 	"
            />
            <polygon
              className="st419"
              points="376.8,281.7 400.4,305.3 430.2,302.4 	"
            />
            <polygon
              className="st418"
              points="778.7,208 827.3,180.5 765.7,195.5 	"
            />
            <polygon
              className="st428"
              points="681.2,280.4 698.4,258.2 653.7,277.6 	"
            />
            <polygon
              className="st418"
              points="641.6,314.4 681.2,280.4 653.7,277.6 	"
            />
            <polygon
              className="st435"
              points="651.9,237.2 698.4,258.2 691.6,195.1 	"
            />
            <polygon
              className="st424"
              points="691.6,195.1 698.4,258.2 714.6,229.8 	"
            />
            <polygon
              className="st426"
              points="653.7,277.6 698.4,258.2 651.9,237.2 	"
            />
            <polygon
              className="st412"
              points="125.2,258.4 115.9,252.4 108.2,264.3 	"
            />
            <polygon
              className="st413"
              points="430,369.5 413.7,372.6 409.9,384.9 	"
            />
            <polygon
              className="st421"
              points="432.9,353.3 413.7,372.6 430,369.5 	"
            />
            <polygon
              className="st413"
              points="390.9,382.6 379.2,390 355.9,403.4 409.9,384.9 	"
            />
            <polygon
              className="st407"
              points="409.9,384.9 355.9,403.4 371.4,404.3 	"
            />
            <polygon
              className="st409"
              points="448.2,354.1 432.9,353.3 430,369.5 	"
            />
            <polygon
              className="st408"
              points="445.1,332.3 432.9,353.3 472.7,321.4 	"
            />
            <polygon
              className="st425"
              points="430.2,302.4 445.1,332.3 450.1,316.1 	"
            />
            <polygon
              className="st414"
              points="400.4,305.3 445.1,332.3 430.2,302.4 	"
            />
            <polygon
              className="st409"
              points="371.4,404.3 355.9,403.4 334.6,445.5 	"
            />
            <polygon
              className="st407"
              points="472.7,321.4 432.9,353.3 448.2,354.1 	"
            />
            <polygon
              className="st432"
              points="450.1,316.1 445.1,332.3 472.7,321.4 	"
            />
            <polygon
              className="st413"
              points="318.6,453.3 315.7,474 325.8,460.9 	"
            />
            <polygon
              className="st419"
              points="332.8,494.5 354.7,481 347.9,467.7 	"
            />
            <polygon
              className="st434"
              points="354.7,481 371.7,463.5 347.9,467.7 	"
            />
            <polygon
              className="st418"
              points="334.8,477.8 332.8,494.5 347.9,467.7 	"
            />
            <polygon
              className="st432"
              points="321.2,490.1 332.8,494.5 334.8,477.8 	"
            />
            <polygon
              className="st418"
              points="347.9,467.7 371.7,463.5 351.8,444.6 	"
            />
            <polygon
              className="st426"
              points="351.8,444.6 371.7,463.5 385.5,439.7 	"
            />
            <polygon
              className="st432"
              points="371.7,463.5 386.9,458.5 385.5,439.7 	"
            />
            <polygon
              className="st415"
              points="334.6,445.5 318.6,453.3 325.8,460.9 	"
            />
            <polygon
              className="st407"
              points="333.7,427.5 318.6,453.3 334.6,445.5 	"
            />
            <polygon
              className="st413"
              points="315.7,474 321.2,490.1 325.8,460.9 	"
            />
            <polygon
              className="st407"
              points="355.9,403.4 333.7,427.5 334.6,445.5 	"
            />
            <polygon
              className="st413"
              points="325.8,460.9 321.2,490.1 334.8,477.8 	"
            />
            <polygon
              className="st419"
              points="296.2,246.6 319,244.5 296.9,233.1 	"
            />
            <polygon
              className="st409"
              points="448.2,354.1 502.5,376.8 478.8,338.8 	"
            />
            <polygon
              className="st418"
              points="501.8,262.4 472.7,321.4 478.8,338.8 	"
            />
            <polygon
              className="st413"
              points="502.5,376.8 549.5,329.9 478.8,338.8 	"
            />
            <polygon className="st409" points="679.9,85.3 649.9,110.9 677,105.1 	" />
            <polygon
              className="st410"
              points="478.8,338.8 549.5,329.9 526.7,311.2 	"
            />
            <polygon
              className="st420"
              points="526.7,311.2 549.5,329.9 593.9,282.3 	"
            />
            <polygon
              className="st419"
              points="409.1,265.8 430.2,302.4 440.5,276.9 	"
            />
            <polygon
              className="st435"
              points="549.5,329.9 571.6,341.8 593.9,282.3 	"
            />
            <polygon
              className="st420"
              points="376.8,281.7 430.2,302.4 409.1,265.8 	"
            />
            <polygon
              className="st422"
              points="373.5,255.3 376.8,281.7 409.1,265.8 	"
            />
            <polygon
              className="st432"
              points="450.1,316.1 472.7,321.4 501.8,262.4 	"
            />
            <polygon
              className="st418"
              points="440.5,276.9 450.1,316.1 501.8,262.4 	"
            />
            <polygon
              className="st432"
              points="430.2,302.4 450.1,316.1 440.5,276.9 	"
            />
            <polygon
              className="st426"
              points="651.9,237.2 691.6,195.1 659.2,199.4 	"
            />
            <polygon className="st409" points="748.2,110.1 705,98.6 679.5,126.9 	" />
            <polygon
              className="st409"
              points="149.4,250.3 149.2,250.2 115.9,252.4 125.2,258.4 	"
            />
            <polygon className="st407" points="679.5,126.9 705,98.6 677,105.1 	" />
            <polygon
              className="st409"
              points="722,158.6 748.2,110.1 679.5,126.9 	"
            />
            <polygon className="st407" points="705,98.6 714.9,68 677,105.1 	" />
            <polygon className="st408" points="714.9,68 679.9,85.3 677,105.1 	" />
            <polygon
              className="st431"
              points="653.7,277.6 651.9,237.2 593.9,282.3 	"
            />
            <polygon
              className="st413"
              points="659.2,199.4 691.6,195.1 679.5,126.9 	"
            />
            <polygon
              className="st417"
              points="571.6,341.8 653.7,277.6 593.9,282.3 	"
            />
            <polygon
              className="st435"
              points="593.9,282.3 651.9,237.2 602.7,237.5 	"
            />
            <polygon
              className="st407"
              points="345.2,251.4 376.8,281.7 373.5,255.3 	"
            />
            <polygon
              className="st419"
              points="602.7,237.5 651.9,237.2 659.2,199.4 	"
            />
            <polygon
              className="st415"
              points="472.7,321.4 448.2,354.1 478.8,338.8 	"
            />
            <polygon
              className="st424"
              points="226.8,270.1 243.6,272.9 256.6,264.9 	"
            />
            <polygon
              className="st424"
              points="205.3,287.7 233.6,280.5 216.7,280.1 	"
            />
            <polygon
              className="st423"
              points="233.6,280.5 243.6,272.9 216.7,280.1 	"
            />
            <polygon
              className="st413"
              points="267.8,259.4 267.7,259.3 267.6,259.3 	"
            />
            <polygon
              className="st428"
              points="243.6,272.9 273.9,263.5 256.6,264.9 	"
            />
            <polygon
              className="st423"
              points="256.6,264.9 273.9,263.5 267.8,259.4 267.6,259.3 	"
            />
            <polygon
              className="st426"
              points="216.7,280.1 243.6,272.9 226.8,270.1 	"
            />
            <polygon
              className="st419"
              points="205.3,287.7 177.4,289.5 196.5,300.2 	"
            />
            <polygon
              className="st407"
              points="177.4,289.5 176,303.6 196.5,300.2 	"
            />
            <polygon
              className="st418"
              points="214,297.2 205.3,287.7 196.5,300.2 	"
            />
            <polygon
              className="st432"
              points="204.2,313.1 214,297.2 196.5,300.2 	"
            />
            <polygon
              className="st432"
              points="205.3,287.7 214,297.2 233.6,280.5 	"
            />
            <polygon
              className="st414"
              points="176,303.6 189.1,316.8 196.5,300.2 	"
            />
            <polygon
              className="st426"
              points="189.1,316.8 204.2,313.1 196.5,300.2 	"
            />
            <polygon
              className="st410"
              points="325.8,228.4 345.2,251.4 350.3,227.7 	"
            />
            <polygon
              className="st415"
              points="296.9,233.1 319,244.5 325.8,228.4 	"
            />
            <polygon
              className="st413"
              points="267.6,259.3 267.7,259.3 267.5,259.3 	"
            />
            <polygon
              className="st409"
              points="198.9,282.8 177.4,289.5 205.3,287.7 	"
            />
            <polygon
              className="st410"
              points="267.7,259.3 296.2,246.6 296.9,233.1 	"
            />
            <polygon
              className="st421"
              points="370.2,228.7 345.2,251.4 373.5,255.3 	"
            />
            <polygon
              className="st410"
              points="350.3,227.7 345.2,251.4 370.2,228.7 	"
            />
            <polygon
              className="st413"
              points="319,244.5 345.2,251.4 325.8,228.4 	"
            />
            <polygon
              className="st413"
              points="267.5,259.3 267.7,259.3 267,259.3 	"
            />
            <polygon
              className="st410"
              points="280.8,218.2 267.7,259.3 296.9,233.1 	"
            />
            <polygon
              className="st426"
              points="243.3,255.5 257.1,258 267,259.3 267.7,259.3 247.1,244.6 	"
            />
            <polygon
              className="st435"
              points="257,229.2 267.7,259.3 280.8,218.2 	"
            />
            <polygon
              className="st414"
              points="247.1,244.6 267.7,259.3 257,229.2 	"
            />
            <polygon
              className="st411"
              points="691.6,195.1 722,158.6 679.5,126.9 	"
            />
            <polygon
              className="st412"
              points="142.9,202.3 115.3,202.7 129.3,212.1 	"
            />
            <polygon
              className="st409"
              points="136.4,223.1 142.9,202.3 129.3,212.1 	"
            />
            <polygon
              className="st409"
              points="159.5,226.6 142.9,202.3 136.4,223.1 	"
            />
            <polygon
              className="st422"
              points="129.3,212.1 115.3,202.7 106.4,214.6 	"
            />
            <polygon className="st408" points="100,206.2 82.4,207 87.5,221 	" />
            <polygon
              className="st413"
              points="115.3,202.7 100,206.2 106.4,214.6 	"
            />
            <polygon className="st409" points="106.4,214.6 100,206.2 87.5,221 	" />
            <polygon
              className="st407"
              points="182.7,223.4 175,196.1 159.5,226.6 	"
            />
            <polygon className="st407" points="201.5,211 175,196.1 182.7,223.4 	" />
            <polygon className="st408" points="203.6,190.1 175,196.1 201.5,211 	" />
            <polygon
              className="st412"
              points="161.5,205.9 142.9,202.3 159.5,226.6 	"
            />
            <polygon
              className="st412"
              points="175,196.1 142.9,202.3 161.5,205.9 	"
            />
            <polygon
              className="st409"
              points="159.5,226.6 175,196.1 161.5,205.9 	"
            />
            <polygon className="st413" points="64.3,224.4 67,238.9 74.7,233.4 	" />
            <polygon className="st413" points="74.7,233.4 84.2,247.1 93.3,235.3 	" />
            <polygon className="st407" points="87.5,221 82.4,207 71.3,220.2 	" />
            <polygon className="st419" points="93.3,235.3 84.2,247.1 110.6,246 	" />
            <polygon className="st420" points="84.2,247.1 115.9,252.4 110.6,246 	" />
            <polygon
              className="st408"
              points="214.8,202.5 203.6,190.1 201.5,211 	"
            />
            <polygon
              className="st425"
              points="149.2,250.1 149.2,250.2 149.9,250.1 110.6,246 115.9,252.4 149.2,250.2 	"
            />
            <polygon className="st407" points="67,238.9 84.2,247.1 74.7,233.4 	" />
            <polygon className="st421" points="63.4,210.3 59.3,213.9 71.3,220.2 	" />
            <polygon className="st437" points="82.4,207 63.4,210.3 71.3,220.2 	" />
            <polygon className="st409" points="71.3,220.2 59.3,213.9 64.3,224.4 	" />
            <polygon className="st409" points="57.1,228.6 67,238.9 64.3,224.4 	" />
            <polygon className="st411" points="59.3,213.9 57.1,228.6 64.3,224.4 	" />
            <polygon
              className="st409"
              points="255.5,192.5 244.9,182.3 244.4,210.8 	"
            />
            <polygon
              className="st422"
              points="366.7,180.5 338.7,179.1 341.8,187.5 	"
            />
            <polygon
              className="st412"
              points="408.5,161 383.2,163.9 401.6,167.5 	"
            />
            <polygon
              className="st421"
              points="466.7,158.6 408.5,161 416.8,174.2 	"
            />
            <polygon
              className="st409"
              points="416.8,174.2 408.5,161 401.6,167.5 	"
            />
            <polygon
              className="st412"
              points="383.2,163.9 338.7,179.1 366.7,180.5 	"
            />
            <polygon
              className="st437"
              points="401.6,167.5 383.2,163.9 366.7,180.5 	"
            />
            <polygon
              className="st415"
              points="440.4,197.2 466.7,158.6 416.8,174.2 	"
            />
            <polygon
              className="st421"
              points="649.9,110.9 597.1,133.2 636.6,142.2 	"
            />
            <polygon
              className="st415"
              points="636.6,142.2 597.1,133.2 543.6,181.5 	"
            />
            <polygon
              className="st409"
              points="597.1,133.2 550.3,142.4 466.7,158.6 527.5,163.4 	"
            />
            <polygon
              className="st422"
              points="527.5,163.4 466.7,158.6 440.4,197.2 	"
            />
            <polygon
              className="st422"
              points="543.6,181.5 597.1,133.2 527.5,163.4 	"
            />
            <polygon
              className="st412"
              points="341.8,187.5 338.7,179.1 315.8,185.6 	"
            />
            <polygon
              className="st407"
              points="263.8,183.6 244.9,182.3 255.5,192.5 	"
            />
            <polygon
              className="st409"
              points="677,105.1 649.9,110.9 636.6,142.2 	"
            />
            <polygon
              className="st411"
              points="287.1,188.4 263.8,183.6 273.4,205.7 	"
            />
            <polygon
              className="st411"
              points="273.4,205.7 263.8,183.6 255.5,192.5 	"
            />
            <polygon
              className="st422"
              points="244.9,182.3 226.7,187.2 244.4,210.8 	"
            />
            <polygon
              className="st412"
              points="244.4,210.8 226.7,187.2 214.8,202.5 	"
            />
            <polygon
              className="st440"
              points="338.7,179.1 287.1,188.4 315.8,185.6 	"
            />
            <polygon
              className="st422"
              points="315.8,185.6 287.1,188.4 318,190.7 	"
            />
            <polygon
              className="st409"
              points="226.7,187.2 203.6,190.1 214.8,202.5 	"
            />
            <polygon
              className="st413"
              points="311.7,192.9 287.1,188.4 302.7,203.6 	"
            />
            <polygon
              className="st413"
              points="318,190.7 287.1,188.4 311.7,192.9 	"
            />
            <polygon
              className="st407"
              points="302.7,203.6 287.1,188.4 273.4,205.7 	"
            />
            <polygon className="st409" points="60.9,301.2 81.1,301.3 75.9,291.3 	" />
            <polygon className="st407" points="75.9,291.3 81.1,301.3 98.3,290.2 	" />
            <polygon
              className="st432"
              points="205.3,287.7 216.7,280.1 207.8,275.4 	"
            />
            <polygon
              className="st427"
              points="207.8,275.4 216.7,280.1 226.8,270.1 	"
            />
            <polygon
              className="st407"
              points="748.2,110.1 764.1,75.4 801.8,74.6 	"
            />
            <polygon
              className="st407"
              points="850.9,130.5 809.8,143.1 797.4,167.9 	"
            />
            <polygon className="st426" points="826,163.5 863.6,133.3 859.5,165 	" />
            <polygon className="st414" points="807,124.8 872.5,75.4 855.5,110.7 	" />
            <polygon className="st409" points="820.6,84.6 807,124.8 768.4,135.9 	" />
            <polygon className="st407" points="826.4,37.6 812.8,54.8 848.5,46.3 	" />
          </g>
          <g>
            <path
              className="st441"
              d="M852.1,29.6c0.1,0.1,0.2,0.2,0.3,0.2c0,0,0.1,0,0.1,0l38.6-9.2c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.1-0.3-0.2-0.4
                 l-23.8-9.4c-0.1-0.1-0.3,0-0.4,0.1l-14.8,18.5c0,0.1-0.1,0.1-0.1,0.2C852,29.5,852,29.5,852.1,29.6z M889.8,20.2l-36.5,8.6l14-17.5
                 L889.8,20.2z"
            />
            <path
              className="st441"
              d="M868,165L802,181.1l0.4-0.8l31.3-63.4c0.1-0.1,0-0.3,0-0.4c0-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2,0
                 l-78.5,24.6l27.9-51.7l57.9-38.3c0.1-0.1,0.2-0.3,0.1-0.4c0-0.2-0.2-0.3-0.4-0.3l-39.8,0.8l35.2-33.4c0.1-0.1,0.1-0.3,0.1-0.4
                 c-0.1-0.1-0.3-0.2-0.4-0.2l-89.1,26c-0.1,0-0.1,0-0.2,0.1L708.4,62c0,0,0,0,0,0l0,0l-32.4,27.8l-57,24l-50.6,10l-90.4,17.6l-63,2.5
                 c0,0,0,0,0,0l0,0l-27.4,3.2c0,0,0,0,0,0l0,0c0,0,0,0,0,0l0,0l-48.1,16.4l-55.8,10.1l-25.1-5.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
                 l0,0L238,167c0,0-0.1,0-0.1,0l-19.7,5.3l-25,3.1c0,0,0,0,0,0l0,0l-30.9,6.5l-34.7,6.6L97.8,189c0,0,0,0,0,0c0,0,0,0,0,0l0,0h0
                 l-16.5,3.8l-19,0.9c0,0,0,0,0,0l0,0l-20.6,3.5c0,0,0,0,0,0c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0l-4.5,4c0,0,0,0,0,0
                 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0l-2.3,15.8c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0
                 c0,0,0,0.1,0,0.1l10.7,11.2c0,0,0.1,0.1,0.1,0.1l18.6,8.9c0,0,0.1,0,0.1,0l33.2,5.6l-13.3,7.1l-10.7,5.7l-20.5,11.1l-41.4,18.6
                 c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
                 c0,0,0,0,0,0l-0.6,9.7c0,0,0,0.1,0,0.1l5.1,16.8c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
                 c0,0,0,0,0,0c0,0,0,0,0.1,0l17.6,7.3c0,0,0.1,0,0.1,0c0,0,0,0,0,0l29.4,1.4c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0
                 c0,0,0,0,0,0l27.8-12.3c0,0,0,0,0,0l0,0l0,0l0,0l24-14.8l37.1-14.8l10.7-3.9l-18.4,19.8c0,0,0,0,0,0l0,0l-12.5,16l-26.2,25
                 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1
                 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l4.4,10.9c0,0,0,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l14.6,11.6
                 c0,0,0.1,0.1,0.2,0.1c0,0,0,0,0,0c0,0,0.1,0,0.1,0l22.1-4.4l0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0l15.8-8.6c0,0,0,0,0,0
                 c0.1,0,0.1-0.1,0.1-0.1l7.8-14.4l0.2-0.2l23-22.9l30.4-21.9c0,0,0,0,0,0l0,0l21.7-19l42.8-12.9l-20.3,14c0,0,0,0,0,0c0,0,0,0,0,0
                 l0,0l0,0L256.9,282l-14.3,10.5c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0l-15.3,17.7l-24.9,15.2c0,0,0,0,0,0c0,0,0,0,0,0
                 c0,0,0,0-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1v0l0,0l0,0l-0.4,10.4v0l0,0l0,0c0,0,0,0.1,0,0.1
                 c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1l15.4,10.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0
                 l22.8-3.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l18.5-17.6l23.3-15.3
                 c0,0,0,0,0,0l37.1-23.6l27.7-15l16,7.9l42.9,21.2l48.1,29l-13,22.4l-20.7,20.7l-24.6,10.8c0,0,0,0,0,0c0,0,0,0,0,0l-37.8,22.5
                 c0,0,0,0,0,0c0,0-0.1,0-0.1,0.1l-24,26.1c0,0,0,0,0,0l0,0l-16.4,27.9c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
                 l-3.1,22.4c0,0.1,0,0.1,0,0.2l6,17.4c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
                 c0,0,0,0,0,0c0,0,0,0,0,0l12.5,4.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0
                 l23.8-14.6l0,0c0,0,0,0,0.1-0.1l18.3-18.9l16.3-5.3c0,0,0.1,0,0.1,0l15.4-9.9l21.4-4.8c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0
                 c0,0,0,0,0,0l21.3-19.3l36.2-23.5l34.4-14.4l23.4-3.2c0,0,0,0,0,0c0.1,0,0.1,0,0.2-0.1c0,0,0,0,0,0c0,0,0,0,0,0l21.5-22.1l52-24.1
                 c0,0,0,0,0,0l0,0l49.6-34.3c0,0,0,0,0,0l0,0l1.7-1.4l41.2-35.4c0,0,0,0,0,0l0,0l18.5-24l13.2-9.5l23.5-16.9l21.9-7.5
                 c0,0,0.1,0,0.1,0l0,0c0,0,0,0,0,0l28.1-20.3l52.6-29.8c0.2-0.1,0.2-0.3,0.2-0.4C868.3,165.1,868.1,165,868,165z M225.5,344.8
                 l-6.6,1.1l13.5-10.1l7.1,6.7L225.5,344.8z M187.4,314.9l-15.9,15.8l6.4-17.5l14.8-3.7L187.4,314.9z M133.6,310.9l10.9-14l0.4,3.2
                 l0.8,6.1l-5.5,2.2l-6.9,2.8L133.6,310.9z M157.8,183.5l3-0.6l-13.2,9.5l-18.2-3.5L157.8,183.5z M394.1,147l19.9-2.3l-6.5,6.2
                 l-17.5-3.4L394.1,147z M834.3,18.4l-34.7,32.9l-51.5-7.7L834.3,18.4z M391.2,465.9l-15.3,5l13.9-23.9l0.6,7.8L391.2,465.9z
                  M217.7,345.9l-2.6-13l-0.5-2.4l6.6,1.9l10.3,3.1l-9.2,6.9L217.7,345.9z M119.4,339.9l1,0.2l-9.8,7.3l-4-9.8L119.4,339.9z
                  M44.6,201.9l4.3,5.4l-11.1-5.8l3.8-3.4L44.6,201.9z M164,182.3l28.8-6.1l-0.6,5.7l-1.6,15.9l-27.4-15.3L164,182.3z M255,171.9
                 l-5.6,6L239,167.8l18.7,1.2L255,171.9z M384.2,150.4L369.6,165l-28.2-1.4l44.9-15.3L384.2,150.4z M415.6,144.6l59.6-2.4l-51.1,15.9
                 l-4.4-7L415.6,144.6z M754.8,141.9l77.9-24.5l-31.5,63.7l-40.3-34L754.8,141.9z M565.2,368.4l-47.4,8.8l49.3-49.3l-1.3,27.6
                 L565.2,368.4z M520.1,393.9l-32.5,13.6l28.9-29.1L520.1,393.9z M318.3,460.7l15.8-7.7l-8.7,15.3l-3.3-3.5L318.3,460.7z
                  M264.7,310.7l16.2-0.4l-21.4,14L264.7,310.7z M258.6,324.7l-10.4-2.4l15.5-11l-3.8,10L258.6,324.7z M246.6,323.6l-6.4,18.4
                 l-7.2-6.7l9.7-8.4L246.6,323.6z M214.4,329.1l-0.3,0.5l-10.4-3.7l15.8-4.4L214.4,329.1z M243.7,292.6l13.2-9.8l3.1,12.5l-9.4-1.6
                 L243.7,292.6z M242.6,266.6l-4.8-1.3l10.4-3.2l17.8-5.5l-19.9,10.9L242.6,266.6z M237.2,270l-9.8,2.7l9.2-7l8.1,2.2L237.2,270z
                  M224.1,286.6l-18.1,4.3l19.2-16.4l0.1-0.1l-0.1,1.2L224.1,286.6z M146.4,354.6l-21.6-4.4l18.3-2.1l1,2L146.4,354.6z M132.2,313.1
                 l0.3,1.3l2.8,10.1l-8.2,0l4.9-11L132.2,313.1z M165.1,273.7l3.5-11.9l15.5-4.7l-5.7,5L165.1,273.7z M50.9,208l11.2-13.2l5.1,14
                 L50.9,208z M89.4,200l-1.3,1.7l-6.3-8.3l15.1-3.5L89.4,200z M287.9,173.9l26.6-2.6l1.8,3.9l0.3,0.8l-1.6-0.1L287.9,173.9z
                  M738.9,65.8l-3.5,10.6l-28.8,6.7l39-38.2L738.9,65.8z M781.1,89.2l-71.8,17.7l26.6-29.7L781.1,89.2z M126.9,325.2l8,0l-12.8,13.2
                 l4.7-13.2L126.9,325.2z M125.4,282.3l-9.9,10.9l2.3-20.4L125.4,282.3z M33.5,285.8l14-0.2l6.4-0.1L39,295.4l-3.1-5.4L33.5,285.8z
                  M59.4,272l18.9,11.8l-22.8,1.1l-2-16.6L59.4,272z M54.2,267.9l1.8-0.1l24.2-1.1l-1.2,16.8l-7.8-4.9L54.2,267.9z M90.3,256.4
                 l1.9-0.7l13-4.6l-22.6,13.5l0.9-1L90.3,256.4z M98.6,242.8l-5-6.1l14.7,1.6l22.8,2.4l-25.3,1.7L98.6,242.8z M248.6,195.9l-10.5,1.8
                 l11.4-18.8l18.4,13.6L248.6,195.9z M451.8,183l88.5-34.4l-51,31.8l-12.9,0.9L451.8,183z M734.7,77.4l-26.2,29.3l-2.5-22.5l27.5-6.4
                 L734.7,77.4z M268.3,255l-15.8,1.2l6.7-3.4l3.4-1.7l2.5,1.7L268.3,255z M185,295.4l-7.4,16.9l-13.3-13.5L185,295.4z M185.5,294.4
                 l-19.3-10.8l22-1.5l6.1-0.4l-5.1,7.2L185.5,294.4z M170.3,273.3l32.7-11.7l-4.7,5.4l-0.7,0.8l-1,0.2L170.3,273.3z M284.7,174.5
                 l24.9,4.5l-9,10.8L284.7,174.5z M356.5,182.3l5.6,3.6l-44.5-14.4l25.1,1.8L356.5,182.3z M344.4,172.9l25.3-7.2l46.2,20.6l-27.4-5.1
                 L344.4,172.9z M475.5,193.1l-1,0.9L451,183.8l37.4-2.5L475.5,193.1z M459.4,311.3l-20.5-14.1l10.6-26.3l5.9,23.9L459.4,311.3z
                  M377.9,246.1l21.8-21.4l4-3.9l11.5,36.3l-31.9-9.4L377.9,246.1z M292.8,253.6l12.9-9.4l12.5-9.1l26.7,7.1L292.8,253.6z
                  M97.5,256.6l11-6.6l7.9,3.2l9.3,3.8l-43,8.5L97.5,256.6z M150.8,237.5l-15.5,2.8l-15.9-10.5L150.8,237.5z M120.9,212.1l30.2,24.7
                 l-33.2-8.1L120.9,212.1z M120.2,211.9l-0.6,3.3l-2.5,13.3l-25.6-10.6l5.9-1.2L120.2,211.9z M146.1,215.6l23.8-3.2l-10,14.2
                 l-7.3,10.3l-5.9-19.1L146.1,215.6z M410.1,173.4l37.5,9.9l-14.5,1.8l-14,1.7l-1.7-2.6L410.1,173.4z M490,307.3l24.3-49.3L491,335.6
                 l-6.2-17.7L490,307.3z M213.9,254.5l5-3.4l15.4,5.4l-28.7,3.7L213.9,254.5z M128.8,256.8l15.4-6.8l2.7-1.2l3,2.4l5.3,4.3
                 L128.8,256.8z M148,248.2l6.1-2.8l4.8-2.2l24.1,12.1l-0.7-0.2L148,248.2z M205.7,190.2l20.4,28l-23.4,9L205.7,190.2z M540.2,204.7
                 l21.1-37.8l45.7,8.9L540.2,204.7z M578.7,291l-35,15.1l5-10l19.5-38.7l46.4,18.1L578.7,291z M497.4,208.8l41.4-2.9l-5.6,11.6
                 L516,253.1L497.4,208.8z M516.5,253.7l22.9-47.4l28,50.4L516.5,253.7z M567.5,257.3L556,280l-13.1,26l-26.3-51.6L567.5,257.3z
                  M608.2,176.6l16.4,50.3l-55.8,29.2L608.2,176.6z M569.9,252.3l-1.9,3.9l-28.1-50.6l67.6-29.2L569.9,252.3z M446.9,224.6l27.7-29.7
                 l21.5,13.6L417.7,256L446.9,224.6z M496.8,209.2l14.7,35l4,9.5l-64.9,15.4L496.8,209.2z M625.2,226.5l-16.5-50.4l76.5,10
                 L625.2,226.5z M366.8,205.5l6.2-4.8l0.2,16.4l-20.1-0.9L366.8,205.5z M332.9,225.5l-6.7-7.9l25.3-0.7l-5.3,24.4L332.9,225.5z
                  M293.9,236.5l0.6-13.6l21.9,11.2l0.5,0.2l-6.5,0.6L293.9,236.5z M408.5,203.2l-1.5,2.4l-32.1-5.7l43.2-12.1L408.5,203.2z
                  M404.3,219.6l3.2-13.3l63.2-10.9L438.9,207L404.3,219.6z M472.2,194.5l-64.3,11l11.1-17.9l43,5.6L472.2,194.5z M325.4,216.9
                 L279,206.3l61.5-6.6L325.4,216.9z M294.3,222l-16.3-15.1l1.7,0.4l43.9,10l-24,3.9L294.3,222z M351.4,216.2l-25.1,0.7l15-17l2,3.2
                 L351.4,216.2z M342.1,199.7l0.2,0l30,0.7L352.2,216l-6-9.6L342.1,199.7z M350.2,199.2l-7.4-0.2l21.7-11.4l8.1,12.1L350.2,199.2z
                  M277,206.8l16.7,15.5l-30.3,27.1l0.5-1.6L277,206.8z M318,234.1l-22.6-11.6l29.6-4.8l-0.7,1.6L318,234.1z M345.5,241.5l-26.8-7.1
                 l7-16.4L345.5,241.5z M373.6,200.5l5,0.9l27.1,4.8L373.9,217l-0.2-14.1L373.6,200.5z M406.7,206.6l-3.2,13.2l-28.3-2.5L406.7,206.6
                 z M473.3,195.3L456,213.9L415.8,257l-11.6-36.6L473.3,195.3z M421.7,187.2l27.7-3.4l22.7,9.9L421.7,187.2z M416.2,187.6l-27.7,7.8
                 l-15.1,4.3l-8.1-12.1l3.7,0L416.2,187.6z M339.2,199.2l-60.9,6.5l22.4-14.9L339.2,199.2z M276.3,206.9l-5.6,17.6l-8,25.1l-8.5-23.8
                 l-2.7-7.4l8.5-3.9L276.3,206.9z M153.9,237.4l16-5.9l10.9,10L153.9,237.4z M232.6,248.8l-11.8-3.5l8.6,0.9l5.9,0.6l-1.6,1.2
                 L232.6,248.8z M236.4,247l14.8,2.6l1.7,0.2l-19.1-0.9L236.4,247z M236.8,246.3l3.8-11l20.8,14.9l-10.2-1.3L236.8,246.3z M240,234.8
                 l-3.7,10.7l-8.7-25.4L240,234.8z M217.4,244.2l9.2-24.8l9.1,26.7L217.4,244.2z M232.4,249.6l2.7,6.4l-14.8-5.2L232.4,249.6z
                  M261.9,249.7l-9.8-7l-11.2-8l10-15.7L261.9,249.7L261.9,249.7z M216.8,243.8l-14-15.9L226,219L216.8,243.8z M202.2,228.3
                 l13.9,15.8l-33.1-2.4l2.7-1.9L202.2,228.3z M159.1,242.5l-5.3-4.4l24.3,3.7L159.1,242.5z M160.4,243.2l21.3-0.8l3.5,13.2l-5.9-3
                 L160.4,243.2z M185,242.6l29.2,2.1l-14,2.7l-2.2-0.7L185,242.6z M216.7,244.9l1.6,5.3l-16-2.6L216.7,244.9z M217.5,245.1l13.4,4
                 l-11.8,1.2l-1.2-3.9L217.5,245.1z M236,256.2l-2.8-6.6l9,0.4l17.8,0.8l-20.1,4.5L236,256.2z M240.4,234.1l-13-15.4l23-0.2
                 L240.4,234.1z M199.8,229.1l-17.3,12.1l8.7-41.6l10.7,28L199.8,229.1z M157.8,242.4l-20-1.8l14.6-2.6L157.8,242.4z M157.6,243.1
                 l-10.7,4.8l-11.1-6.8L157.6,243.1z M185.9,255.7l-0.1-0.4l-3.4-12.8l4.6,1.4l12.3,3.8l-5,3L185.9,255.7z M215.1,265.1l-7.7,7.6
                 l-6.9-3.6l-1.7-0.9l18.4-5.1L215.1,265.1z M195.6,280.6l0-0.2l2.4-11.7l4.6,2.5l4.1,2.1l-0.8,0.6L195.6,280.6z M217.2,264l1.3-1.3
                 l16.3,2.7l-26.2,7L217.2,264z M223.3,261.1l12.6-4.1l0.4,0l10.3,0.1l-9.8,1.7L223.3,261.1z M241.8,256.3l-2.8,0l20.9-4.7l-9.3,4.7
                 L241.8,256.3z M373.9,217.9l29,2.5l-25.5,25.1L373.9,217.9z M416.5,257.6l78.9-47.8l-45.9,59.5l-16.7-5.9L416.5,257.6z M516,255
                 l26.4,51.7L491.6,336L516,255z M543.6,306.9l70.6-30.4l-46.7,50L543.6,306.9z M615.3,275l-46.4-18.1l55.6-29.2l-1.5,7.8L615.3,275z
                  M682.6,188.7l3.1-2.1l-7.7,39.8l-51.8,0.3L682.6,188.7z M686.2,184.7l-23.9-60.6l45.4-16.2L686.2,184.7z M679.9,170.9l5.7,14.5
                 l-34.9-4.6l-41.7-5.5l52.6-50.8L679.9,170.9z M538,205.2l-40.9,2.9l-7.2-26.6l21.8,10.8L538,205.2z M496.3,207.7l-19.1-12l-2-1.3
                 l14-12.9L496.3,207.7z M363,187.6l-21.6,11.4l-38.1-8.3l36.1-1.8L363,187.6z M269.4,193l29.8-2.2L277,205.7L269.4,193z M226.8,218
                 l-8.7-11.9l-11.3-15.5l43,27.2L226.8,218z M181.7,241.3l-2-1.9l-9.2-8.4l19.8-30.9L181.7,241.3z M169.6,230.9l-11.8,4.4l-4.3,1.6
                 l16.8-23.8l-0.2,4.7L169.6,230.9z M126.9,256.8l-16.7-6.9l34.9-1.2L126.9,256.8z M126.1,257.7l-8.8,13.8l-34.6-5.2L126.1,257.7z
                  M80.8,270l0.2-3.3l4.6,0.7l30.3,4.6l-36.1,11.6L80.8,270z M118.3,271.4l8.7-13.7l1.5,0.8l16.1,8.1l-11.3,2.1L118.3,271.4z
                  M133.4,260.1l-5.2-2.6l26.9-1.3l-9.5,10L133.4,260.1z M156.2,255.5l-6.5-5.3l-1.4-1.1l19.6,4l14,2.9l-24-0.4L156.2,255.5z
                  M187.5,255.6l4.5-2.7l8.2-4.8l16.3,2.6l-25.7,4.3L187.5,255.6z M207.1,260.7l24.9-3.2l-13.7,4.5l-1.9-0.2L207.1,260.7z
                  M194.1,281.1l-26.2,1.7l20.2-6.3l4.3,3.3L194.1,281.1z M188.8,276.1l8.4-7l-2.4,11.7l-3.6-2.8L188.8,276.1z M207.6,273.5l15.5,0.4
                 l-26,6.6L207.6,273.5z M220.6,262.3l6.5-1.1l21.8-3.8l-12.4,7.6L220.6,262.3z M264.6,249.4l5.3-4.8l23.9-21.4l-0.6,13.5L265.6,249
                 L264.6,249.4z M316.9,235.1l-14.8,10.8l-10.5,7.6l2.2-16.3L316.9,235.1z M347.1,241.1l1.2-5.4l4.1-18.9l20.3,0.9L360.4,229
                 L347.1,241.1z M429.8,263l19.4,6.9l-10.7,26.6l-22-38.2L429.8,263z M450,270l61.6-14.6l3.2-0.8l-48.6,50.4l-6.1,6.3l-0.1-0.2
                 L450,270z M492.7,278.7l21.9-22.8l-16.4,33.3l-13.9,28.2l-23.6-5.5L492.7,278.7z M490.9,337.2l24.9,39.8l-57-23.9l30.3-15.1
                 L490.9,337.2z M528.4,315.6l14.4-8.3l23.8,19.5l-73.9,9.4L528.4,315.6z M625.3,227.4l51.9-0.3l-61.2,47.5L625.3,227.4z
                  M678.9,225.6l7.6-39.4l33.7-4.5l-23.4,24.9L678.9,225.6z M686.7,185.4l21.4-76.4l12.7,71.8L686.7,185.4z M707.8,107.2L663.3,123
                 l41.9-38.5L707.8,107.2z M549.7,186.2L539.2,205l-9.5-4.7L490.5,181l69.9-14L549.7,186.2z M417.8,186.4l-45.1-20.1l36.3,6.9
                 l5.9,8.8L417.8,186.4z M400.4,161.9l8,10.4l-36.3-6.9l9.5-1.2L400.4,161.9z M408.8,185.7l6.1,1.1l-50.2-0.1l-20.2-13.1L408.8,185.7
                 z M310.4,179.2l50.7,7.8l-23.8,1.2l-35.9,1.8l8.6-10.3L310.4,179.2z M268.8,193.3l7.3,12.3l0.2,0.4l-24.2,11.2l9.4-13.5
                 L268.8,193.3z M238,198.5l30-5.3l-17,24.3L238,198.5z M202,226.2l-10.5-27.7l13.5-8.6L202,226.2z M174.4,223.6l-4,6.2l0.4-11.8
                 l0.2-6l5.2-3.5l13.6-9L174.4,223.6z M151.8,236.6L121.9,212l23.4,3.6L151.8,236.6z M116.3,228.9L93,235.8l-2.3-17.5L116.3,228.9z
                  M117.3,229.4l16.4,10.8l-39.2-4.1L117.3,229.4z M78.4,285.2l-12.3,21.5l-4.8-10.5L78.4,285.2z M55,285.8l5.2,9.9l-20.1-0.1
                 l7.1-4.7L55,285.8z M79.6,284.6l16.4,10l-29.1,12.1L79.6,284.6z M145.5,267.1l5.9,11.8l-32.1-7L145.5,267.1z M187.5,256.4l29.2-4.9
                 l0.6-0.1l-13.2,9l-12.8-3.1L187.5,256.4z M204.3,261.1l3.1,0.3l9.1,1l-5.7,1.6l-12,3.3l4.3-4.9L204.3,261.1z M196.5,268.7l-3.2,2.7
                 l-5.2,4.3l-20.8-1.1l9-1.8L196.5,268.7z M224.3,274.3l-19.7,16.8l-8.8-9.6L224.3,274.3z M210,272.9l2.1-0.6l22.8-6.1l-9.3,7
                 L210,272.9z M293.1,237.5l-2.2,16.4l-27-3.4L293.1,237.5z M332.4,256.3l-21-1.2l-17.5-1l51.6-11.3l-2,2L332.4,256.3z M373.2,218.2
                 l3.5,27.7l-29.5-4L373.2,218.2z M386,249.3l28.7,8.4L381,274.4l-3.4-27.5L386,249.3z M490.6,336.5l-4.6,2.3l-26.8,13.3l25.2-33.6
                 L490.6,336.5z M458.2,353.7l56.7,23.8l0.2,0.1l-60,4.8l1.9-17.6L458.2,353.7z M447.6,394.2l-29-7.5l0.4,0l35.6-3.6l13.4,16.5
                 L447.6,394.2z M453.9,382.4l-36.1,3.6l20.5-15.7L453.9,382.4z M424.9,389l42,10.9l-24.8,2l-65.4,5.2l39.9-20.2L424.9,389z
                  M411.7,420.7l-57.2,29.6l20.6-42.3L411.7,420.7z M412.6,420.2l-36-12.4l20.4-1.6l69.4-5.5L419,417.9L412.6,420.2z M454.5,382
                 l-15.7-12.1l18.7-15.9l-1.2,11L454.5,382z M337.5,452.3l14.8-0.8l-25.8,16.2l8.7-15.3L337.5,452.3z M326.3,468.7l26.9-16.9
                 l-4.1,23.8L326.3,468.7z M355.7,450.4l55.3-28.6l-10.6,11.9l-10.5,11.7l-6.7,1L355.7,450.4z M412.5,421.2l3.3,4.4l10.1,13.2
                 l-35,6.5L412.5,421.2z M413.2,420.8l4.9-1.8l49.4-17.9l-40.8,37.4l-3.5-4.6L413.2,420.8z M469.1,399.7L455.5,383l59.2-4.7
                 L469.1,399.7z M614.6,277.1l-23.4,62.4l-23.1-12.5L614.6,277.1z M616.7,275.1l61.3-47.6l1.9,42.6L616.7,275.1z M721.9,180.9
                 l31.8-38.2l1,40.5L721.9,180.9z M660.2,125.1l-52,50.2l-45.8-9l41.3-17.4L660.2,125.1z M491.2,180.1l52.4-32.7l16.8,18.8
                 L491.2,180.1z M423,159.1l-13.7,13.3l-8-10.5l14-1.7L423,159.1z M400.4,161.2l-5.1,0.6l-22.5,2.8l33.9-12.6L400.4,161.2z
                  M311.7,178.6l5.4-1.9l37.3,8.4L311.7,178.6z M310.2,178.4l-4.8-0.9l-15.1-2.7l25,1.8L310.2,178.4z M298.9,189.3l0.8,0.8l-12.8,0.9
                 l-17.3,1.3l14-17.8L298.9,189.3z M242.9,206.9l6.8,10l-33.3-21.1l-8.8-5.6l29.5,8.3L242.9,206.9z M172.7,210.1l-1.8,1.2l-8-28.2
                 l27.4,15.3L172.7,210.1z M170.2,211.6l-6.1,0.8l-17.9,2.4l16-31.5L170.2,211.6z M121.1,211.2l6.6-21.4l17.1,25L121.1,211.2z
                  M120.1,211.2l-28.4,5.8l15.8-12.6l5.4-4.3l6.9,10.6L120.1,211.2z M89,201.9l8.9-12l14.1,9.5L89,201.9z M111.7,200.1L90.5,217
                 l-0.7-5.2l-1.2-9.2l9.6-1L111.7,200.1z M87.9,202.8l1.9,14.4l-21.1-8l18.3-6.1L87.9,202.8z M68.3,209.8l19.8,7.5l1.2,0.4l-15.2,6.5
                 l-2.4-5.9L68.3,209.8z M132.4,241.3l-23.9,8l-9-5.8L132.4,241.3z M134.6,241.3l11.1,6.8l-34.8,1.2l20-6.7L134.6,241.3z M63.6,285.2
                 l14.5-0.7l-2.6,1.7l-14.5,9.3l-1.3-2.5l-3.9-7.5L63.6,285.2z M22.1,299.3l16-2.9l-6.4,10.8l-1.6-1.3L22.1,299.3z M34.1,304.7
                 l4.9-8.3l13.2,10.3l-19.7,0.6L34.1,304.7z M53.1,306.5l-13.2-10.2l8.9,0l11.3,0.1l-2.7,3.9L53.1,306.5z M60.7,296.8L60.7,296.8
                 l4.8,10.3l-11.6-0.4L60.7,296.8z M96.7,294.2l-12.8-7.8l-3.6-2.2l36-11.6l-9.6,10.6L96.7,294.2z M146.8,266.1l7.3-7.7l2-2.1
                 l11.1,5.2l-9.9,2.3L146.8,266.1z M168.4,261.2l-8.6-4l-2.1-1l25.7,0.4l-3.6,1.1L168.4,261.2z M165.3,282.9l-0.5-7.6l21.4,1.1
                 L165.3,282.9z M163.7,299.3l13.2,13.4l-15.8,2.8l0.3-2.1L163.7,299.3z M162.7,301.1l-2.3,14.2l-13.5-8.9l16.2-7.2L162.7,301.1z
                  M146.5,307l13.6,9l-12.3,15L146.5,307z M146.6,331.9l-24.2,7.2l13.4-13.8L146.6,331.9z M121.7,340.4l20,7.1l-18.8,2.2L121.7,340.4
                 z M143,347.2l-20.6-7.3l3.8-1.1l20.8-6.2l-0.2,0.8L143,347.2z M148.3,331.6l4.3-5.2l8.1-9.9l9.4,15.2l-9.6,0L148.3,331.6z
                  M161.2,316.2l4.7-0.8l11.2-2l-6.5,17.9L161.2,316.2z M186.4,294.4l8.8-12.5l4.9,5.3l3.8,4.2L186.4,294.4z M294.2,254.8l38.2,2.2
                 l13.5,13.5l-31.8-9.6L294.2,254.8z M343.4,266.9L333,256.6l9.7-10.1l3.4-3.5l0.7,27.3L343.4,266.9z M376.8,246.6l3.4,27.3
                 l-32.7-31.3L376.8,246.6z M415.5,258.1l22.1,38.5l-56-21.7L415.5,258.1z M459.6,312.2l-5,16.4l-15.1-30.3L459.6,312.2z
                  M429.6,376.1l-12.4,9.5l3.7-12l15.9-3L429.6,376.1z M374.8,407.2l-14.9-0.9l51.8-17.7L374.8,407.2z M353.5,450.8l-17.6,0.9
                 l37.6-42L353.5,450.8z M348.6,476.2l-13.2,10.3l-9.2-17.1L348.6,476.2z M469.9,400.2L515,379l-29,29.2L469.9,400.2z M516.7,377.2
                 L491.6,337l74.9-9.5l-9.4,9.4L516.7,377.2z M596.8,326.6l19-50.8l63.3-5l-86.9,68L596.8,326.6z M678.9,226.6l42-44.6l4.5,41.9
                 l2.7,25l-44.6-20.1L678.9,226.6z M754.7,183.9l-8.7,33.9l-24.1-36.2L754.7,183.9z M746.8,217.9l8.7-33.9l5.6-0.2l39.1-1.6
                 L746.8,217.9z M755.5,183.2l-1-40.7l46,38.8L755.5,183.2z M721.4,180.4l-12.7-72.1l44.9,33.5L721.4,180.4z M736.3,76.1l10.4-32
                 l51.6,7.8L736.3,76.1z M619.1,114.6l41.5,9.5l-27.2,11.5l-70.5,29.8l46.1-41.7L619.1,114.6z M448.2,182.8L410,172.7l14.1-13.6
                 l13.4,13.2L448.2,182.8z M422.7,158.4l-9.3,1.2l-12.1,1.5l3.3-4.8l3.1-4.4l14.8,6.5L422.7,158.4z M340,164.2l27.5,1.4l-24.5,7
                 l-2.1-5.9L340,164.2z M315.3,171.6l21.7,7l20,6.5l-34.4-7.8l-5.2-1.2l-1.1-2.4L315.3,171.6z M204.8,189.2l-13.4,8.5l2.1-21
                 L204.8,189.2z M146.1,213.4l1.9-20.3l13.3-9.6L146.1,213.4z M145.7,210.5l-0.4,3.7l-17-24.8l19,3.7L145.7,210.5z M126.9,189.9
                 l-6.4,20.8l-7.1-10.9l6.4-4.6L126.9,189.9z M112.9,199.2l-14-9.5l27.5-0.4L112.9,199.2z M87.6,202.2l-5.2,1.7l-13.6,4.5l12.4-14.6
                 L87.6,202.2z M54,221.9l-0.3-1.3l-3-11.9l16.2,0.8l-7.6,7.3L54,221.9z M53.2,221.6l-10-8.6l3.6-2.2l3.2-1.9l2.8,11L53.2,221.6z
                  M54.6,222.3l13-12.5l4.6,11.4l1.2,3l-7.1-0.7L54.6,222.3z M74,225.2l17.5,10.8L64.9,237L74,225.2z M74.7,224.7l15.3-6.5l2.3,17.3
                 l-15.7-9.6L74.7,224.7z M101,251.9l-10,3.5l7.5-11.7l9.1,5.9L101,251.9z M32.7,285.9l3.5,6.2l1.9,3.2l-24.6-8.8l5.8-0.2L32.7,285.9
                 z M53,307.4l2.6,3.8l6.4,9.3l-28.6-12.5L53,307.4z M53.9,307.4l11.7,0.4l-2.7,12.7L53.9,307.4z M93.2,302.5l-2.5,6.2l-23.1-1.5
                 l28.5-11.9L93.2,302.5z M97.6,294.3l17.2-18.9l2.2-2.5l-1.5,13.7l-0.8,7.3l-16.4,0.4L97.6,294.3z M126,282.6l23.5-2.6l-33.2,13.3
                 L126,282.6z M126,281.9l-7.6-9.5l31.4,6.8l-20.6,2.3L126,281.9z M146.2,266.9l21.1-4.8l-15.2,16.6L146.2,266.9z M185.8,256.7
                 l17.1,4.1l-3.7,1.3l-33.4,12l12-10.4L185.8,256.7z M165.3,283.9l19.2,10.8l-20.6,3.4l0.7-7L165.3,283.9z M163.2,298.1l-17.3-2.4
                 l18.7-11.7l-0.5,4.9L163.2,298.1z M145.8,307.6l1.3,23.7l-10.9-6.6l0.2-0.4L145.8,307.6z M126.3,324.6l-17.7,10.5l22.6-21.6
                 L126.3,324.6z M147,335.3l0.8-2.9l3.2,0l18.3,0.1l-25.4,14.5L147,335.3z M185.6,295.7l7.7,13l-15.1,3.7L185.6,295.7z M186.1,295.2
                 l16-2.7l1.7-0.3l-9.9,16.1L186.1,295.2z M239.2,264.2l11.6-7.1l6-0.5l9.3-0.7L243,263L239.2,264.2z M264.2,251.2l21.3,2.7l1.5,0.2
                 l-17.5,0.8L264.2,251.2z M267.4,281.5l6.5,13.2l0.7,1.5l-3.5-0.2l-10.3-0.5l3-6.4L267.4,281.5z M303.2,284.5l-4.1,3.6l-10-10.9
                 l5.4,1l13.3,2.3L303.2,284.5z M264,309.9l-23-2.1l19.2-11.4L264,309.9z M260.9,296.2l13.7,0.6l-9.9,12.7L260.9,296.2z M292.7,274.7
                 l7.7-3.8l2.8,3.4l4.5,5.4l-18.5-3.2L292.7,274.7z M300.5,270.1l-25.1-0.7l34.9-3L300.5,270.1z M298.4,288.4l-22.3,7.5l12-18.7
                 L298.4,288.4z M308.8,279.8l-7.4-8.9l6.1,0.6l21.1,2l-6.4,2L308.8,279.8z M271.1,270l28,0.8l-8,4l-3,1.5L282,274L271.1,270z
                  M281.6,286l-6.3,9.8l-7.4-14.9l19.4-3.8L281.6,286z M246.7,322.1l-17-1.4l10.1-11.9L246.7,322.1z M227.8,321.3l-12.4,7.6l5-7.7
                 L227.8,321.3z M229.5,321.3l17,1.4l-13.8,11.9L229.5,321.3z M247.5,322l-5-9.7l-2-3.8l2.9,0.3l20.1,1.8l-5.4,3.8L247.5,322z
                  M275.2,297.2l6.4,12.3l-16.4,0.4L275.2,297.2z M282.3,309.2l-6.5-12.5l22.2-7.5L282.3,309.2z M318.2,286l-18,2l8.5-7.4L318.2,286z
                  M328.2,272.7l-26-2.5l10.6-4l14.3,6L328.2,272.7z M310.4,265l-15.1-3.3l-3.5-0.8l-0.1-6l17.5,9.4L310.4,265z M304.2,264.4l6.3,1.4
                 l-38.9,3.3l19.9-7.5L304.2,264.4z M227.8,310.8l11.1-2.2l-9.7,11.5L227.8,310.8z M215.1,329.9l13.7-8.4l1.7,7.1l1.5,6.2L219,331
                 L215.1,329.9z M309.6,280.3l19.8-6.3l-10.2,11.8L309.6,280.3z M312.9,265.5l-3.3-1.7l-15.1-8.1l47.6,14.4l-21.1-3.3L312.9,265.5z
                  M455.2,329l5.1-16.5l23,5.4l-18.1,7.2L455.2,329z M482.5,319.9l-6,8l-18.7,24.9l-6.3-0.3l-9.1-0.4l9.9-8L482.5,319.9z
                  M441.7,352.8l4.1,0.2l11.3,0.5l-12,10.2l-6.2,5.3l1.6-8.6L441.7,352.8z M419.4,376l-3.1,10.1l-11.6-1.4l-7.4-0.9l22.8-10
                 L419.4,376z M349.8,475.6l4.1-23.8l20.5,19.5L349.8,475.6z M375.1,471l-20.6-19.6l34.9-5.1l-2.4,4.1L375.1,471z M391.1,446
                 l34.4-6.4L407,455.7L391.1,446z M436.1,430.8l31.3-28.7l-17.9,29.7l-21.5,6.4L436.1,430.8z M469.1,400.8l0.1-0.2l16.2,8L450.9,431
                 L469.1,400.8z M590.8,340L566,367.7l1.9-40.2L590.8,340z M604.9,329.9l74.7-58.4L666.8,310l-73.3,28.7L604.9,329.9z M678.7,227.3
                 l39,17.6l10,4.5l-47.1,20.4L678.7,227.3z M800.6,182.6l-13.5,32.6l-39.5,3.1L800.6,182.6z M736.9,76.7l13.4-5.2L799,52.4
                 l-16.7,36.4L736.9,76.7z M705.2,83.5L693.7,86l-16.3,3.5l30.7-26.3L705.2,83.5z M704.3,84.4l-41.5,38.1l9-21.2l4.6-10.9l18.5-4
                 L704.3,84.4z M675.4,90.8l-13.8,32.7l-21.8-5l-19.6-4.5L675.4,90.8z M561.2,166l-16.8-18.9l72.8-31.7L561.2,166z M454,181.3
                 l-3.6,1.4l17.1-25l10.7-15.6l64,5L454,181.3z M477.1,142.4l-13.6,19.9L449.4,183l-23.1-22.6l-1.6-1.6l18.9-5.9L477.1,142.4z
                  M414.9,144.8l8.1,12.9l-2.7-1.2l-12.2-5.4l6.2-5.8L414.9,144.8z M406.2,151.4l-35.1,13l16.6-16.6l2.4,0.5L406.2,151.4z
                  M339.3,164.3l3,8.3l-25.6-1.9l19.5-5.6L339.3,164.3z M314.6,170.6l-22.4,2.2l40.3-7.3L314.6,170.6z M283,174.2l-9.8,12.4l-4.3,5.4
                 l-6.7-15.5l-3.1-7.3l14.1,2.9L283,174.2z M258.4,169.4l0.4,1l9.1,21.2l-4.5-3.3l-13.5-10l4.8-5.1L258.4,169.4z M249,178.4
                 l-11.2,18.4l0.6-28.7l0.2,0.2L249,178.4z M218.3,173.3l18.2,24.3l-1.9-0.5l-28.6-8l1.4-1.7L218.3,173.3z M41.7,204.4l7.8,4l-6.7,4
                 l-4.8-10L41.7,204.4z M37.3,202.8l3.7,7.6l1.2,2.4l-6.9,3.9l2-13.7L37.3,202.8z M42.3,213.5l1.9,10.4l0.7,3.6l-9.6-10L42.3,213.5z
                  M45.8,227.9l-2.6-14.1l10.1,8.7l-7.2,5.2L45.8,227.9z M54.5,223.1l18.7,1.9l-9.1,11.8l-2.4-3.5L54.5,223.1z M88.9,256.8l-8.5,9.1
                 l-24.7,1.1l4.1-1.3L88.9,256.8z M52.8,268.3l1.9,16.6l-20.9,0.2l1.2-1.1L52.8,268.3z M32.8,285.1l-13.9,0.4l-5.5,0.2l37.6-16.9
                 L32.8,285.1z M12.6,286.9l23,8.2l1.9,0.7l-16,2.9l-2.6-3.5L12.6,286.9z M11.9,287.2l8.4,11.3l-9-2.8L11.9,287.2z M14.3,297.3l6.5,2
                 l-4.6,12.3l-4.6-15.2L14.3,297.3z M16.7,312.2l4.7-12.5l9.7,7.9l-8.7,2.8L16.7,312.2z M91.7,308.2l5-12.4L97,295l15.6-0.4l1,0
                 l-1,0.6L91.7,308.2z M145.2,296.4l17,2.3l-14.4,6.5l-1.4,0.6l-0.5-3.7L145.2,296.4z M145.3,307.1l-1.1,2l-8.3,14.8l-3.2-11.6l0.1,0
                 L145.3,307.1z M107,336.9l18.9-11.2l-4.9,13.8l-9-1.6L107,336.9z M111.3,347.7l9.7-7.2l1.2,9.1l-4-0.7L111.3,347.7z M122.3,350.4
                 l0.5,2.1l1.6,6.2l-12.6-10.1L122.3,350.4z M204.8,291.9l17.9-4.2l-27.5,19.8L204.8,291.9z M226.1,273.9l8.7-2.4l9.9-2.8l-19.8,17.4
                 l0.8-7.5L226.1,273.9z M291,260.9l-19.4,7.3l19.3-13.3L291,260.9z M269.2,270.1l17.5,6.4l-18.9,3.7l0.1-0.5L269.2,270.1z
                  M267.1,280.3l-9,1.4l10.4-11L267.1,280.3z M266.8,281.1l-6.3,13.7l-2.6-10.5l-0.4-1.7l5.7-0.9L266.8,281.1z M243.1,293.2l16.4,2.8
                 l-19,11.3l2.6-14L243.1,293.2z M239.6,307.6l0,0.1l-11.2,2.2l13.8-15.9L239.6,307.6z M227.2,311.5l0.2,1.5l1.2,7.6l-7.7-0.1
                 l0.1-0.2L227.2,311.5z M224.6,313.9l-4.6,6.6l-15.2,4.2l21.3-13L224.6,313.9z M283.8,308.4l15.4-19.5l18.4-2.1l0.1,0l-1.5,0.9
                 L283.8,308.4z M340.9,271.6l-10.4,1.3l-14.9-6.2l28.9,4.5L340.9,271.6z M347.5,270.9l-0.7-27.9l19,18.2l13.9,13.3l-14.4-1.6
                 L347.5,270.9z M382.1,275.9l54.8,21.2l-30.5,3l-10.8-10.8L382.1,275.9z M407.4,300.7l30.9-3l15.5,31l-10.9-6.6L407.4,300.7z
                  M454.8,329.9l9.3-3.7l18.2-7.2l-39.7,31.9l10.7-18.4L454.8,329.9z M439.2,362.4l-1.3,7.2l-13.7,2.6l-2.5,0.5l19.1-19.2
                 L439.2,362.4z M407.2,385.7l7.7,0.9L361.5,405l22-12.7l12.5-7.9L407.2,385.7z M358.3,406.9l15.8,1l-37.6,41.9l3.7-7.4L358.3,406.9z
                  M334.6,451.9l-16,7.8l15.2-25.9L334.6,451.9z M317.7,463l0.2-1.7l7.1,7.5l-9.9,12.8L317.7,463z M321.1,499.4l4.6-29.5l9.2,17.1
                 l-6.7,6.1L321.1,499.4z M333.6,503.3l0.8-6.4l1.2-9.7l12.6-9.8l-13.3,23.7L333.6,503.3z M349.9,476.3l24.2-4.2l-17.2,17.8
                 L349.9,476.3z M406.4,456.2l-14.4,9.3l-1.4-19.1L406.4,456.2z M591.5,340.3l24.9,4.4L567,367.7l5.8-6.4L591.5,340.3z M592.7,339.8
                 l71.7-28.1l-46.9,32.5L592.7,339.8z M681.7,270.2l45.7-19.9l-17.6,22.7L681.7,270.2z M728.8,248.3l-7.1-65.7l24,36.1l-1.6,2.8
                 L728.8,248.3z M788.1,214.5l13.4-32.2l13.4,12.9l-13,9.4L788.1,214.5z M754,141.2L725.6,120L709,107.6l72.8-17.9l-4.8,8.9
                 L754,141.2z M744.6,45l-16,15.7L706,82.8l2.9-20.2l0.3-0.1L744.6,45z M237.6,167.9l-0.6,29.3l-18.1-24.3l12.9-3.5L237.6,167.9z
                  M217.5,173.1l-12.1,15.5L194,176l1.6-0.2L217.5,173.1z M80.4,193.6l-5.1,6.1l-7.4,8.8l-5.1-14l0.5,0L80.4,193.6z M61.3,194.6
                 l-11.1,13.2l-3.6-4.5l-4.4-5.5l0.3-0.1L61.3,194.6z M46.2,228.5l7.5-5.4l7.7,11l1.6,2.3l-10.6-5L46.2,228.5z M67.6,237.6l25-1
                 l5,6.1l-7.3-1.2L67.6,237.6z M97.4,244.1l-1.7,2.7l-5.7,9l-33.4,10.4l17.3-9.3L97.4,244.1z M17.2,312.8l14.4-4.6l1.7,11.3l-0.7-0.3
                 L17.2,312.8z M34,319.7l-1.7-11.4L61.2,321L45,320.2L34,319.7z M66.3,307.8l23.1,1.5l-25.8,11.4L66.3,307.8z M153.3,278.6l5.5-6
                 l8.7-9.6l-2.6,8.9l-0.8,2.8l-0.1,0.1l-0.1,0.1l-5.9,2.1L153.3,278.6z M164.1,275.7l0.5,7.5l-17.7,11.1l4.8-5.2L164.1,275.7z
                  M125.2,359.1l-2.2-8.6l22.2,4.6l-14.1,2.8L125.2,359.1z M147.2,354.6l-3.4-6.6l17.4-1l-7.6,4.1L147.2,354.6z M162.6,346.2
                 l-17.9,1.1l24.9-14.2l-1.3,2.3L162.6,346.2z M249.3,266.6l20.1-11l8.7-0.4l10.2-0.4l-27.8,8.4L249.3,266.6z M202.8,326.3l9.3,3.3
                 l1.2,0.4l-8.8,4.5l-2.1,1.1l0.3-7.1L202.8,326.3z M214,330.5l2.2,11.4l0.8,3.8l-14.2-9.5L214,330.5z M241.1,341.4l6.5-18.5
                 l10.5,2.4L241.1,341.4z M344.5,272.3L320.8,285l9.8-11.4l14.7-1.8L344.5,272.3z M380.5,275.2l14.1,14.1l9.8,9.8l-55.3-27.4
                 L380.5,275.2z M356.6,408.7l-21.3,42.1l-0.6-13.3l-0.2-4.7L356.6,408.7z M315,483l2.7-3.5l7.3-9.4l-2.7,17.5l-1.8,11.3l-2.3-6.8
                 L315,483z M334.8,488l-2,16.6l-5.5-2.1l-6-2.3L334.8,488z M334,504.1l15.3-27.2l7,13.6l-13.8,8.4L334,504.1z M408.3,455.5
                 l18.1-15.8l1.7,11.4l-16.6,3.7L408.3,455.5z M428.8,450.7l-1.7-11.4l21.3-6.4l-12.5,11.3L428.8,450.7z M520.8,393.7l-3.6-15.3
                 l8.5,4.1l17,8.2l-13.3,1.8L520.8,393.7z M543.9,390.5l-3.1-1.5l-23-11l5.8-1.1l40.9-7.6l-11.7,12.1L543.9,390.5z M667.9,309.2
                 l12.7-38.3l28.6,2.9l-7.6,6.5L667.9,309.2z M729.7,248.2l6.7-11.7l9.9-17.4l10.9,2.5l7.2,1.6l-25,18L729.7,248.2z M765.3,222.7
                 l-2.9-0.6l-13.9-3.1l35.9-2.8l-9.9,3.4L765.3,222.7z M783.4,88.2L800,52.1l39.3-0.8L783.4,88.2z M615.8,115.2l-66.6,29l-5.6,2.4
                 l-35.1-2.8l-27.9-2.2l87.8-17.1L615.8,115.2z M815.5,194.8l-13.4-12.9l63.5-15.5L815.5,194.8z"
            />
            <path
              className="st441"
              d="M835.9,152.1l57.9-40.4c0.1-0.1,0.2-0.3,0.1-0.5c-0.1-0.2-0.3-0.2-0.4-0.2l-44.4,13.6
                 c-0.1,0-0.2,0.1-0.2,0.2l-13.5,26.9c-0.1,0.1,0,0.3,0.1,0.4c0.1,0,0.1,0.1,0.2,0.1C835.8,152.1,835.9,152.1,835.9,152.1z
                  M849.4,125.2l42.1-12.9l-54.9,38.3L849.4,125.2z"
            />
            <path
              className="st441"
              d="M907.5,114c-0.1-0.1-0.3-0.1-0.4,0l-40.6,32.7c-0.1,0.1-0.2,0.2-0.1,0.4c0,0.1,0.2,0.2,0.3,0.2c0,0,0,0,0,0
                 l36.2,1.7c0.2,0,0.4-0.1,0.4-0.3l4.4-34.3C907.7,114.2,907.6,114.1,907.5,114z M902.6,148.3l-34.9-1.6l39.2-31.5L902.6,148.3z"
            />
            <path
              className="st441"
              d="M917.2,51.4c-0.1-0.1-0.3-0.1-0.4,0l-69.8,52.8l14.3-42.4c0.1-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.3-0.1-0.4,0
                 l-56.4,55.5c-0.1,0.1-0.1,0.3-0.1,0.4c0.1,0.1,0.2,0.2,0.3,0.2c0,0,0.1,0,0.1,0l41.8-12l0,0l0,0l52.4-15.3c0.1,0,0.2-0.1,0.2-0.2
                 l18.4-38.2C917.3,51.7,917.3,51.5,917.2,51.4z M860,63l-14.1,41.9l-40.2,11.5L860,63z M898.3,89.6l-50.4,14.7l68-51.5L898.3,89.6z"
            />
          </g>
        </svg>
      </div>
      <div className="l-hand-container single-hand w-7/12 slef-end">
        <svg
          version="1.1"
          id="hand_2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          viewBox="0 0 822 523.7"
        >
          <g>
            <g>
              <polygon className="st0" points="86,483.7 123.3,478.8 135.3,442.6 		" />
              <polygon className="st0" points="31,433.5 70.5,416.5 80.1,390.5 		" />
              <polygon className="st0" points="18.7,400.1 18.1,432.1 52.1,398 		" />
              <polygon className="st0" points="15.6,490.7 75.2,434.4 28.6,453.7 		" />
              <polygon
                className="st0"
                points="112.4,419.1 75.2,434.4 66.2,475.8 		"
              />
              <polygon className="st0" points="65.5,523.1 77.2,504.6 42.6,516.9 		" />
            </g>
            <polygon className="st1" points="469.8,328.1 457.7,342.7 479,337.6 	" />
            <polygon className="st2" points="557,320.3 554.1,315.5 509.4,310.5 	" />
            <polygon className="st3" points="530.9,321.2 557,320.3 509.4,310.5 	" />
            <polygon className="st3" points="560.2,312.7 567.9,301 509.4,310.5 	" />
            <polygon className="st4" points="567.9,301 596.9,295.7 588.1,284.1 	" />
            <polygon className="st5" points="529.5,296.9 567.9,301 588.1,284.1 	" />
            <polygon className="st6" points="509.4,310.5 567.9,301 529.5,296.9 	" />
            <polygon
              className="st7"
              points="699.2,242.7 692.7,238.5 671.7,241.6 	"
            />
            <polygon className="st8" points="479,337.6 506.9,331 469.8,328.1 	" />
            <polygon className="st9" points="457.7,342.7 473.6,347.7 479,337.6 	" />
            <polygon
              className="st10"
              points="459.6,315.9 530.9,321.2 509.4,310.5 	"
            />
            <polygon className="st11" points="506.9,331 530.9,321.2 459.6,315.9 	" />
            <polygon className="st12" points="469.8,328.1 506.9,331 459.6,315.9 	" />
            <polygon
              className="st13"
              points="554.1,315.5 560.2,312.7 509.4,310.5 	"
            />
            <polygon
              className="st1"
              points="720.8,222.1 694.1,226.3 703.3,232.3 	"
            />
            <polygon
              className="st14"
              points="588.1,284.1 596.9,295.7 610.6,270.5 	"
            />
            <polygon
              className="st15"
              points="694.1,226.3 666.8,228.9 703.3,232.3 	"
            />
            <polygon
              className="st16"
              points="683.8,250.4 699.2,242.7 671.7,241.6 	"
            />
            <polygon
              className="st17"
              points="703.3,232.3 666.8,228.9 692.7,238.5 	"
            />
            <polygon
              className="st18"
              points="654.5,219.3 636.1,226.6 649.4,226.6 	"
            />
            <polygon
              className="st19"
              points="596.9,295.7 625.2,287.5 610.6,270.5 	"
            />
            <polygon
              className="st20"
              points="625.2,287.5 655.5,292.5 610.6,270.5 	"
            />
            <polygon className="st21" points="649.4,226.6 683.5,210 654.5,219.3 	" />
            <polygon className="st22" points="662.5,211 655.6,206.8 654.5,219.3 	" />
            <polygon
              className="st23"
              points="683.5,210 684.1,209.7 662.5,211 654.5,219.3 	"
            />
            <polygon className="st24" points="473.6,347.7 506.9,331 479,337.6 	" />
            <polygon className="st25" points="385.8,304.2 363.6,264.3 347,311.3 	" />
            <polygon className="st21" points="423,243.2 363.6,264.3 385.8,304.2 	" />
            <polygon className="st1" points="286.7,345.6 347,311.3 315.5,266.8 	" />
            <polygon className="st6" points="455.4,250.8 423,243.2 385.8,304.2 	" />
            <polygon
              className="st5"
              points="363.6,264.3 333.5,218.5 315.5,266.8 	"
            />
            <polygon className="st20" points="347,311.3 363.6,264.3 315.5,266.8 	" />
            <polygon
              className="st26"
              points="407.6,314.9 455.4,250.8 385.8,304.2 	"
            />
            <polygon
              className="st27"
              points="491.9,257.4 455.4,250.8 470.1,284.1 	"
            />
            <polygon
              className="st26"
              points="470.1,284.1 455.4,250.8 407.6,314.9 	"
            />
            <polygon className="st28" points="347,311.3 395.4,328.8 385.8,304.2 	" />
            <polygon
              className="st29"
              points="431.8,322.4 457.7,342.7 469.8,328.1 	"
            />
            <polygon
              className="st1"
              points="395.4,328.8 407.6,314.9 385.8,304.2 	"
            />
            <polygon
              className="st30"
              points="333.5,218.5 269.9,254.6 315.5,266.8 	"
            />
            <polygon
              className="st27"
              points="348.9,365.5 431.8,322.4 395.4,328.8 	"
            />
            <polygon
              className="st31"
              points="330.9,349.3 348.9,365.5 395.4,328.8 	"
            />
            <polygon className="st4" points="269.9,254.6 266.1,300 315.5,266.8 	" />
            <polygon
              className="st26"
              points="459.6,315.9 431.8,322.4 469.8,328.1 	"
            />
            <polygon className="st32" points="347,311.3 330.9,349.3 395.4,328.8 	" />
            <polygon
              className="st33"
              points="407.6,314.9 431.8,322.4 459.6,315.9 	"
            />
            <polygon
              className="st32"
              points="395.4,328.8 431.8,322.4 407.6,314.9 	"
            />
            <polygon className="st17" points="315.5,266.8 266.1,300 286.7,345.6 	" />
            <polygon className="st28" points="266.1,300 214,344.1 286.7,345.6 	" />
            <polygon className="st34" points="286.7,345.6 330.9,349.3 347,311.3 	" />
            <polygon
              className="st35"
              points="242.7,398.5 330.9,349.3 286.7,345.6 	"
            />
            <polygon className="st34" points="214,344.1 242.7,398.5 286.7,345.6 	" />
            <polygon
              className="st36"
              points="731.1,263.5 739.4,273.6 758.4,254.7 	"
            />
            <polygon className="st24" points="780,260.3 772.7,246.6 758.4,254.7 	" />
            <polygon
              className="st4"
              points="754.3,237.9 714.8,238.1 732.3,247.1 	"
            />
            <polygon
              className="st29"
              points="692.7,238.5 666.8,228.9 671.7,241.6 	"
            />
            <polygon
              className="st6"
              points="758.4,254.7 754.3,237.9 732.3,247.1 	"
            />
            <polygon
              className="st37"
              points="699.2,242.7 714.8,238.1 692.7,238.5 	"
            />
            <polygon
              className="st38"
              points="732.3,247.1 714.8,238.1 699.2,242.7 	"
            />
            <polygon
              className="st39"
              points="739.4,273.6 761.9,268.6 758.4,254.7 	"
            />
            <polygon
              className="st26"
              points="732.3,247.1 731.1,263.5 758.4,254.7 	"
            />
            <polygon
              className="st40"
              points="699.2,242.7 731.1,263.5 732.3,247.1 	"
            />
            <polygon className="st27" points="761.9,268.6 780,260.3 758.4,254.7 	" />
            <polygon
              className="st16"
              points="707.8,262.5 731.1,263.5 699.2,242.7 	"
            />
            <polygon
              className="st3"
              points="498.2,283.4 491.9,257.4 470.1,284.1 	"
            />
            <polygon
              className="st1"
              points="692.7,238.5 714.8,238.1 715.3,237.9 703.3,232.3 	"
            />
            <polygon
              className="st41"
              points="682.2,222.3 684.5,209.7 666.8,228.9 	"
            />
            <polygon
              className="st42"
              points="715.3,237.9 738.4,227.2 703.3,232.3 	"
            />
            <polygon
              className="st43"
              points="649.4,226.6 666.8,228.9 684.5,209.7 683.5,210 	"
            />
            <polygon
              className="st14"
              points="694.1,226.3 682.2,222.3 666.8,228.9 	"
            />
            <polygon className="st36" points="683.5,210 684.5,209.7 684.1,209.7 	" />
            <polygon
              className="st36"
              points="684.5,209.7 684.4,209.6 684.1,209.7 	"
            />
            <polygon
              className="st44"
              points="702.5,215.3 682.2,222.3 694.1,226.3 	"
            />
            <polygon
              className="st25"
              points="685.1,268.2 707.8,262.5 699.2,242.7 	"
            />
            <polygon
              className="st27"
              points="738.4,227.2 762.3,209.1 720.8,222.1 	"
            />
            <polygon
              className="st9"
              points="703.3,232.3 738.4,227.2 720.8,222.1 	"
            />
            <polygon
              className="st28"
              points="762.3,209.1 727.9,207.7 720.8,222.1 	"
            />
            <polygon
              className="st36"
              points="727.9,207.7 702.5,215.3 720.8,222.1 	"
            />
            <polygon
              className="st30"
              points="720.8,222.1 702.5,215.3 694.1,226.3 	"
            />
            <polygon
              className="st2"
              points="772.7,246.6 754.3,237.9 758.4,254.7 	"
            />
            <polygon
              className="st45"
              points="607.1,235 596.8,241.8 596.8,241.8 620.7,233.6 	"
            />
            <polygon className="st46" points="666.8,228.9 649.4,226.6 637,237.4 	" />
            <polygon className="st47" points="654.4,238.2 666.8,228.9 637,237.4 	" />
            <polygon className="st41" points="636.1,226.6 607.1,235 620.7,233.6 	" />
            <polygon
              className="st48"
              points="649.4,226.6 636.1,226.6 620.7,233.6 	"
            />
            <polygon
              className="st49"
              points="671.7,241.6 666.8,228.9 654.4,238.2 	"
            />
            <polygon className="st50" points="637,237.4 649.4,226.6 620.7,233.6 	" />
            <polygon
              className="st51"
              points="654.5,256.7 671.7,241.6 639.3,242.8 	"
            />
            <polygon className="st48" points="620.7,233.6 624.4,240.1 637,237.4 	" />
            <polygon
              className="st31"
              points="639.3,242.8 671.7,241.6 654.4,238.2 	"
            />
            <polygon
              className="st52"
              points="684.1,209.7 684.4,209.6 683.1,201.9 662.5,211 	"
            />
            <polygon className="st53" points="624.4,240.1 639.3,242.8 637,237.4 	" />
            <polygon className="st54" points="637,237.4 639.3,242.8 654.4,238.2 	" />
            <polygon
              className="st36"
              points="667.8,282.6 685.1,268.2 683.8,250.4 	"
            />
            <polygon
              className="st55"
              points="655.5,292.5 667.8,282.6 654.5,256.7 	"
            />
            <polygon
              className="st56"
              points="620.7,233.6 596.8,241.8 597.4,241.8 624.4,240.1 	"
            />
            <polygon
              className="st23"
              points="654.5,256.7 667.8,282.6 671.7,241.6 	"
            />
            <polygon
              className="st26"
              points="671.7,241.6 667.8,282.6 683.8,250.4 	"
            />
            <polygon
              className="st23"
              points="683.8,250.4 685.1,268.2 699.2,242.7 	"
            />
            <polygon className="st11" points="610.6,270.5 655.5,292.5 633,267.8 	" />
            <polygon className="st57" points="633,267.8 655.5,292.5 654.5,256.7 	" />
            <polygon className="st10" points="618.7,254.2 610.6,270.5 633,267.8 	" />
            <polygon
              className="st58"
              points="624.4,240.1 621.3,242.9 639.3,242.8 	"
            />
            <polygon
              className="st59"
              points="597.4,241.8 607.4,241.9 621.3,242.9 624.4,240.1 	"
            />
            <polygon className="st60" points="621.3,242.9 618.7,254.2 633,267.8 	" />
            <polygon className="st44" points="639.3,242.8 621.3,242.9 633,267.8 	" />
            <polygon className="st10" points="633,267.8 654.5,256.7 639.3,242.8 	" />
            <polygon className="st61" points="592.7,173 572.7,189.4 589,187.2 	" />
            <polygon className="st62" points="615.9,161 607.9,155 603.5,174.3 	" />
            <polygon className="st63" points="607.9,155 592.7,173 603.5,174.3 	" />
            <polygon className="st63" points="603.5,174.3 592.7,173 589,187.2 	" />
            <polygon className="st64" points="589,187.2 572.7,189.4 580.4,200.9 	" />
            <polygon
              className="st58"
              points="580.4,200.9 572.7,189.4 559.4,210.7 	"
            />
            <polygon className="st43" points="633.2,164.1 628.5,149.2 615.9,161 	" />
            <polygon className="st36" points="506.1,31.9 494.2,43.5 517,47.7 	" />
            <polygon
              className="st65"
              points="644.4,166.7 643.7,157.1 633.2,164.1 	"
            />
            <polygon className="st30" points="623,183.2 644.4,166.7 628.5,173.1 	" />
            <polygon
              className="st19"
              points="643.7,157.1 628.5,149.2 633.2,164.1 	"
            />
            <polygon
              className="st43"
              points="572.7,189.4 541.1,214.8 559.4,210.7 	"
            />
            <polygon className="st66" points="628.5,149.2 607.9,155 615.9,161 	" />
            <polygon
              className="st67"
              points="551.4,219.3 541.1,214.8 532.1,227.9 	"
            />
            <polygon className="st18" points="182.4,351.9 155.6,320 150.9,353.1 	" />
            <polygon className="st68" points="155.6,320 108.7,359.6 150.9,353.1 	" />
            <polygon
              className="st0"
              points="123.3,478.8 173.1,480.8 179.6,449.3 	"
            />
            <polygon
              className="st69"
              points="85.8,422.4 156.1,391.5 108.7,359.6 	"
            />
            <polygon
              className="st2"
              points="150.9,353.1 156.1,391.5 182.4,351.9 	"
            />
            <polygon
              className="st15"
              points="108.7,359.6 156.1,391.5 150.9,353.1 	"
            />
            <polygon className="st70" points="532.1,227.9 517,231.5 549.1,232.9 	" />
            <polygon className="st71" points="620.5,173.8 623,183.2 628.5,173.1 	" />
            <polygon className="st58" points="541.1,214.8 517,231.5 532.1,227.9 	" />
            <polygon
              className="st58"
              points="559.4,210.7 541.1,214.8 551.4,219.3 	"
            />
            <polygon
              className="st72"
              points="93.8,513.7 173.1,480.8 123.3,478.8 	"
            />
            <polygon className="st56" points="549.1,232.9 517,231.5 570.1,241.4 	" />
            <polygon
              className="st73"
              points="628.5,173.1 644.4,166.7 633.2,164.1 	"
            />
            <polygon className="st63" points="611.8,186.8 589,187.2 594.2,200.1 	" />
            <polygon
              className="st74"
              points="620.5,173.8 603.5,174.3 611.8,186.8 	"
            />
            <polygon className="st75" points="589,187.2 580.4,200.9 594.2,200.1 	" />
            <polygon className="st76" points="603.5,174.3 589,187.2 611.8,186.8 	" />
            <polygon className="st77" points="611.8,186.8 623,183.2 620.5,173.8 	" />
            <polygon
              className="st78"
              points="594.2,200.1 580.4,200.9 589.3,214.8 	"
            />
            <polygon className="st79" points="633.2,164.1 615.9,161 620.5,173.8 	" />
            <polygon className="st71" points="570.1,241.4 589,225 569.3,235 	" />
            <polygon className="st66" points="569.3,235 589,225 549.1,232.9 	" />
            <polygon className="st80" points="615.9,161 603.5,174.3 620.5,173.8 	" />
            <polygon className="st81" points="549.1,232.9 570.1,241.4 569.3,235 	" />
            <polygon
              className="st82"
              points="580.4,200.9 559.4,210.7 570.7,220.5 	"
            />
            <polygon
              className="st4"
              points="628.5,173.1 633.2,164.1 620.5,173.8 	"
            />
            <polygon
              className="st74"
              points="589.3,214.8 580.4,200.9 570.7,220.5 	"
            />
            <polygon className="st43" points="570.7,220.5 589,225 589.3,214.8 	" />
            <polygon
              className="st83"
              points="589.3,214.8 598.6,212.2 594.2,200.1 	"
            />
            <polygon className="st84" points="589,225 598.6,212.2 589.3,214.8 	" />
            <polygon
              className="st64"
              points="559.4,210.7 551.4,219.3 570.7,220.5 	"
            />
            <polygon
              className="st18"
              points="594.2,200.1 610.7,201.1 611.8,186.8 	"
            />
            <polygon className="st85" points="610.7,201.1 623,183.2 611.8,186.8 	" />
            <polygon
              className="st54"
              points="598.6,212.2 610.7,201.1 594.2,200.1 	"
            />
            <polygon
              className="st62"
              points="551.4,219.3 532.1,227.9 559.8,227.4 	"
            />
            <polygon
              className="st58"
              points="570.7,220.5 551.4,219.3 559.8,227.4 	"
            />
            <polygon className="st86" points="559.8,227.4 589,225 570.7,220.5 	" />
            <polygon className="st76" points="549.1,232.9 589,225 559.8,227.4 	" />
            <polygon
              className="st87"
              points="532.1,227.9 549.1,232.9 559.8,227.4 	"
            />
            <polygon
              className="st25"
              points="777.6,179.7 771.6,169.8 761.6,192.6 	"
            />
            <polygon
              className="st17"
              points="802.7,254.3 791.4,246.5 796.1,259.2 	"
            />
            <polygon className="st36" points="715.4,238 715.3,237.9 714.8,238.1 	" />
            <polygon
              className="st9"
              points="754.7,219.4 762.3,209.1 738.4,227.2 	"
            />
            <polygon className="st24" points="796.1,259.2 791.4,246.5 780,260.3 	" />
            <polygon
              className="st36"
              points="616.1,306.9 625.2,287.5 596.9,295.7 	"
            />
            <polygon
              className="st31"
              points="206.6,439.8 242.7,398.5 201.8,418.3 	"
            />
            <polygon className="st28" points="791.4,246.5 772.7,246.6 780,260.3 	" />
            <polygon
              className="st49"
              points="783.4,168.9 771.6,169.8 777.6,179.7 	"
            />
            <polygon
              className="st11"
              points="468.4,297.4 498.2,283.4 470.1,284.1 	"
            />
            <polygon
              className="st29"
              points="761.6,192.6 727.9,207.7 762.3,209.1 	"
            />
            <polygon
              className="st3"
              points="797.7,177.6 783.4,168.9 777.6,179.7 	"
            />
            <polygon
              className="st20"
              points="744.7,184.6 727.9,207.7 761.6,192.6 	"
            />
            <polygon
              className="st5"
              points="771.6,169.8 744.7,184.6 761.6,192.6 	"
            />
            <polygon
              className="st12"
              points="468.4,297.4 459.6,315.9 500.1,299.5 	"
            />
            <polygon
              className="st32"
              points="459.6,315.9 509.4,310.5 500.1,299.5 	"
            />
            <polygon
              className="st36"
              points="407.6,314.9 459.6,315.9 468.4,297.4 	"
            />
            <polygon
              className="st29"
              points="509.4,310.5 529.5,296.9 500.1,299.5 	"
            />
            <polygon className="st36" points="518,282.2 498.2,283.4 500.1,299.5 	" />
            <polygon className="st5" points="529.5,296.9 518,282.2 500.1,299.5 	" />
            <polygon
              className="st26"
              points="588.1,284.1 542.3,278.8 529.5,296.9 	"
            />
            <polygon className="st88" points="570.5,271 542.3,278.8 588.1,284.1 	" />
            <polygon
              className="st6"
              points="378.2,185.8 333.5,218.5 363.6,264.3 	"
            />
            <polygon
              className="st11"
              points="470.1,284.1 407.6,314.9 468.4,297.4 	"
            />
            <polygon className="st26" points="542.3,278.8 518,282.2 529.5,296.9 	" />
            <polygon className="st8" points="201.8,418.3 242.7,398.5 214,344.1 	" />
            <polygon className="st28" points="509.9,64 492.8,66.8 477.7,109 	" />
            <polygon className="st49" points="392,125.3 350.5,150.6 406.8,139.9 	" />
            <polygon className="st36" points="406.9,167.3 423.3,150 406.8,139.9 	" />
            <polygon className="st29" points="441.8,100.8 392,125.3 477.7,109 	" />
            <polygon className="st57" points="441.6,132.5 392,125.3 406.8,139.9 	" />
            <polygon className="st57" points="423.3,150 441.6,132.5 406.8,139.9 	" />
            <polygon className="st10" points="427,85.3 392,125.3 441.8,100.8 	" />
            <polygon className="st52" points="477.7,109 392,125.3 441.6,132.5 	" />
            <polygon className="st26" points="459.9,75.4 427,85.3 441.8,100.8 	" />
            <polygon className="st23" points="494.2,43.5 492.8,66.8 517,47.7 	" />
            <polygon className="st88" points="517,47.7 492.8,66.8 509.9,64 	" />
            <polygon className="st36" points="492.8,66.8 459.9,75.4 441.8,100.8 	" />
            <polygon className="st52" points="477.7,109 492.8,66.8 441.8,100.8 	" />
            <polygon className="st88" points="698.2,178.9 683.8,171.6 683,187.8 	" />
            <polygon className="st4" points="683.8,171.6 668.5,176 683,187.8 	" />
            <polygon
              className="st0"
              points="804.3,186.6 797.7,177.6 783.9,189.1 	"
            />
            <polygon
              className="st89"
              points="406.8,139.9 350.5,150.6 406.9,167.3 	"
            />
            <polygon className="st28" points="813.5,173 803,166.1 797.7,177.6 	" />
            <polygon className="st29" points="803,166.1 783.4,168.9 797.7,177.6 	" />
            <polygon
              className="st49"
              points="705.8,160.9 694.3,155.5 698.2,178.9 	"
            />
            <polygon
              className="st23"
              points="694.3,155.5 683.8,171.6 698.2,178.9 	"
            />
            <polygon
              className="st19"
              points="715.4,136.4 696.6,140.6 717.6,145.6 	"
            />
            <polygon
              className="st90"
              points="696.6,140.6 694.3,155.5 717.6,145.6 	"
            />
            <polygon
              className="st17"
              points="714.2,159.9 717.6,145.6 705.8,160.9 	"
            />
            <polygon
              className="st12"
              points="717.6,145.6 694.3,155.5 705.8,160.9 	"
            />
            <polygon
              className="st2"
              points="500.1,299.5 498.2,283.4 468.4,297.4 	"
            />
            <polygon className="st61" points="696.6,140.6 673,157.7 694.3,155.5 	" />
            <polygon className="st45" points="673,157.7 654,181.4 668.5,176 	" />
            <polygon className="st48" points="645.9,198.3 628.2,204.6 628.3,217 	" />
            <polygon className="st76" points="654,181.4 628.2,204.6 645.9,198.3 	" />
            <polygon
              className="st45"
              points="715.4,136.4 692.3,134.2 696.6,140.6 	"
            />
            <polygon
              className="st91"
              points="696.6,140.6 692.3,134.2 678.7,143.7 	"
            />
            <polygon className="st79" points="683.8,171.6 673,157.7 668.5,176 	" />
            <polygon
              className="st36"
              points="717.6,145.6 726.7,137.1 715.4,136.4 	"
            />
            <polygon
              className="st33"
              points="731.9,146.6 726.7,137.1 717.6,145.6 	"
            />
            <polygon
              className="st61"
              points="715.4,136.4 712.2,127.9 692.3,134.2 	"
            />
            <polygon
              className="st17"
              points="726.7,137.1 712.2,127.9 715.4,136.4 	"
            />
            <polygon className="st67" points="694.3,155.5 673,157.7 683.8,171.6 	" />
            <polygon className="st64" points="678.7,143.7 673,157.7 696.6,140.6 	" />
            <polygon
              className="st42"
              points="700.4,188.3 710.3,172.3 698.2,178.9 	"
            />
            <polygon
              className="st31"
              points="698.2,178.9 710.3,172.3 705.8,160.9 	"
            />
            <polygon className="st33" points="683,187.8 700.4,188.3 698.2,178.9 	" />
            <polygon
              className="st92"
              points="714.2,159.9 731.9,146.6 717.6,145.6 	"
            />
            <polygon
              className="st69"
              points="705.8,160.9 710.3,172.3 714.2,159.9 	"
            />
            <polygon className="st29" points="683.1,201.9 700.4,188.3 683,187.8 	" />
            <polygon
              className="st93"
              points="710.3,172.3 731.9,146.6 714.2,159.9 	"
            />
            <polygon className="st82" points="628.2,204.6 610.1,224.3 628.3,217 	" />
            <polygon className="st94" points="570.1,241.4 517,231.5 531.9,243.4 	" />
            <polygon
              className="st20"
              points="547.3,262.1 570.1,241.4 520.5,258.1 	"
            />
            <polygon
              className="st25"
              points="520.5,258.1 570.1,241.4 531.9,243.4 	"
            />
            <polygon className="st5" points="520.5,258.1 517,231.5 485.8,231.4 	" />
            <polygon className="st21" points="531.9,243.4 517,231.5 520.5,258.1 	" />
            <polygon
              className="st40"
              points="569.7,257.6 570.1,241.4 547.3,262.1 	"
            />
            <polygon
              className="st63"
              points="619.2,225.7 610.1,224.3 590.1,238.3 	"
            />
            <polygon
              className="st25"
              points="596.7,241.8 596.6,241.8 570.1,241.4 569.7,257.6 	"
            />
            <polygon className="st76" points="628.3,217 610.1,224.3 619.2,225.7 	" />
            <polygon
              className="st81"
              points="610.1,224.3 570.1,241.4 590.1,238.3 	"
            />
            <polygon
              className="st87"
              points="590.1,238.3 570.1,241.4 596.6,241.8 	"
            />
            <polygon className="st57" points="823.7,183.8 823.3,174.8 813.5,173 	" />
            <polygon
              className="st32"
              points="684.4,209.6 684.7,209.5 700.4,188.3 683.1,201.9 	"
            />
            <polygon className="st95" points="800,154.9 772.9,156.7 803,166.1 	" />
            <polygon className="st0" points="797.7,177.6 823.7,183.8 813.5,173 	" />
            <polygon className="st7" points="823.3,174.8 816.9,159.9 813.5,173 	" />
            <polygon className="st40" points="816.9,159.9 800,154.9 803,166.1 	" />
            <polygon className="st57" points="813.5,173 816.9,159.9 803,166.1 	" />
            <polygon className="st89" points="517,231.5 459.7,210.6 485.8,231.4 	" />
            <polygon
              className="st69"
              points="754.7,219.4 787.6,205.1 762.3,209.1 	"
            />
            <polygon
              className="st42"
              points="762.3,209.1 787.6,205.1 761.6,192.6 	"
            />
            <polygon
              className="st96"
              points="748.3,232.1 769.9,217.4 787.6,205.1 754.7,219.4 	"
            />
            <polygon
              className="st97"
              points="787.6,205.1 823.7,183.8 804.3,186.6 	"
            />
            <polygon
              className="st98"
              points="761.6,192.6 787.6,205.1 783.9,189.1 	"
            />
            <polygon
              className="st37"
              points="783.9,189.1 787.6,205.1 804.3,186.6 	"
            />
            <polygon
              className="st72"
              points="804.3,186.6 823.7,183.8 797.7,177.6 	"
            />
            <polygon className="st99" points="727.9,207.7 728,186.9 719.2,198.9 	" />
            <polygon
              className="st48"
              points="702.5,215.3 695.4,204.2 682.2,222.3 	"
            />
            <polygon
              className="st77"
              points="727.9,207.7 719.2,198.9 695.4,204.2 	"
            />
            <polygon className="st45" points="695.4,204.2 719.2,198.9 728,186.9 	" />
            <polygon
              className="st100"
              points="727.9,207.7 695.4,204.2 702.5,215.3 	"
            />
            <polygon className="st23" points="803,166.1 772.9,156.7 783.4,168.9 	" />
            <polygon
              className="st36"
              points="684.5,209.7 684.7,209.5 684.4,209.6 	"
            />
            <polygon
              className="st48"
              points="682.2,222.3 695.4,204.2 684.7,209.5 684.5,209.7 	"
            />
            <polygon className="st77" points="744.7,184.6 728,186.9 727.9,207.7 	" />
            <polygon
              className="st91"
              points="772.9,156.7 748.6,170.8 771.6,169.8 	"
            />
            <polygon
              className="st99"
              points="783.4,168.9 772.9,156.7 771.6,169.8 	"
            />
            <polygon className="st66" points="748.6,170.8 728,186.9 744.7,184.6 	" />
            <polygon
              className="st48"
              points="771.6,169.8 748.6,170.8 744.7,184.6 	"
            />
            <polygon
              className="st36"
              points="439.2,145.2 460.8,132.7 441.6,132.5 	"
            />
            <polygon className="st53" points="324,141.3 306.5,163.9 350.5,150.6 	" />
            <polygon className="st45" points="375.5,119.3 345.2,136 350.5,150.6 	" />
            <polygon
              className="st2"
              points="350.5,150.6 306.5,163.9 308.9,202.4 	"
            />
            <polygon className="st65" points="345.2,136 324,141.3 350.5,150.6 	" />
            <polygon
              className="st101"
              points="308.9,202.4 306.5,163.9 285.6,192.9 	"
            />
            <polygon className="st51" points="261.1,191.3 219,227.8 285.6,192.9 	" />
            <polygon
              className="st64"
              points="306.5,163.9 261.1,191.3 285.6,192.9 	"
            />
            <polygon className="st79" points="443.3,67.5 424,74.1 427,85.3 	" />
            <polygon className="st71" points="392,125.3 375.5,119.3 350.5,150.6 	" />
            <polygon className="st76" points="424,74.1 406.4,94 427,85.3 	" />
            <polygon className="st51" points="456.5,56.8 443.3,67.5 459.9,75.4 	" />
            <polygon className="st54" points="427,85.3 406.4,94 392,125.3 	" />
            <polygon className="st45" points="406.4,94 375.5,119.3 392,125.3 	" />
            <polygon className="st99" points="459.9,75.4 443.3,67.5 427,85.3 	" />
            <polygon className="st79" points="168.7,289.9 137.6,317.9 155.6,320 	" />
            <polygon className="st38" points="118.2,327 94.4,348.5 108.7,359.6 	" />
            <polygon className="st36" points="137.6,317.9 118.2,327 155.6,320 	" />
            <polygon className="st11" points="155.6,320 118.2,327 108.7,359.6 	" />
            <polygon className="st74" points="285.6,192.9 219,227.8 211,265.8 	" />
            <polygon
              className="st40"
              points="485.8,231.4 459.7,210.6 430.5,216.7 	"
            />
            <polygon className="st6" points="94.4,348.5 49.1,381.2 108.7,359.6 	" />
            <polygon className="st44" points="183.4,266 168.7,289.9 211,265.8 	" />
            <polygon className="st73" points="219,227.8 183.4,266 211,265.8 	" />
            <polygon
              className="st95"
              points="217.2,305.7 168.7,289.9 182.4,351.9 	"
            />
            <polygon className="st85" points="182.4,351.9 168.7,289.9 155.6,320 	" />
            <polygon
              className="st101"
              points="211,265.8 168.7,289.9 217.2,305.7 	"
            />
            <polygon
              className="st96"
              points="738.4,227.2 748.3,232.1 754.7,219.4 	"
            />
            <polygon className="st36" points="423.3,150 439.2,145.2 441.6,132.5 	" />
            <polygon className="st57" points="422.2,166.4 439.2,145.2 423.3,150 	" />
            <polygon
              className="st36"
              points="460.8,132.7 471.6,124.1 493.3,108.2 441.6,132.5 	"
            />
            <polygon className="st29" points="441.6,132.5 493.3,108.2 477.7,109 	" />
            <polygon className="st33" points="406.9,167.3 422.2,166.4 423.3,150 	" />
            <polygon
              className="st27"
              points="412.4,188.6 422.2,166.4 386.1,202.5 	"
            />
            <polygon
              className="st19"
              points="430.5,216.7 412.4,188.6 409.2,205.3 	"
            />
            <polygon
              className="st36"
              points="459.7,210.6 412.4,188.6 430.5,216.7 	"
            />
            <polygon className="st17" points="477.7,109 493.3,108.2 509.9,64 	" />
            <polygon
              className="st57"
              points="386.1,202.5 422.2,166.4 406.9,167.3 	"
            />
            <polygon
              className="st83"
              points="409.2,205.3 412.4,188.6 386.1,202.5 	"
            />
            <polygon className="st36" points="525,54.5 525.6,33.6 517,47.7 	" />
            <polygon className="st16" points="506.3,15.1 486,30.9 494.2,43.5 	" />
            <polygon className="st18" points="486,30.9 471,50.2 494.2,43.5 	" />
            <polygon className="st47" points="506.1,31.9 506.3,15.1 494.2,43.5 	" />
            <polygon className="st44" points="518.3,18.2 506.3,15.1 506.1,31.9 	" />
            <polygon className="st60" points="494.2,43.5 471,50.2 492.8,66.8 	" />
            <polygon className="st86" points="492.8,66.8 471,50.2 459.9,75.4 	" />
            <polygon className="st100" points="471,50.2 456.5,56.8 459.9,75.4 	" />
            <polygon className="st36" points="509.9,64 525,54.5 517,47.7 	" />
            <polygon className="st57" points="512.7,81.8 525,54.5 509.9,64 	" />
            <polygon className="st30" points="525.6,33.6 518.3,18.2 517,47.7 	" />
            <polygon className="st52" points="493.3,108.2 512.7,81.8 509.9,64 	" />
            <polygon className="st20" points="517,47.7 518.3,18.2 506.1,31.9 	" />
            <polygon className="st40" points="569.7,257.6 547.3,262.1 570.5,271 	" />
            <polygon
              className="st8"
              points="406.9,167.3 350.5,150.6 378.2,185.8 	"
            />
            <polygon
              className="st19"
              points="363.6,264.3 386.1,202.5 378.2,185.8 	"
            />
            <polygon
              className="st7"
              points="350.5,150.6 308.9,202.4 378.2,185.8 	"
            />
            <polygon className="st102" points="206,459.8 233,431 206.6,439.8 	" />
            <polygon
              className="st28"
              points="378.2,185.8 308.9,202.4 333.5,218.5 	"
            />
            <polygon
              className="st20"
              points="333.5,218.5 308.9,202.4 269.9,254.6 	"
            />
            <polygon className="st88" points="455.4,250.8 430.5,216.7 423,243.2 	" />
            <polygon
              className="st23"
              points="308.9,202.4 285.6,192.9 269.9,254.6 	"
            />
            <polygon
              className="st49"
              points="485.8,231.4 430.5,216.7 455.4,250.8 	"
            />
            <polygon
              className="st7"
              points="491.9,257.4 485.8,231.4 455.4,250.8 	"
            />
            <polygon
              className="st22"
              points="409.2,205.3 386.1,202.5 363.6,264.3 	"
            />
            <polygon className="st47" points="423,243.2 409.2,205.3 363.6,264.3 	" />
            <polygon className="st51" points="430.5,216.7 409.2,205.3 423,243.2 	" />
            <polygon
              className="st103"
              points="217.2,305.7 182.4,351.9 214,344.1 	"
            />
            <polygon
              className="st72"
              points="135.3,442.6 179.6,449.3 201.8,418.3 	"
            />
            <polygon
              className="st104"
              points="715.3,237.9 715.4,238 748.3,232.1 738.4,227.2 	"
            />
            <polygon
              className="st0"
              points="201.8,418.3 179.6,449.3 206.6,439.8 	"
            />
            <polygon
              className="st42"
              points="156.1,391.5 135.3,442.6 201.8,418.3 	"
            />
            <polygon
              className="st105"
              points="179.6,449.3 173.1,480.8 206.6,439.8 	"
            />
            <polygon
              className="st106"
              points="173.1,480.8 206,459.8 206.6,439.8 	"
            />
            <polygon className="st22" points="211,265.8 217.2,305.7 269.9,254.6 	" />
            <polygon className="st68" points="214,344.1 182.4,351.9 201.8,418.3 	" />
            <polygon className="st71" points="285.6,192.9 211,265.8 269.9,254.6 	" />
            <polygon className="st95" points="269.9,254.6 217.2,305.7 266.1,300 	" />
            <polygon
              className="st12"
              points="520.5,258.1 485.8,231.4 491.9,257.4 	"
            />
            <polygon className="st1" points="266.1,300 217.2,305.7 214,344.1 	" />
            <polygon
              className="st33"
              points="386.1,202.5 406.9,167.3 378.2,185.8 	"
            />
            <polygon className="st75" points="636.1,226.6 619.2,225.7 607.1,235 	" />
            <polygon className="st67" points="655.6,206.8 628.3,217 645.1,215.6 	" />
            <polygon className="st76" points="628.3,217 619.2,225.7 645.1,215.6 	" />
            <polygon
              className="st36"
              points="596.6,241.8 596.7,241.8 596.8,241.8 	"
            />
            <polygon className="st87" points="619.2,225.7 590.1,238.3 607.1,235 	" />
            <polygon
              className="st107"
              points="607.1,235 590.1,238.3 596.6,241.8 596.8,241.8 	"
            />
            <polygon
              className="st76"
              points="645.1,215.6 619.2,225.7 636.1,226.6 	"
            />
            <polygon className="st13" points="655.6,206.8 683.1,201.9 663,193.4 	" />
            <polygon className="st54" points="683.1,201.9 683,187.8 663,193.4 	" />
            <polygon className="st38" points="645.9,198.3 655.6,206.8 663,193.4 	" />
            <polygon className="st67" points="654,181.4 645.9,198.3 663,193.4 	" />
            <polygon className="st50" points="655.6,206.8 645.9,198.3 628.3,217 	" />
            <polygon className="st101" points="683,187.8 668.5,176 663,193.4 	" />
            <polygon className="st76" points="668.5,176 654,181.4 663,193.4 	" />
            <polygon className="st25" points="542.3,278.8 520.5,258.1 518,282.2 	" />
            <polygon className="st10" points="570.5,271 547.3,262.1 542.3,278.8 	" />
            <path className="st36" d="M596.8,241.8L596.8,241.8L596.8,241.8z" />
            <polygon
              className="st108"
              points="662.5,211 683.1,201.9 655.6,206.8 	"
            />
            <polygon className="st5" points="596.7,241.8 569.7,257.6 570.5,271 	" />
            <polygon
              className="st30"
              points="498.2,283.4 520.5,258.1 491.9,257.4 	"
            />
            <polygon className="st21" points="518,282.2 520.5,258.1 498.2,283.4 	" />
            <polygon
              className="st26"
              points="547.3,262.1 520.5,258.1 542.3,278.8 	"
            />
            <polygon
              className="st36"
              points="596.8,241.8 596.7,241.8 597.4,241.8 	"
            />
            <polygon className="st25" points="588.1,284.1 596.7,241.8 570.5,271 	" />
            <polygon
              className="st41"
              points="621.3,242.9 607.4,241.9 597.4,241.8 596.7,241.8 618.7,254.2 	"
            />
            <polygon
              className="st4"
              points="610.6,270.5 596.7,241.8 588.1,284.1 	"
            />
            <polygon
              className="st109"
              points="618.7,254.2 596.7,241.8 610.6,270.5 	"
            />
            <polygon
              className="st7"
              points="182.4,351.9 156.1,391.5 201.8,418.3 	"
            />
            <polygon className="st98" points="727,284.9 754.3,281.5 739.4,273.6 	" />
            <polygon className="st15" points="731.1,263.5 727,284.9 739.4,273.6 	" />
            <polygon className="st57" points="707.8,262.5 727,284.9 731.1,263.5 	" />
            <polygon
              className="st8"
              points="739.4,273.6 754.3,281.5 761.9,268.6 	"
            />
            <polygon
              className="st110"
              points="769.2,276.3 786.5,273.5 780,260.3 	"
            />
            <polygon
              className="st33"
              points="754.3,281.5 769.2,276.3 761.9,268.6 	"
            />
            <polygon className="st27" points="761.9,268.6 769.2,276.3 780,260.3 	" />
            <polygon
              className="st24"
              points="685.1,268.2 695.8,294.5 707.8,262.5 	"
            />
            <polygon
              className="st37"
              points="667.8,282.6 695.8,294.5 685.1,268.2 	"
            />
            <polygon className="st98" points="668,303.6 695.8,294.5 667.8,282.6 	" />
            <polygon className="st39" points="708.1,283.3 727,284.9 707.8,262.5 	" />
            <polygon className="st37" points="695.8,294.5 727,284.9 708.1,283.3 	" />
            <polygon
              className="st35"
              points="707.8,262.5 695.8,294.5 708.1,283.3 	"
            />
            <polygon
              className="st52"
              points="802.7,254.3 798.4,240.2 791.4,246.5 	"
            />
            <polygon
              className="st36"
              points="791.4,246.5 780.4,233.9 772.7,246.6 	"
            />
            <polygon className="st92" points="780,260.3 786.5,273.5 796.1,259.2 	" />
            <polygon
              className="st23"
              points="772.7,246.6 780.4,233.9 754.3,237.9 	"
            />
            <polygon
              className="st23"
              points="780.4,233.9 748.3,232.1 754.3,237.9 	"
            />
            <polygon className="st9" points="655.5,292.5 668,303.6 667.8,282.6 	" />
            <polygon
              className="st14"
              points="715.5,238 715.4,238 714.8,238.1 754.3,237.9 748.3,232.1 715.4,238 	"
            />
            <polygon
              className="st20"
              points="798.4,240.2 780.4,233.9 791.4,246.5 	"
            />
            <polygon
              className="st28"
              points="805.1,268.3 808.8,264.1 796.1,259.2 	"
            />
            <polygon
              className="st111"
              points="786.5,273.5 805.1,268.3 796.1,259.2 	"
            />
            <polygon
              className="st112"
              points="796.1,259.2 808.8,264.1 802.7,254.3 	"
            />
            <polygon
              className="st1"
              points="809.4,249.4 798.4,240.2 802.7,254.3 	"
            />
            <polygon
              className="st42"
              points="808.8,264.1 809.4,249.4 802.7,254.3 	"
            />
            <polygon
              className="st12"
              points="616.1,306.9 627.7,315.8 625.2,287.5 	"
            />
            <polygon className="st33" points="506.9,331 534.8,329.3 530.9,321.2 	" />
            <polygon
              className="st27"
              points="467.4,354.9 492.3,349.3 473.6,347.7 	"
            />
            <polygon
              className="st32"
              points="409.8,363.6 467.4,354.9 457.7,342.7 	"
            />
            <polygon
              className="st34"
              points="457.7,342.7 467.4,354.9 473.6,347.7 	"
            />
            <polygon className="st98" points="492.3,349.3 534.8,329.3 506.9,331 	" />
            <polygon className="st68" points="473.6,347.7 492.3,349.3 506.9,331 	" />
            <polygon
              className="st32"
              points="431.8,322.4 409.8,363.6 457.7,342.7 	"
            />
            <polygon className="st72" points="233,431 283,403.2 242.7,398.5 	" />
            <polygon className="st7" points="242.7,398.5 283,403.2 330.9,349.3 	" />
            <polygon
              className="st112"
              points="283,403.2 328.6,388.9 409.8,363.6 348.9,365.5 	"
            />
            <polygon
              className="st105"
              points="348.9,365.5 409.8,363.6 431.8,322.4 	"
            />
            <polygon className="st55" points="330.9,349.3 283,403.2 348.9,365.5 	" />
            <polygon className="st33" points="530.9,321.2 534.8,329.3 557,320.3 	" />
            <polygon
              className="st24"
              points="608.8,316.7 627.7,315.8 616.1,306.9 	"
            />
            <polygon className="st92" points="206.6,439.8 233,431 242.7,398.5 	" />
            <polygon
              className="st10"
              points="585.2,314.4 608.8,316.7 596.9,295.7 	"
            />
            <polygon
              className="st21"
              points="596.9,295.7 608.8,316.7 616.1,306.9 	"
            />
            <polygon className="st1" points="627.7,315.8 645.3,309 625.2,287.5 	" />
            <polygon className="st31" points="625.2,287.5 645.3,309 655.5,292.5 	" />
            <polygon
              className="st113"
              points="534.8,329.3 585.2,314.4 557,320.3 	"
            />
            <polygon className="st32" points="557,320.3 585.2,314.4 554.1,315.5 	" />
            <polygon className="st92" points="645.3,309 668,303.6 655.5,292.5 	" />
            <polygon className="st28" points="560.2,312.7 585.2,314.4 567.9,301 	" />
            <polygon
              className="st40"
              points="554.1,315.5 585.2,314.4 560.2,312.7 	"
            />
            <polygon className="st88" points="567.9,301 585.2,314.4 596.9,295.7 	" />
            <polygon
              className="st55"
              points="797.7,177.6 777.6,179.7 783.9,189.1 	"
            />
            <polygon
              className="st92"
              points="783.9,189.1 777.6,179.7 761.6,192.6 	"
            />
            <polygon
              className="st53"
              points="655.6,206.8 645.1,215.6 654.5,219.3 	"
            />
            <polygon
              className="st41"
              points="654.5,219.3 645.1,215.6 636.1,226.6 	"
            />
            <polygon className="st0" points="135.3,442.6 123.3,478.8 86,483.7 	" />
            <polygon className="st0" points="31,433.5 70.5,416.5 80.1,390.5 	" />
            <polygon className="st18" points="52.1,398 18.1,432.1 18.7,400.1 	" />
            <polygon className="st2" points="75.2,434.4 15.6,490.7 28.6,453.7 	" />
            <polygon className="st42" points="66.2,475.8 75.2,434.4 112.4,419.1 	" />
            <polygon className="st0" points="65.5,523.1 77.2,504.6 42.6,516.9 	" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Hands
