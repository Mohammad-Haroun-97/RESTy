import React from 'react';


export default function Results(props) {
  const {data}=props
  console.log('data',data);

  return (
    <section>
      <pre  data-testid='submit-result' >{data ? JSON.stringify(data, undefined, 2) : 'loading'}</pre>
    </section>
    
  );

  
}

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;
