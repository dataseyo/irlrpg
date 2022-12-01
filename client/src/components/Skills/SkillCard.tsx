import React from 'react'

import icons from '../../assets/icons/icons.png'

type SkillCardType = {
  id: number,
  level: number,
  name: string,
  asset: string
}

/* SKILL CARD COMPONENT

    - individual card in the list of skills
    - show skill icon and level
*/
const SkillCard = ({
  id,
  level,
  name,
  asset
}: SkillCardType) => {
  const spriteWidth = 32
  const spriteHeight = 32
  return (
    <div 
      className="skill-card__container"
      key={id}
    >
      <div className="skill-card__header">
          <div style={{
          background: `url(${icons}) -${spriteWidth}px -${spriteHeight}px`,
          width: "32px",
          height: "32px"
        }}></div>
        <h3>{name}</h3>
      </div>
      
      <p>{level} / 99</p>
    </div>
  )
}

export default SkillCard