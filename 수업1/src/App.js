import React from 'react';
import Macaron from './Macaron';
import PropTypes from 'prop-types';

// function Food(props) { //자식컴포넌트
//   return (
//     <h1>I Like {props.propsName}</h1>
//   );
// }
  
function Food(props) { //구조 분해 할당
  const {propsName} = props;
  return (
    <h1>I Like {propsName}</h1>
  );
}

// function Food({propsName}) { //구조 분해 할당
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }

function Food({propsname, propsid, propsimage}){
  return (
    <div>
      <h1>cake No.{propsid}</h1>
      <h2>{propsname}</h2>
      <img src={propsimage} alt={propsname} />
    </div>
  );
}


//서버에서 가져온 데이터를 저장하는 변수
//const foodLike = [];

const cakes = [
 {
   id: 1,
   name: 'Cookie Dough Cake',
   image: 'https://i.pinimg.com/236x/48/6a/9a/486a9aaab8571b0a9e512c23bab36a68.jpg',
 },
 {
  id: 2,
  name: 'Rainbow Cake',
  image: 'https://i.pinimg.com/236x/dc/e3/2e/dce32e513ce557a951cbbe7fe15f10cb.jpg',
 },
 {
  id: 3,
  name: 'Soft & Moist Funfetti Cake',
  image: 'https://i.pinimg.com/236x/69/9f/6c/699f6cb625a4a749c6320d22c075bd6f.jpg',
 },
];


function App() { //부모컴포넌트
  return (
   <>
      <div>안녕하세요!!</div>
      <Macaron />
      {/* <Food propsName = {"macaron"}/> */}
      {cakes.map(cake => (
                              <Food 
                                  propsid={cake.id}
                                  propsname={cake.name} 
                                  propsimage={cake.image} 
                              />
                            ))}

   </>
  );
}

// class App extends React.Component {
//   render() {
//     return (

//     );
//   }
// }


//npm install prop-types
Food.propTypes = {
  propsid: PropTypes.number.isRequired,
  propsname: PropTypes.string.isRequired,
  propsimage:PropTypes.string
}



export default App;
