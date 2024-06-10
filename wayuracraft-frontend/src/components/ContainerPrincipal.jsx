import React from 'react';
import "../styles/ContainerPrincipal.css";
// import Login from '../pages/Login';
import Anuncios from './Anuncios';

const ContainerPrincipal = () => {
  return (
    <div className="container-principal">
      <h1>Welcome to WayuuCraft</h1>
      <Anuncios />
      <p>Explore our collection of Wayuu artisan products.</p>

      <div className="products-preview">
        {/* Aquí puedes agregar una vista previa de productos o cualquier otro contenido relevante */}
      </div>
    </div>
  );
};



// const ContainerPrincipal = ({ isLoggedIn }) => {
//   return (
//     <div className="container-principal">
//       {!isLoggedIn ? (
//         <Login />
//       ) : (
//         <>

//           <h1>Welcome to WayuuCraft</h1>
//           <Anuncios />
//           <p>Explore our collection of Wayuu artisan products.</p>

//           <div className="products-preview">
//             {/* Aquí puedes agregar una vista previa de productos o cualquier otro contenido relevante */}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

export default ContainerPrincipal;


