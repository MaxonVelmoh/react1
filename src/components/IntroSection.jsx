import React from 'react'

// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className="centered">AGAT NAHUI</h1>
//       <h3 className="centered" style={{ color: '#666' }}>
//         chto-to pro AGAT
//       </h3>
//     </section>
//   )
// }

export default function IntroSection() {
  return React.createElement('section', null, [
    React.createElement('h1', { className: 'centered' }, 'AGAT NAHUI'),
    React.createElement(
      'h3',
      { className: 'centered', style: { color: '#666' } },
      'chto-to pro AGAT'
    ),
  ])
}
